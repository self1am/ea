import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: 'Jan', complaints: 120, negSentiment: 15, riskScore: 25 },
  { name: 'Feb', complaints: 100, negSentiment: 18, riskScore: 30 },
  { name: 'Mar', complaints: 80, negSentiment: 12, riskScore: 20 },
  { name: 'Apr', complaints: 150, negSentiment: 25, riskScore: 40 },
  { name: 'May', complaints: 90, negSentiment: 10, riskScore: 15 },
  { name: 'Jun', complaints: 110, negSentiment: 20, riskScore: 35 },
];

const CustomerDissonanceDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Dissonance Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Complaints</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">650</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Avg. Negative Sentiment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">16.7%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Overall Risk Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">27.5</p>
          </CardContent>
        </Card>
      </div>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Monthly Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="complaints" fill="#8884d8" />
              <Bar dataKey="negSentiment" fill="#82ca9d" />
              <Bar dataKey="riskScore" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerDissonanceDashboard;
