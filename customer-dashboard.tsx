import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Wallet, Gift, MessageCircle } from 'lucide-react';

const CustomerDashboard = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome, John Doe</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345.67</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Loyalty Points</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,500</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Offers</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="accounts" className="w-full">
        <TabsList>
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="offers">Offers</TabsTrigger>
          <TabsTrigger value="chat">Chat History</TabsTrigger>
        </TabsList>
        <TabsContent value="accounts">
          <Card>
            <CardHeader>
              <CardTitle>Your Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Savings Account</span>
                  <span className="font-bold">$5,678.90</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Checking Account</span>
                  <span className="font-bold">$3,456.78</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Credit Card</span>
                  <span className="font-bold">$1,234.56</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="offers">
          <Card>
            <CardHeader>
              <CardTitle>Current Offers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>10% cashback on dining</li>
                <li>0% APR on balance transfers</li>
                <li>2x points on travel bookings</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="chat">
          <Card>
            <CardHeader>
              <CardTitle>Recent Chats</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Inquiry about new savings account - 2 days ago</span>
                </li>
                <li className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Credit card payment issue - 1 week ago</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerDashboard;
