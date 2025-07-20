import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, TrendingUp, RefreshCcw, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface GoldPriceData {
  ask: number;
  base_currency: string;
  bid: number;
  mid: number;
  quote_currency: string;
}

interface ApiResponse {
  endpoint: string;
  quotes: GoldPriceData[];
  requested_time: string;
  timestamp: number;
}

const LivePrice = () => {
  const [priceData, setPriceData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchPriceData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://marketdata.tradermade.com/api/v1/live?currency=XAUUSD&api_key=fz7uld3FsJ8nMBcbpn1D');
      
      if (!response.ok) {
        throw new Error('Failed to fetch price data');
      }
      
      const data = await response.json();
      
      // Check if the API returned an error
      if (data.error) {
        throw new Error(data.message || 'API returned an error');
      }
      
      // Check if quotes array exists
      if (!data.quotes || !Array.isArray(data.quotes) || data.quotes.length === 0) {
        throw new Error('Invalid data format received from API');
      }
      
      setPriceData(data as ApiResponse);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPriceData();
    // Refresh every 30 seconds
    const interval = setInterval(fetchPriceData, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatLocalTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleString();
  };

  const calculatePrice = (basePrice: number, weight: number, karat: number = 100) => {
    const pricePerGram = basePrice / 31.1035; // Convert from per ounce to per gram
    const karatMultiplier = karat / 100;
    const usdPrice = pricePerGram * weight * karatMultiplier;
    const bhdPrice = usdPrice * 0.377;
    
    // Apply 1% price bump
    const usdPriceWithBump = usdPrice * 1.01;
    const bhdPriceWithBump = bhdPrice * 1.01;
    
    return {
      usd: usdPriceWithBump.toFixed(2),
      bhd: bhdPriceWithBump.toFixed(3)
    };
  };

  const priceItems = [
    { label: '24k per gram', weight: 1, karat: 100 },
    { label: '22k per gram', weight: 1, karat: 91.67 },
    { label: '21k per gram', weight: 1, karat: 87.5 },
    { label: '18k per gram', weight: 1, karat: 75 },
    { label: '1 tola (24k)', weight: 11.664, karat: 100 },
    { label: '1 ounce (24k)', weight: 31.1035, karat: 100 },
    { label: '1 kg (24k)', weight: 1000, karat: 100 },
  ];

  if (loading && !priceData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-jewelry-purple via-gray-900 to-jewelry-indigo flex items-center justify-center">
        <div className="text-center">
          <RefreshCcw className="animate-spin mx-auto mb-4 text-white" size={48} />
          <p className="text-white text-lg">Loading live gold prices...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-jewelry-purple via-gray-900 to-jewelry-indigo flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-400 mb-4">
            <TrendingUp size={48} className="mx-auto" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Unable to load prices</h2>
          <p className="text-white/70 mb-4">{error}</p>
          <Button onClick={fetchPriceData} className="bg-white/10 border border-white/20 text-white hover:bg-white/20">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-jewelry-purple via-gray-900 to-jewelry-indigo">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Live Gold Prices
            </h1>
            
            {priceData && (
              <div className="flex items-center justify-center space-x-4 text-sm text-white/70">
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>Last updated: {formatLocalTime(priceData.requested_time)}</span>
                </div>
                <Button 
                  onClick={fetchPriceData} 
                  variant="outline" 
                  size="sm"
                  disabled={loading}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <RefreshCcw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Price Grid */}
        {priceData && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {priceItems.map((item, index) => {
              const prices = calculatePrice(priceData.quotes[0].ask, item.weight, item.karat);
              
              return (
                <Card key={index} className="glass-purple border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-white">
                      {item.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-lg p-3 border border-white/10">
                        <div className="text-sm text-white/70 mb-1">USD</div>
                        <div className="text-xl font-bold text-white">
                          ${prices.usd}
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/10">
                        <div className="text-sm text-white/70 mb-1">BHD</div>
                        <div className="text-xl font-bold text-white">
                          {prices.bhd} BD
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Market Info */}
        {priceData && (
          <div className="mt-12 text-center">
            <Card className="glass-purple border-white/10 max-w-md mx-auto">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Market Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Base Price (XAU/USD):</span>
                    <span className="font-semibold text-white">${priceData.quotes[0].ask.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Bid Price:</span>
                    <span className="font-semibold text-white">${priceData.quotes[0].bid.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">USD to BHD Rate:</span>
                    <span className="font-semibold text-white">0.377</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Markup Applied:</span>
                    <span className="font-semibold text-white">+1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default LivePrice;