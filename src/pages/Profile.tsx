
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Header from "@/components/Header";
import ActionButton from "@/components/ActionButton";

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
    <div className="flex flex-col min-h-screen bg-appGreen">
      <Header title="Profile" hasBack />
      
      <div className="flex-1 flex flex-col items-center p-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full mb-6 flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h3 className="font-medium text-lg mb-4">Personal Details</h3>
          
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500">Name</div>
              <div>{userData.name}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">Tel</div>
              <div>{userData.phone}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">Email ID</div>
              <div>{userData.email}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">User ID</div>
              <div>{userData.userID}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">DOB</div>
              <div>{userData.dob}</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 w-full max-w-md">
          <ActionButton 
            onClick={handleLogout} 
            variant="primary"
            fullWidth
          >
            Logout
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
