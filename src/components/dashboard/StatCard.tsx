
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cva, type VariantProps } from "class-variance-authority";

const statCardVariants = cva(
  "transition-all rounded-lg overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white border",
        orange: "bg-gradient-to-br from-brand-orange to-amber-500 text-white",
        teal: "bg-gradient-to-br from-brand-teal to-emerald-600 text-white",
        gold: "bg-gradient-to-br from-brand-gold to-amber-400",
        purple: "bg-gradient-to-br from-violet-500 to-purple-600 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface StatCardProps extends VariantProps<typeof statCardVariants> {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard = ({ title, value, icon, trend, variant }: StatCardProps) => {
  return (
    <Card className={statCardVariants({ variant })}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className={`text-sm ${variant === "default" ? "text-muted-foreground" : "text-white/80"}`}>
              {title}
            </p>
            <h3 className="text-2xl font-bold mt-2">
              {value}
            </h3>
            {trend && (
              <p className={`text-xs mt-1 flex items-center ${
                trend.isPositive 
                  ? "text-emerald-500"
                  : "text-rose-500"
              }`}>
                {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}% from yesterday
              </p>
            )}
          </div>
          <div className={`p-3 rounded-full ${
            variant === "default" 
              ? "bg-primary/10 text-primary" 
              : "bg-white/20 text-white"
          }`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
