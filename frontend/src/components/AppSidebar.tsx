import { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";

import { AiOutlineStock } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: FaHome,
  },
  {
    title: "Schedule",
    url: "#",
    icon: FaCalendarAlt,
  },
  {
    title: "Courses",
    url: "#",
    icon: FaSearch,
  },
  {
    title: "Gradebook",
    url: "#",
    icon: FaGraduationCap,
  },
  {
    title: "Performance",
    url: "#",
    icon: AiOutlineStock,
  },
  {
    title: "Announcement",
    url: "#",
    icon: GrAnnounce,
  },
];

export function AppSidebar() {
  const [openSide, setOpenSide] = useState<boolean>();

  return (
    <>
      <aside
        className={`fixed min-h-screen ${openSide ? "w-64" : "w-16"} z-60 w-16 lg:w-64 transition-all duration-300 bg-linear-to-b py-5 from-[rgb(44,89,124)] via-[rgb(57,105,132)] to-[rgb(76,126,148)] text-white flex flex-col `}
      >
        <div
          className="px-4 mb-10 text-2xl ml-auto cursor-pointer lg:hidden text-primary"
          onClick={() => setOpenSide((prev) => !prev)}
        >
          {openSide ? "←" : "→"}
        </div>
        <h2
          className={`${openSide ? "block" : "hidden"} lg:block text-2xl font-bold px-6 mb-8 text-center`}
        >
          Coligo
        </h2>

        <nav className="flex flex-col gap-2">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.url}
              className="
              flex items-center justify-start gap-4 w-full lg:px-10 px-4 py-4
              hover:bg-white
              transition-all duration-200 group "
            >
              <div className="w-6 flex justify-center">
                <item.icon className="h-6 w-6 group-hover:text-secondary" />
              </div>
              <span
                className={`${openSide ? "block" : "hidden"}  lg:block text-lg group-hover:text-primary`}
              >
                {item.title}
              </span>
            </a>
          ))}
        </nav>
      </aside>
      {openSide && (
        <div
          className="fixed inset-0 bg-black/40 z-50 lg:hidden"
          onClick={() => setOpenSide(false)}
        />
      )}
    </>
  );
}
