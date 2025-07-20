import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const Conversions = () => {
  const [values, setValues] = useState({
    ounce: '',
    tola: '',
    gold24k: '',
    gold22k: '',
    gold21k: '',
    gold18k: ''
  });

  // Conversion factors (all to 24k grams as base)
  const conversionFactors = {
    ounce: 31.1034, // 1 ounce = 31.1034 grams (24k)
    tola: 11.664,   // 1 tola = 11.664 grams (24k)
    gold24k: 1,     // base unit
    gold22k: 11.664 / 12.620, // tola to 22k conversion
    gold21k: 11.664 / 13.220, // tola to 21k conversion  
    gold18k: 11.664 / 15.520  // tola to 18k conversion
  };

  const convertFromBase = (base24kGrams: number) => {
    return {
      ounce: (base24kGrams / conversionFactors.ounce).toFixed(6),
      tola: (base24kGrams / conversionFactors.tola).toFixed(6),
      gold24k: base24kGrams.toFixed(6),
      gold22k: (base24kGrams / conversionFactors.gold22k).toFixed(6),
      gold21k: (base24kGrams / conversionFactors.gold21k).toFixed(6),
      gold18k: (base24kGrams / conversionFactors.gold18k).toFixed(6)
    };
  };

  const handleInputChange = (unit: string, value: string) => {
    if (value === '') {
      setValues({
        ounce: '',
        tola: '',
        gold24k: '',
        gold22k: '',
        gold21k: '',
        gold18k: ''
      });
      return;
    }

    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;

    // Convert input to base 24k grams
    let base24kGrams: number;
    switch (unit) {
      case 'ounce':
        base24kGrams = numValue * conversionFactors.ounce;
        break;
      case 'tola':
        base24kGrams = numValue * conversionFactors.tola;
        break;
      case 'gold24k':
        base24kGrams = numValue;
        break;
      case 'gold22k':
        base24kGrams = numValue * conversionFactors.gold22k;
        break;
      case 'gold21k':
        base24kGrams = numValue * conversionFactors.gold21k;
        break;
      case 'gold18k':
        base24kGrams = numValue * conversionFactors.gold18k;
        break;
      default:
        return;
    }

    // Convert from base to all units
    const converted = convertFromBase(base24kGrams);
    setValues({
      ...converted,
      [unit]: value // Keep the original input value for the current field
    });
  };

  const clearAll = () => {
    setValues({
      ounce: '',
      tola: '',
      gold24k: '',
      gold22k: '',
      gold21k: '',
      gold18k: ''
    });
  };

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
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Gold Unit Conversions
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Convert between different gold weight units instantly. Enter a value in any field to see conversions in real-time.
            </p>
          </div>
        </div>

        {/* Conversion Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-purple border-white/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white text-2xl">
                  Gold Weight Converter
                </CardTitle>
                <Button 
                  onClick={clearAll}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Clear All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Ounce */}
                <div className="space-y-2">
                  <Label htmlFor="ounce" className="text-white font-medium">
                    Ounce
                  </Label>
                  <Input
                    id="ounce"
                    type="number"
                    step="any"
                    placeholder="Enter ounces"
                    value={values.ounce}
                    onChange={(e) => handleInputChange('ounce', e.target.value)}
                    className="glass-purple border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                {/* Tola */}
                <div className="space-y-2">
                  <Label htmlFor="tola" className="text-white font-medium">
                    Tola
                  </Label>
                  <Input
                    id="tola"
                    type="number"
                    step="any"
                    placeholder="Enter tola"
                    value={values.tola}
                    onChange={(e) => handleInputChange('tola', e.target.value)}
                    className="glass-purple border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                {/* 24K Grams */}
                <div className="space-y-2">
                  <Label htmlFor="gold24k" className="text-white font-medium">
                    24K Grams
                  </Label>
                  <Input
                    id="gold24k"
                    type="number"
                    step="any"
                    placeholder="Enter 24k grams"
                    value={values.gold24k}
                    onChange={(e) => handleInputChange('gold24k', e.target.value)}
                    className="glass-purple border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                {/* 22K Grams */}
                <div className="space-y-2">
                  <Label htmlFor="gold22k" className="text-white font-medium">
                    22K Grams
                  </Label>
                  <Input
                    id="gold22k"
                    type="number"
                    step="any"
                    placeholder="Enter 22k grams"
                    value={values.gold22k}
                    onChange={(e) => handleInputChange('gold22k', e.target.value)}
                    className="glass-purple border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                {/* 21K Grams */}
                <div className="space-y-2">
                  <Label htmlFor="gold21k" className="text-white font-medium">
                    21K Grams
                  </Label>
                  <Input
                    id="gold21k"
                    type="number"
                    step="any"
                    placeholder="Enter 21k grams"
                    value={values.gold21k}
                    onChange={(e) => handleInputChange('gold21k', e.target.value)}
                    className="glass-purple border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                {/* 18K Grams */}
                <div className="space-y-2">
                  <Label htmlFor="gold18k" className="text-white font-medium">
                    18K Grams
                  </Label>
                  <Input
                    id="gold18k"
                    type="number"
                    step="any"
                    placeholder="Enter 18k grams"
                    value={values.gold18k}
                    onChange={(e) => handleInputChange('gold18k', e.target.value)}
                    className="glass-purple border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
              </div>

              {/* Conversion Reference */}
              <div className="mt-8 p-4 glass-purple rounded-lg border border-white/10">
                <h3 className="text-white font-medium mb-3">Conversion Reference:</h3>
                <div className="text-white/70 text-sm space-y-1">
                  <p>• 1 ounce = 31.1034 grams (24k)</p>
                  <p>• 1 tola = 11.664 grams (24k)</p>
                  <p>• 1 tola = 12.620 grams (22k)</p>
                  <p>• 1 tola = 13.220 grams (21k)</p>
                  <p>• 1 tola = 15.520 grams (18k)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Conversions;