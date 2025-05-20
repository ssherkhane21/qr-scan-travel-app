
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useDepartureData } from "@/context/DepartureDataContext";
import Header from "@/components/Header";
import { ScanQrCode } from "lucide-react";
import ActionButton from "@/components/ActionButton";

const Dashboard = () => {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const { departureHistory } = useDepartureData();
  const [activeTab, setActiveTab] = useState("onboard");

  const handleScanQR = () => {
    navigate("/scan-qr");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex justify-between items-center bg-white px-4 py-3 shadow-sm">
        <h1 className="text-lg font-bold">Hello, {userData?.name || "User"}</h1>
        <button 
          onClick={() => navigate("/profile")}
          className="px-2 py-1 text-sm"
        >
          Profile
        </button>
      </div>

      <div className="px-4 py-3">
        <div className="bg-white rounded-lg shadow">
          <div className="flex border-b">
            <button
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === "onboard" 
                  ? "text-appGreen border-b-2 border-appGreen" 
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("onboard")}
            >
              Onboard Passenger
            </button>
            <button
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === "history" 
                  ? "text-appGreen border-b-2 border-appGreen" 
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("history")}
            >
              Departure History
            </button>
          </div>

          <div className="p-4">
            {activeTab === "onboard" ? (
              <div className="flex flex-col items-center py-6">
                <div 
                  className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 border-2 border-appGreen cursor-pointer"
                  onClick={handleScanQR}
                >
                  <ScanQrCode size={40} className="text-appGreen" />
                </div>
                <span className="text-sm text-gray-600">Scan to Onboard</span>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User ID
                      </th>
                      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User Name
                      </th>
                      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {departureHistory.map((record, index) => (
                      <tr key={index}>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.userID}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.userName}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.date}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
