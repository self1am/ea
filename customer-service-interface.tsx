import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Phone, Mail, MessageCircle, Clock, Star } from 'lucide-react';

const CustomerServiceInterface = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Customer Service Interface</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Card>
          <CardHeader>
            <CardTitle>Customer Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>John Doe</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                <span>Gold Tier Member</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Inquiry about new savings account - 2 days ago</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Credit card payment issue - 1 week ago</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="accounts" className="w-full">
        <TabsList>
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="loyalty">Loyalty Status</TabsTrigger>
          <TabsTrigger value="notes">Agent Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="accounts">
          <Card>
            <CardHeader>
              <CardTitle>Customer Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Savings Account (****1234)</span>
                  <span className="font-bold">$5,678.90</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Checking Account (****5678)</span>
                  <span className="font-bold">$3,456.78</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Credit Card (****9012)</span>
                  <span className="font-bold">$1,234.56</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="loyalty">
          <Card>
            <CardHeader>
              <CardTitle>Loyalty Program Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Current Tier:</strong> Gold</p>
                <p><strong>Points Balance:</strong> 2,500</p>
                <p><strong>Points to Next Tier:</strong> 1,500</p>
                <p><strong>Recent Rewards:</strong> 10% off next loan application</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle>Agent Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Customer interested in mortgage options - follow up next week</span>
                </li>
                <li className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Provided information on travel insurance for upcoming trip</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerServiceInterface;
