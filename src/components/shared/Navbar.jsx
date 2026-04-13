import { FaGithub } from "react-icons/fa";
import NavbarLink from "../../ui/NavbarLink";
import { ImPrevious } from "react-icons/im";
import logo from '../../assets/images/logo.png'
const Navbar = () => {

  const navbarLinks=<>
  <li><NavbarLink to={'/'}>Home</NavbarLink></li>
<li><NavbarLink to={'/apps'}>Apps</NavbarLink></li>
<li><NavbarLink to={'/installation'}>Installation</NavbarLink></li>
<li><NavbarLink to={'/dashboard'}>DashBoard</NavbarLink></li>
  </>

  return (
    <nav className=" bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
{navbarLinks}
      </ul>
    </div>
<div className="flex gap-1 items-center"><img src={logo} alt="hero logo image" className="h-10"/><h2 className="uppercase font-bold bg-linear-[160deg,#632EE3,#9F62F2] bg-clip-text text-lg text-transparent">Hero io</h2></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
{navbarLinks}
    </ul>
  </div>
  <div className="navbar-end">

<button className="btn text-white items-center text-lg bg-linear-[160deg,#632EE3,#9F62F2]"> <FaGithub /> <span>Contribute</span></button>
    </div>
</div>
    </nav>
  );
};

export default Navbar;