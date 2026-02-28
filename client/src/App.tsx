import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import GrowthOperatingSystem from "@/pages/GrowthOperatingSystem";
import ZohoBusinessOperatingSystem from "@/pages/ZohoBusinessOperatingSystem";
import GrowthStudio from "@/pages/GrowthStudio";
import WhatsappGrowthEngine from "@/pages/WhatsappGrowthEngine";
import PerformanceMarketing from "@/pages/PerformanceMarketing";
import ContinuousInnovationFramework from "@/pages/ContinuousInnovationFramework";
import OurVision from "@/pages/OurVision";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Dashboard from "@/pages/Dashboard";
import ChatInterface from "@/components/ChatInterface";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/our-vision" component={OurVision} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/services/growth-operating-system" component={GrowthOperatingSystem} />
      <Route path="/services/zoho-business-operating-system" component={ZohoBusinessOperatingSystem} />
      <Route path="/services/growth-studio" component={GrowthStudio} />
      <Route path="/services/whatsapp-growth-engine" component={WhatsappGrowthEngine} />
      <Route path="/services/performance-marketing" component={PerformanceMarketing} />
      <Route path="/services/continuous-innovation-framework" component={ContinuousInnovationFramework} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ChatInterface />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
