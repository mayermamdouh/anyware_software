import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { HiMail } from "react-icons/hi";
import { FaBell, FaBars } from "react-icons/fa";
import { UserAvatar } from "./UserAvatar";

export default function AppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-16 bg-white text-black px-4 md:px-8 flex items-center justify-between shadow-md relative">
      <div className="flex items-center gap-4">
        <button
          className="text-2xl text-gray-700 block lg:hidden cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FaBars />
        </button>

        <span className="text-lg md:text-2xl font-bold text-gray-700 hidden lg:block">
          Welcome Talia,
        </span>
      </div>

      <div className="flex-0 relative mx-4 hidden lg:block ml-auto min-w-64">
        <FiSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <Input type="text" placeholder="Search..." className="pl-10" />
      </div>

      <div className="flex items-center gap-4 ">
        <div className="flex items-center gap-4">
          <button className="relative cursor-pointer">
            <FaBell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-2 -right-1.5 bg-primary rounded-full w-5 h-5 border border-white flex items-center justify-center text-white text-xs font-bold">
              3
            </span>
          </button>

          <button className="relative cursor-pointer">
            <HiMail className="w-7 h-7 text-gray-600" />
            <span className="absolute -top-2 -right-1.5 bg-primary rounded-full w-5 h-5 border border-white flex items-center justify-center text-white text-xs font-bold">
              3
            </span>
          </button>
        </div>

        <UserAvatar
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="User"
        />
      </div>

      <div
        className={`
      absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 lg:hidden z-40
      transition-all duration-300 ease-in-out transform
      ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
    `}
      >
        <div className="flex-1 relative mx-4">
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input type="text" placeholder="Search..." className="pl-10" />
        </div>
      </div>
    </header>
  );
}
