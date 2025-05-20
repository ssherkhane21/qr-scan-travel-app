
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  hasBack?: boolean;
}

const Header = ({ title, hasBack = false }: HeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center bg-appGreen py-4 px-6 shadow-sm">
      {hasBack && (
        <button
          onClick={() => navigate(-1)}
          className="mr-4 text-white"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
      )}
      <h1 className="text-lg font-medium text-white">{title}</h1>
    </div>
  );
};

export default Header;
