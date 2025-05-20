
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  hasBack?: boolean;
}

const Header = ({ title, hasBack = false }: HeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center bg-white py-4 px-4 border-b">
      {hasBack && (
        <button
          onClick={() => navigate(-1)}
          className="mr-4"
        >
          <ArrowLeft size={20} />
        </button>
      )}
      <h1 className="text-lg font-medium">{title}</h1>
    </div>
  );
};

export default Header;
