import { Outlet } from "react-router-dom";
import logo from "../assets/app-logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-start items-center w-full bg-slate-500">
        <img src={logo} alt="" className="w-32 bg-black" />
      </nav>
      <Outlet />
    </>
  );
}
