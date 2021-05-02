import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={pathname === "/" ? { width: "50%" } : ""}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={pathname === "/work" ? { width: "50%" } : ""}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={pathname === "/contact" ? { width: "50%" } : ""}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 5rem;
      position: relative;
    }
  }
  #logo {
    font-family: "Lobster", cursive;
    font-weight: lighter;
    font-size: 1.5rem;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 0.5rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
`;

const Line = styled(motion.div)`
  background: #23d997;
  height: 0.3rem;
  width: 0%;
  position: absolute;
  left: 55%;
  bottom: -80%;
`;

export default Nav;
