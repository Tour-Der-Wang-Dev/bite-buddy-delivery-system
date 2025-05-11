
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface OrdersChartProps {
  data: { date: string; orders: number }[];
}

const OrdersChart: React.FC<OrdersChartProps> = ({ data }) => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="pb-2">
        <CardTitle>Daily Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF8A00" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF8A00" stopOpacity={0.1} />
                </linearGradient>
              </defs>
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
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                contentStyle={{ borderRadius: '8px', borderColor: '#f0f0f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                formatter={(value: number) => [`${value} orders`, 'Orders']}
              />
              <Area 
                type="monotone" 
                dataKey="orders" 
                stroke="#FF8A00" 
                strokeWidth={2}
                fill="url(#colorOrders)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrdersChart;
