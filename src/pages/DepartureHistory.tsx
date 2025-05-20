
import { useState } from "react";
import { useDepartureData } from "@/context/DepartureDataContext";
import Header from "@/components/Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DepartureHistory = () => {
  const navigate = useNavigate();
  const { departureHistory } = useDepartureData();
  const [filterDate, setFilterDate] = useState("");
  
  const filteredHistory = filterDate 
    ? departureHistory.filter(record => record.date === filterDate)
    : departureHistory;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex items-center bg-appGreen py-4 px-4">
        <button
          onClick={() => navigate(-1)}
          className="mr-4 text-white"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-medium text-white">Departure History</h1>
      </div>
      
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
        
        <div className="overflow-x-auto border rounded-md">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="text-xs font-semibold text-gray-600">User ID</TableHead>
                <TableHead className="text-xs font-semibold text-gray-600">User Name</TableHead>
                <TableHead className="text-xs font-semibold text-gray-600">Date</TableHead>
                <TableHead className="text-xs font-semibold text-gray-600">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredHistory.map((record, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <TableCell className="text-sm py-3">{record.userID}</TableCell>
                  <TableCell className="text-sm py-3">{record.userName}</TableCell>
                  <TableCell className="text-sm py-3">{record.date}</TableCell>
                  <TableCell className="text-sm py-3">{record.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DepartureHistory;
