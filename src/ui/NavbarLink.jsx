import { NavLink } from "react-router";
const NavbarLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className='font-semibold'
      
  
    >
      {children}
    </NavLink>
  );
};

export default NavbarLink;
