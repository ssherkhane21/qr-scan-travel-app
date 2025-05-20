
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import ActionButton from "@/components/ActionButton";
import { Check } from "lucide-react";

const TransactionDetails = () => {
  const navigate = useNavigate();

  const passengerDetails = {
    name: "Devasa",
    id: "876776012",
    email: "pkrj@gmail.com",
    time: "12:05",
    date: "27/09/1990",
    location: "BTM"
  };

  const handleBackToHome = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header title="Ticket Details" hasBack />
      
      <div className="flex-1 flex flex-col p-6">
        <div className="bg-gray-50 rounded-lg p-5 mb-8">
          <div className="mb-4 flex justify-between items-center">
            <span className="text-lg font-semibold">Onboarded</span>
            <div className="w-6 h-6 flex items-center justify-center bg-appGreen rounded-full">
              <Check size={14} className="text-white" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500">Name</div>
              <div className="font-medium">{passengerDetails.name}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">Tel</div>
              <div className="font-medium">{passengerDetails.id}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">Email ID</div>
              <div className="font-medium">{passengerDetails.email}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">Time</div>
              <div className="font-medium">{passengerDetails.time}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">Date</div>
              <div className="font-medium">{passengerDetails.date}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">Location</div>
              <div className="font-medium">{passengerDetails.location}</div>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <ActionButton onClick={handleBackToHome} variant="primary" fullWidth>
            Back to Home
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
