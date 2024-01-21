import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaBars } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

function Header() {
  const [togglerNav, setTogglerNav] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: '1039px' });

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <nav className="h-auto md:h-24 p-2 bg-Header max-w-12xl mx-auto flex justify-between md:items-center">
      <Link to="/">
        <FaHome className="text-2xl" />
      </Link>
      {isMobile && (
        <div className="flex items-center">
          <div className="flex-grow"></div>
          <button className="inline md:hidden self-end nav-link" onClick={clickHandler}>
            {togglerNav ? null : <FaBars />}
          </button>
        </div>
      )}
      {isMobile ? (
        <div className={`flex flex-col ${togglerNav ? 'items-center' : 'hidden md:flex'} gap-4`}>
          
          <NavLink className="nav-link" onClick={isMobile ? clickHandler : undefined} to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" onClick={isMobile ? clickHandler : undefined} to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-link" onClick={isMobile ? clickHandler : undefined} to="/experiences">
            Experiences
          </NavLink>
          <NavLink className="nav-link" onClick={isMobile ? clickHandler : undefined} to="/courses">
            Certificates
          </NavLink>
          <NavLink className="nav-link" onClick={isMobile ? clickHandler : undefined} to="/contact">
            Contact
          </NavLink>
        </div>
      ) : (
        <div className="flex md:flex-col gap-4">
          
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-link" to="/experiences">
            Experiences
          </NavLink>
          <NavLink className="nav-link" to="/certificates">
            Certificates
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Header;