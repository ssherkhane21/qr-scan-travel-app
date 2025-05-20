
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { DepartureDataProvider } from "@/context/DepartureDataContext";

import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import ScanQR from "@/pages/ScanQR";
import TransactionDetails from "@/pages/TransactionDetails";
import Profile from "@/pages/Profile";
import DepartureHistory from "@/pages/DepartureHistory";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <DepartureDataProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/scan-qr" element={<ScanQR />} />
              <Route path="/transaction-details" element={<TransactionDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/departure-history" element={<DepartureHistory />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </DepartureDataProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
