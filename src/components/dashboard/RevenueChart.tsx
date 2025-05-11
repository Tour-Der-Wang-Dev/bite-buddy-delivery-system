
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RevenueChartProps {
  data: { date: string; revenue: number }[];
}

const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="pb-2">
        <CardTitle>Daily Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: '#f0f0f0' }}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `฿${value.toLocaleString()}`}
              />
              <Tooltip
                contentStyle={{ borderRadius: '8px', borderColor: '#f0f0f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                formatter={(value: number) => [`฿${value.toLocaleString()}`, 'Revenue']}
              />
              <Bar 
                dataKey="revenue" 
                fill="#00897B" 
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
