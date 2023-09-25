import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavList from "./NavList";
import GDSC_LOGO from '../assets/gdsc-logo.png'

function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto px-6 py-3" color="transparent">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 font-bold leading-none inline-block whitespace-nowrap uppercase text-black flex items-center"
        >
          <img src={GDSC_LOGO} alt="GDSC-LOGO" height={30} width={30} className="m-2 text-center"/>
          GDSC IIIT Lucknow
        </Typography>
      </div>
    </Navbar>
    
  );
}

export default NavbarSimple;