import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./../Components/About/About.jsx";
import Contact from "./../Components/Contact/Contact.jsx";
import Services from "./../Components/Our services/Services.jsx";
import Partnership from "./../Components/Partnership/Partnership.jsx";
import Activities from "./../Components/Previous Activities/Activities.jsx";
import { useState } from "react";
import Home from "../Components/Home/Home.jsx";
import AOS from 'aos'
import { useEffect } from "react";
import 'aos/dist/aos.css';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
    offset: 200,
    duration: 0,
    easing: 'ease-in-sine',
    delay: 75,
    });
    }, []);

  return (
    <BrowserRouter>
      <div className="flex justify-center items-center  w-full bg-zinc ">
        <h5 className=" text-orange-500 w-full text-sm font-bold uppercase ">
          <Link to="/">
            <img src="/public/Logo/file.png" alt="" width={120} />
          </Link>
        </h5>
    

        {/* Desktop */}
        <div className=" ">
          <ul className="hidden lg:flex gap-9 ">
            <li className="nav-desktop">
              <Link to="/About">About</Link>
            </li>
            <li className="nav-desktop">
              {" "}
              <Link to="/Activities">Activities</Link>
            </li>
            <li className="nav-desktop">
              {" "}
              <Link to="/Services">OurServices</Link>
            </li>
            <li className="nav-desktop">
              {" "}
              <Link to="/Partnership">Partnership</Link>
            </li>
            <li className="nav-desktop">
              {" "}
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Menu Icon */}
<label className=" lg:hidden">
  <div
    className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
  >
    <input className="hidden peer" type="checkbox" onClick={()=>setIsOpen(!isOpen)}/>
    <div
      className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
    ></div>
    <div
      className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"
    ></div>
    <div
      className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
    ></div>
  </div>
</label>


        {/* Mobile */}
        {isOpen && (
          <div className="lg:hidden fixed left-0 top-24 h-full" >
            <ul className="uppercase ">
              <li className="nav-mobile ">
                <Link to="/About">About us</Link>
              </li>
              <li className="nav-mobile">
                {" "}
                <Link to="/Activities">Activities</Link>
              </li>
              <li className="nav-mobile">
                {" "}
                <Link to="/Services">Our-Services</Link>
              </li>
              <li className="nav-mobile">
                {" "}
                <Link to="/Partnership">Partnership</Link>
              </li>
              <li className="nav-mobile">
                {" "}
                <Link to="/Contact">Contact us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Partnership" element={<Partnership />} />
        <Route path="/Activities" element={<Activities />} />
      </Routes>
    </BrowserRouter>
  );
};
