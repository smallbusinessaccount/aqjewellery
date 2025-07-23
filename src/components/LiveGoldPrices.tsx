import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, TrendingUp, RefreshCcw, ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionHeader from './common/SectionHeader';

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

const purityLevels = [
  { label: "24k", percent: 100 },
  { label: "22k", percent: 91.7 },
  { label: "21k", percent: 87.5 },
  { label: "18k", percent: 75 },
];

const GoldPurityBar = ({ karat, label }: { karat: number; label: string }) => {
  const fillColor =
    karat >= 95 ? '#FFD700' : karat >= 85 ? '#FFC107' : karat >= 75 ? '#FFB300' : '#DAA520';

  return (
    <div className="w-full">
      <div className="w-full h-5 rounded-full bg-yellow-100/20 overflow-hidden relative">
        <div
          className="h-full rounded-full"
          style={{ width: `${karat}%`, backgroundColor: fillColor }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-2 py-1 text-[10px] font-medium" style={{ color: '#4b3621' }}>
          <span className="mr-1">{label}</span>
          <Sparkles className="w-3 h-3 mr-1" style={{ color: '#4b3621' }} />
          <span>
            {Number(karat) % 1 === 0 ? Number(karat) : Number(karat).toPrecision(3)}%
          </span>
        </div>
      </div>
    </div>
  );
};

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
    const interval = setInterval(fetchPriceData, 3600000);
    return () => clearInterval(interval);
  }, []);

  const formatLocalTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleString();
  };

  const formatPrice = (price: string) => {
    const [whole, decimal] = price.split('.');
    const formattedWhole = parseFloat(whole).toLocaleString();
    return { whole: formattedWhole, decimal };
  };

  const calculatePrice = (basePrice: number, weight: number, karat: number = 100) => {
    const pricePerGram = basePrice / 31.1035; // Convert from per ounce to per gram
    const karatMultiplier = karat / 100;
    const usdPrice = pricePerGram * weight * karatMultiplier;
    const bhdPrice = usdPrice * 0.377;
    
    // Apply 1% price bump
    const usdPriceWithBump = usdPrice * 1;
    const bhdPriceWithBump = bhdPrice * 1;
    
    return {
      usd: usdPriceWithBump.toFixed(2),
      bhd: bhdPriceWithBump.toFixed(3)
    };
  };

  const getGoldTint = () => `
    bg-white/5
    border border-yellow-100/5 
    backdrop-blur-md
    relative
    overflow-hidden
  `;

  const getBarCount = (unit: string) => {
    switch (unit.toLowerCase()) {
      case 'kg':
        return 4;
      case 'oz':
        return 3;
      case 'tola':
        return 2;
      case 'g':
      case 'gram':
        return 1;
      default:
        return 0;
    }
  };

  const priceItems = [
    { label: '24K / g', weight: 1, karat: 100 },
    { label: '24K / tola', weight: 11.664, karat: 100 },
    { label: '24K / oz', weight: 31.1035, karat: 100 },
    { label: '24K / kg', weight: 1000, karat: 100 },
    { label: '22K / g', weight: 1, karat: 91.67 },
    { label: '21K / g', weight: 1, karat: 87.5 },
    { label: '18K / g', weight: 1, karat: 75 },
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
          
          <div className="text-center mb-12">
            <SectionHeader 
              title="Live Gold Prices"
              subtitle="Check the latest gold prices in USD"
            />
            
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {priceItems.map((item, index) => {
              const prices = calculatePrice(priceData.quotes[0].ask, item.weight, item.karat);
              const usdFormatted = formatPrice(prices.usd);
              const bhdFormatted = formatPrice(prices.bhd);
              
              return (
                <Card 
                  key={index}
                  className={`relative overflow-hidden ${getGoldTint()} hover:scale-105 hover:shadow-yellow-300/30 transition-all duration-300 ease-in-out cursor-pointer`}
                >
                  {/* Gold shine */}
                  <div className="absolute top-0 right-0 w-1/3 h-1/3 z-0 pointer-events-none">
                    <div className="w-full h-full rounded-bl-xl bg-[radial-gradient(circle_at_top_right,_rgba(255,215,0,0.12)_0%,_transparent_70%)] blur-sm" />
                  </div>

                  {/* Live indicator - top right */}
                  <div className="absolute top-3 right-3 z-20">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>

                  {/* Content block */}
                  <div className="relative z-10 p-4 h-full flex flex-col">
                    {/* Label at top-left */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-200 border border-yellow-300/30">
                        {item.label.split('/')[1]?.trim()}
                      </span>
                      <div className="flex-1">
                        <GoldPurityBar
                          karat={item.karat}
                          label={item.label.split('/')[0].trim()} // This will be "24K", etc
                        />
                      </div>
                    </div>

                    {/* Jumbo Centered Price - dominant focal point */}
                    <div className="grow flex justify-center">
                      <div className="text-center px-4 my-auto mb-3">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                          {usdFormatted.whole}
                          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-100/80 align-super">
                            .{usdFormatted.decimal}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Purity bar at bottom 
                    <div className="mt-auto">
                      <GoldPurityBar karat={item.karat} />
                    </div>*/}
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Market Info */}
        {/* {priceData && (
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
                  {/* <div className="flex justify-between">
                    <span className="text-white/70">Markup Applied:</span>
                    <span className="font-semibold text-white">+1%</span>
                  </div> 
                </div>
              </CardContent>
            </Card>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default LivePrice;