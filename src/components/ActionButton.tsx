
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

const ActionButton = ({ 
  children, 
  className, 
  variant = "primary", 
  fullWidth = false,
  ...props 
}: ActionButtonProps) => {
  return (
    <button
      className={cn(
        "py-3 px-4 rounded-md font-medium transition-colors",
        variant === "primary" 
          ? "bg-appOrange text-white hover:bg-orange-500" 
          : "bg-appGreen text-white hover:bg-appLightGreen",
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
