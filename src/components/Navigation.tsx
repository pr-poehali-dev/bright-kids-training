import { NavLink } from "react-router-dom";
import { Home, BookOpen, Video, BarChart2, MessageSquare, Award } from "lucide-react";

interface NavItem {
  path: string;
  label: string;
  icon: JSX.Element;
}

export const Navigation = () => {
  const navItems: NavItem[] = [
    { path: "/", label: "Главная", icon: <Home size={24} /> },
    { path: "/materials", label: "Учебные материалы", icon: <BookOpen size={24} /> },
    { path: "/videos", label: "Видеозадания", icon: <Video size={24} /> },
    { path: "/progress", label: "Мой прогресс", icon: <BarChart2 size={24} /> },
    { path: "/messages", label: "Сообщения", icon: <MessageSquare size={24} /> },
    { path: "/challenges", label: "Челленджи и награды", icon: <Award size={24} /> },
  ];

  return (
    <nav className="bg-white shadow-md p-4 fixed bottom-0 left-0 right-0 z-10 md:static md:shadow-none">
      <div className="hidden md:flex md:flex-col md:gap-4 md:w-64">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              isActive 
                ? "nav-item active" 
                : "nav-item text-sport-dark"
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
      
      {/* Мобильная навигация */}
      <div className="grid grid-cols-6 gap-1 md:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              isActive 
                ? "flex flex-col items-center p-2 text-sport-blue" 
                : "flex flex-col items-center p-2 text-gray-500"
            }
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
