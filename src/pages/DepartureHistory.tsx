
import { useState } from "react";
import { useDepartureData } from "@/context/DepartureDataContext";
import Header from "@/components/Header";

const DepartureHistory = () => {
  const { departureHistory } = useDepartureData();
  const [filterDate, setFilterDate] = useState("");
  
  const filteredHistory = filterDate 
    ? departureHistory.filter(record => record.date === filterDate)
    : departureHistory;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header title="Departure History" hasBack />
      
      <div className="p-4">
        <div className="mb-4 flex items-center justify-end">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Filter by Date:</span>
            <select
              className="border rounded py-1 px-2 text-sm"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            >
              <option value="">All Dates</option>
              <option value="11/03/2024">11/03/2024</option>
              <option value="21/03/2024">21/03/2024</option>
              <option value="22/03/2024">22/03/2024</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User Name
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredHistory.map((record, index) => (
                <tr key={index}>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.userID}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.userName}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.date}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepartureHistory;
