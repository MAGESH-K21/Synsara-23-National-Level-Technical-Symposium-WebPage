// import React from "react";
// import "./Nav.css";
// import { Link, useLocation } from "react-router-dom";
// import useIsMobile from "../useIsMobile";

// export default function Nav() {
//   const location = useLocation();
//   const mobile = useIsMobile();

//   return (
//     <nav className="navbar navbar-expand-md navbar-dark">
//       <Link
//         className="navbar-brand"
//         to="/"
//         style={{
//           visibility:
//             location.pathname === "/" && !mobile ? "hidden" : "visible",
//         }}
//       ></Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarContent"
//         aria-controls="navbarContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarContent">
//         <ul className="navbar-nav">
//           <li className={`nav-item ${location.pathname === "/" && "active"}`}>
//             <Link className="nav-link" to="/">
//               Home
//             </Link>
//           </li>
//           <li
//             className={`nav-item ${
//               location.pathname === "/events" && "active"
//             }`}
//           >
//             <Link className="nav-link" to="/events">
//               Events
//             </Link>
//           </li>
//           <li
//             className={`nav-item ${
//               location.pathname === "/schedule" && "active"
//             }`}
//           >
//             <Link className="nav-link" to="/schedule">
//               Schedule
//             </Link>
//           </li>
//           <li
//             className={`nav-item ${
//               location.pathname === "/contact" && "active"
//             }`}
//           >
//             <Link className="nav-link" to="/contact">
//               Contact Us
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Ham from './hamclose.png';
import Hamb from './hamburger.png';



const Navi = styled.div`
  width:100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;

`;
const Navimg=styled(Link)`
    background: ${`url(${Ham})`} no-repeat;
    background-size: contain;
    margin-top: -25px;
    width: 100px;
    height: 100px;
    background-position: center;
    &:hover {
    background: ${`url(${Hamb})`} no-repeat;
    background-size: contain;
    background-position: center;}`
const NavIcon = styled(Link)`
  // background: url(hamburger.png) no-repeat;
  // height: 120px; 
  // width: 120px;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover {
    // background: #8D0E0E;
    // border-left: 4px solid #8D0E0E;
    // cursor: pointer;
    color: #8D0E0E;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#0d6efd' }}>
        <Navi>
          <Navimg to='#'  onClick={showSidebar}>
            {/* <img src={Ham} onClick={showSidebar}/> */}
          </Navimg> 
          {/* <SidebarData></SidebarData> */}
          
        </Navi>
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              // return <div>{item.index}</div>;
              return <SubMenu item={item} key={index} />;
            //   return( <li key={index}>
            //   <Link to={item.path}>
            //     {item.icon}
            //     <span>{item.title}</span>
            //   </Link>
            // </li>);
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Nav;