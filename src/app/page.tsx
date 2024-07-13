import Image from "next/image";
import Card from "./components/Card";
import Projects from "./Sections/Projects";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full items-center justify-between ">
      <Navbar />
      <Projects />
    </div>
  );
}
