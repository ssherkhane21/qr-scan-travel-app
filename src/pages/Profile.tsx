
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Header from "@/components/Header";
import ActionButton from "@/components/ActionButton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";
import { Card } from "@/components/ui/card";

const Profile = () => {
  const navigate = useNavigate();
  const { userData, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!userData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <p>No user data found. Please log in.</p>
        <button 
          className="mt-4 px-4 py-2 bg-appGreen text-white rounded"
          onClick={() => navigate("/")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header title="Profile" hasBack />
      
      <div className="flex-1 flex flex-col items-center p-6 pt-8">
        <Avatar className="w-24 h-24 bg-gray-200 rounded-full mb-8 border-4 border-white shadow-md">
          <AvatarFallback className="text-gray-500">
            <UserRound size={48} />
          </AvatarFallback>
        </Avatar>
        
        <Card className="w-full max-w-md shadow-md mb-8 rounded-xl overflow-hidden">
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-5 text-gray-800">Personal Details</h3>
            
            <div className="space-y-5">
              <div className="flex flex-col">
                <div className="text-sm text-gray-500 mb-1">Name</div>
                <div className="font-medium">{userData.name}</div>
              </div>
              
              <div className="flex flex-col">
                <div className="text-sm text-gray-500 mb-1">Tel</div>
                <div className="font-medium">{userData.phone}</div>
              </div>
              
              <div className="flex flex-col">
                <div className="text-sm text-gray-500 mb-1">Email ID</div>
                <div className="font-medium">{userData.email}</div>
              </div>
              
              <div className="flex flex-col">
                <div className="text-sm text-gray-500 mb-1">User ID</div>
                <div className="font-medium">{userData.userID}</div>
              </div>
              
              <div className="flex flex-col">
                <div className="text-sm text-gray-500 mb-1">DOB</div>
                <div className="font-medium">{userData.dob}</div>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="w-full max-w-md">
          <ActionButton 
            onClick={handleLogout} 
            variant="primary"
            fullWidth
            className="rounded-xl py-3.5 font-medium text-base shadow-md"
          >
            Logout
          </ActionButton>
        </div>
      </div>
      
      <div className="w-1/4 h-1 bg-gray-300 mx-auto mb-6 rounded-full"></div>
    </div>
  );
};

export default Profile;
