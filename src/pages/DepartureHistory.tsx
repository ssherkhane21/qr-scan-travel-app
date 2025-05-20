
import { useState } from "react";
import { useDepartureData } from "@/context/DepartureDataContext";
import Header from "@/components/Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
        
        <div className="overflow-x-auto border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">User ID</TableHead>
                <TableHead className="text-xs">User Name</TableHead>
                <TableHead className="text-xs">Date</TableHead>
                <TableHead className="text-xs">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredHistory.map((record, index) => (
                <TableRow key={index}>
                  <TableCell className="text-sm">{record.userID}</TableCell>
                  <TableCell className="text-sm">{record.userName}</TableCell>
                  <TableCell className="text-sm">{record.date}</TableCell>
                  <TableCell className="text-sm">{record.time}</TableCell>
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
