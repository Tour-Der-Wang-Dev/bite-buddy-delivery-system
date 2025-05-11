
import React from 'react';
import StatCard from './StatCard';
import OrdersChart from './OrdersChart';
import RevenueChart from './RevenueChart';
import OrdersTable from './OrdersTable';
import { TruckIcon, Users, DollarSign, ShoppingBag } from 'lucide-react';

// Sample data for demonstration
const generateDailyData = () => {
  const now = new Date();
  const data = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    
    // Generate random data
    const orders = Math.floor(Math.random() * 50) + 20;
    const revenue = orders * (Math.floor(Math.random() * 200) + 150);
    
    data.push({
      date: date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' }),
      orders,
      revenue,
    });
  }
  return data;
};

// Sample orders for demonstration
const generateOrders = () => {
  const statuses: ('pending' | 'preparing' | 'delivering' | 'completed' | 'cancelled')[] = 
    ['pending', 'preparing', 'delivering', 'completed', 'cancelled'];
  const orders = [];
  
  for (let i = 0; i < 10; i++) {
    const now = new Date();
    const date = new Date(now);
    date.setHours(now.getHours() - Math.floor(Math.random() * 48));
    
    orders.push({
      id: `ORD-${100000 + i}`,
      customer: `Customer ${i + 1}`,
      restaurant: `Restaurant ${Math.floor(Math.random() * 5) + 1}`,
      driver: Math.random() > 0.2 ? `Driver ${Math.floor(Math.random() * 5) + 1}` : undefined,
      total: Math.floor(Math.random() * 500) + 200,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      date: date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    });
  }
  
  return orders;
};

const dailyData = generateDailyData();
const orders = generateOrders();

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome to Tour Der Wang food delivery admin panel</p>
      </header>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Today's Revenue" 
          value="฿15,480" 
          icon={<DollarSign className="h-5 w-5" />} 
          trend={{ value: 12.5, isPositive: true }}
          variant="orange"
        />
        <StatCard 
          title="Today's Orders" 
          value="48" 
          icon={<ShoppingBag className="h-5 w-5" />}
          trend={{ value: 8.2, isPositive: true }}
          variant="teal"
        />
        <StatCard 
          title="Active Restaurants" 
          value="32" 
          icon={<Users className="h-5 w-5" />}
          variant="gold"
        />
        <StatCard 
          title="Online Drivers" 
          value="15" 
          icon={<TruckIcon className="h-5 w-5" />}
          variant="purple"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <OrdersChart data={dailyData.map(item => ({ date: item.date, orders: item.orders }))} />
        <RevenueChart data={dailyData.map(item => ({ date: item.date, revenue: item.revenue }))} />
      </div>

      {/* Orders Table */}
      <div>
        <OrdersTable orders={orders} />
      </div>
    </div>
  );
};

export default Dashboard;
