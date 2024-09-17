import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Gift, Award, TrendingUp } from 'lucide-react';

const LoyaltyProgramPortal = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">UBP Rewards+ Program</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Tier</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Gold</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Points Balance</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,500</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Tier</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Platinum</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Progress to Next Tier</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={62.5} className="w-full" />
          <p className="mt-2 text-sm text-gray-600">1,500 points needed to reach Platinum</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Available Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>$50 Statement Credit</span>
                <span className="font-bold">2,000 points</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Annual Fee Waiver</span>
                <span className="font-bold">5,000 points</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Travel Insurance</span>
                <span className="font-bold">3,500 points</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Grocery Purchase</span>
                <span className="font-bold text-green-600">+50 points</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Restaurant Dining</span>
                <span className="font-bold text-green-600">+75 points</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Travel Booking</span>
                <span className="font-bold text-green-600">+200 points</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoyaltyProgramPortal;
