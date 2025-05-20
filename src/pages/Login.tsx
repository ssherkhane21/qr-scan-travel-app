
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import ActionButton from "@/components/ActionButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        navigate("/dashboard");
      } else {
        toast({
          title: "Login failed",
          description: "Please check your credentials and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col justify-center px-6 py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-2xl font-bold text-gray-900">Login</h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back to We-Move All! Please login to your account.
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email/Phone Number
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email/Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md py-3 px-4 shadow-sm focus:outline-none focus:ring-appGreen focus:border-appGreen"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md py-3 px-4 shadow-sm focus:outline-none focus:ring-appGreen focus:border-appGreen"
              />
            </div>

            <div>
              <ActionButton
                type="submit"
                variant="secondary"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </ActionButton>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 h-1 bg-gray-300 mx-auto mb-4 rounded-full"></div>
    </div>
  );
};

export default Login;
