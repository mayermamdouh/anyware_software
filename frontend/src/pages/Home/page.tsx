import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/storeFile";
import { login, logout } from "../../store/userSlice";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const navigate = useNavigate();

  const handleAuth = () => {
    if (isLoggedIn) {
      dispatch(logout());
      navigate("/home");
    } else {
      dispatch(login());
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to Anyware Challenge
      </h1>
      <p className="text-lg mb-6 text-center">
        {isLoggedIn
          ? "You are logged in!"
          : "Please log in to access the dashboard."}
      </p>
      <div className="mt-4">
        <Button variant="default" onClick={handleAuth}>
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
}
