
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light">
      <div className="text-center space-y-6 p-8 max-w-md">
        <div className="flex justify-center">
          <div className="bg-brand-orange/10 p-4 rounded-full">
            <AlertTriangle size={48} className="text-brand-orange" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-brand-dark">404</h1>
        <p className="text-xl text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Button asChild className="bg-brand-orange hover:bg-brand-orange/90">
          <a href="/">Return to Dashboard</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
