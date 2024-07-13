import Link from "next/link";
import { posix } from "path";

const Navbar: React.FC = () => {
  const routes = [
    {
      name: "Gabor A.",
      href: "/about",
      width: "w-1/3",
      fontstyle: "font-bold",
      position: "text-start",
    },
    {
      name: "Projects",
      href: "/projects",
      width: "w-1/4",
      fontstyle: "font-semibold",
      position: "text-center",
    },
    {
      name: "Experience",
      href: "/experience",
      width: "w-1/4",
      fontstyle: "font-semibold",
      position: "text-center",
    },
    {
      name: "Contact",
      href: "/contact",
      width: "w-1/4",
      fontstyle: "font-semibold",
      position: "text-center",
    },
  ];

  return (
    <div className="w-1/3 items-center flex justify-center mt-2 font-space-grotesk">
      {routes.map((route, index) => (
        <Link
          key={index}
          href={route.href}
          className={`${route.width} ${route.position} ${route.fontstyle} border-2 p-2 border-black `}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
