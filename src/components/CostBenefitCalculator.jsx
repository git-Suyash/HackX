import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const VehicleComparisonCalculator = () => {
  const [traditionalVehicle, setTraditionalVehicle] = useState({
    purchasePrice: 0,
    fuelEfficiency: 0,
    fuelCostPerLiter: 0,
    maintenanceCostPerYear: 0,
  });

  const [electricVehicle, setElectricVehicle] = useState({
    purchasePrice: 0,
    energyEfficiency: 0,
    electricityCostPerKWh: 0,
    maintenanceCostPerYear: 0,
  });

  const [annualKilometers, setAnnualKilometers] = useState(0);
  const [years, setYears] = useState(5);
  const [results, setResults] = useState(null);

  const calculateCosts = () => {
    const traditionalTotalCost = 
      traditionalVehicle.purchasePrice +
      (annualKilometers / traditionalVehicle.fuelEfficiency * traditionalVehicle.fuelCostPerLiter + traditionalVehicle.maintenanceCostPerYear) * years;

    const electricTotalCost = 
      electricVehicle.purchasePrice +
      (annualKilometers / electricVehicle.energyEfficiency * electricVehicle.electricityCostPerKWh + electricVehicle.maintenanceCostPerYear) * years;

    const savings = traditionalTotalCost - electricTotalCost;

    setResults({
      traditionalTotalCost,
      electricTotalCost,
      savings,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardHeader className="bg-teal-800 text-white text-2xl font-bold py-4 px-6">
          Two-Wheeler Cost Comparison Calculator
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Traditional Vehicle</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="trad-price">Purchase Price (₹)</Label>
                  <Input
                    id="trad-price"
                    type="number"
                    value={traditionalVehicle.purchasePrice}
                    onChange={(e) => setTraditionalVehicle({ ...traditionalVehicle, purchasePrice: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="trad-efficiency">Fuel Efficiency (km/L)</Label>
                  <Input
                    id="trad-efficiency"
                    type="number"
                    value={traditionalVehicle.fuelEfficiency}
                    onChange={(e) => setTraditionalVehicle({ ...traditionalVehicle, fuelEfficiency: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="trad-fuel-cost">Fuel Cost (₹/L)</Label>
                  <Input
                    id="trad-fuel-cost"
                    type="number"
                    value={traditionalVehicle.fuelCostPerLiter}
                    onChange={(e) => setTraditionalVehicle({ ...traditionalVehicle, fuelCostPerLiter: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="trad-maintenance">Annual Maintenance Cost (₹)</Label>
                  <Input
                    id="trad-maintenance"
                    type="number"
                    value={traditionalVehicle.maintenanceCostPerYear}
                    onChange={(e) => setTraditionalVehicle({ ...traditionalVehicle, maintenanceCostPerYear: parseFloat(e.target.value) })}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Electric Vehicle</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="ev-price">Purchase Price (₹)</Label>
                  <Input
                    id="ev-price"
                    type="number"
                    value={electricVehicle.purchasePrice}
                    onChange={(e) => setElectricVehicle({ ...electricVehicle, purchasePrice: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="ev-efficiency">Energy Efficiency (km/kWh)</Label>
                  <Input
                    id="ev-efficiency"
                    type="number"
                    value={electricVehicle.energyEfficiency}
                    onChange={(e) => setElectricVehicle({ ...electricVehicle, energyEfficiency: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="ev-electricity-cost">Electricity Cost (₹/kWh)</Label>
                  <Input
                    id="ev-electricity-cost"
                    type="number"
                    value={electricVehicle.electricityCostPerKWh}
                    onChange={(e) => setElectricVehicle({ ...electricVehicle, electricityCostPerKWh: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="ev-maintenance">Annual Maintenance Cost (₹)</Label>
                  <Input
                    id="ev-maintenance"
                    type="number"
                    value={electricVehicle.maintenanceCostPerYear}
                    onChange={(e) => setElectricVehicle({ ...electricVehicle, maintenanceCostPerYear: parseFloat(e.target.value) })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="annual-km">Annual Kilometers Driven</Label>
              <Input
                id="annual-km"
                type="number"
                value={annualKilometers}
                onChange={(e) => setAnnualKilometers(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="years">Years of Ownership</Label>
              <Input
                id="years"
                type="number"
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value))}
              />
            </div>
          </div>
          <Button className="mt-6 w-full" onClick={calculateCosts}>
            Calculate
          </Button>
        </CardContent>
      </Card>
      {results && (
        <Card>
          <CardHeader className="bg-green-600 text-white text-xl font-bold py-3 px-6">
            Results
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p>Traditional Vehicle Total Cost: ₹{results.traditionalTotalCost.toFixed(2)}</p>
              <p>Electric Vehicle Total Cost: ₹{results.electricTotalCost.toFixed(2)}</p>
              <p className="font-bold">
                {results.savings > 0
                  ? `Savings with Electric Vehicle: ₹${results.savings.toFixed(2)}`
                  : `Additional Cost with Electric Vehicle: ₹${Math.abs(results.savings).toFixed(2)}`}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VehicleComparisonCalculator;