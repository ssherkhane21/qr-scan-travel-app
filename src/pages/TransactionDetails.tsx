
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import ActionButton from "@/components/ActionButton";

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
          <div className="mb-2 flex justify-between items-center">
            <span className="text-lg font-semibold">Onboarded</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-appGreen">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500">Name</div>
              <div>{passengerDetails.name}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">ID</div>
              <div>{passengerDetails.id}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">Email ID</div>
              <div>{passengerDetails.email}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">Time</div>
              <div>{passengerDetails.time}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">Date</div>
              <div>{passengerDetails.date}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">Location</div>
              <div>{passengerDetails.location}</div>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <ActionButton onClick={handleBackToHome} fullWidth>
            Back to Home
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
