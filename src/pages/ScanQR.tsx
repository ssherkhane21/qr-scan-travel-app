
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import ActionButton from "@/components/ActionButton";
import { ScanQrCode } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ScanQR = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning
    setTimeout(() => {
      setIsScanning(false);
      navigate("/transaction-details");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-appGreen">
      <Header title="Scan QR Code" hasBack />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-white/20 p-4 rounded-lg mb-8 w-64 h-64 flex items-center justify-center">
          {isScanning ? (
            <div className="animate-pulse">
              <ScanQrCode size={80} className="text-white" />
            </div>
          ) : (
            <ScanQrCode size={80} className="text-white" />
          )}
        </div>
        
        <p className="text-white text-center mb-8">
          Position the QR code within the frame to scan
        </p>
        
        <ActionButton
          onClick={handleScan}
          variant="primary"
          className="w-full max-w-xs"
        >
          {isScanning ? "Scanning..." : "Onboard"}
        </ActionButton>
      </div>
      
      <div className="w-1/3 h-1 bg-white/30 mx-auto mb-4 rounded-full"></div>
    </div>
  );
};

export default ScanQR;
