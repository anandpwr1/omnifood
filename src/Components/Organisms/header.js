import "./header.css";
import styled from "styled-components";

import { headerContent } from "../../content/header";
import Navbutton from "../Molecules/navButton";
import LogoHeader from "../Atoms/logo";

const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdf2e9;

  /* Because we want header to be sticky later */
  height: 9.6rem;
  padding: 0 4.8rem;
  position: relative;

  // Making Header Sticky
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 8rem;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #fdf2e9;
  // rgba(255, 255, 255, 0.97);
  z-index: 999;
  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
`;

const NavigationTag = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4.8rem;

  @media (max-width: 59em) {
    background-color: rgba(255, 255, 255, 0.9);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: translateX(100%);

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in;

    /* Hide navigation */
    /* Allows NO transitions at all */
    display: none;

    /* 1) Hide it visually */
    opacity: 0;

    /* 2) Make it unaccessible to mouse and keyboard */
    pointer-events: none;

    /* 3) Hide it from screen readers */
    visibility: hidden;
  }
`;

const UnorderedListTag = styled(NavigationTag)`
  @media (max-width: 75em) {
    gap: 3.2rem;
    margin-right: 3.2rem;
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
  @media (max-width: 59em) {
    flex-direction: column;
    gap: 4.8rem;
  }

  @media (max-width: 34em) {
    margin-right: 4.8rem;
  }
`;

const ButtonMobileTag = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: none;
  
  @media (max-width: 59em) {
    display: block;
    z-index: 9999;
  }
`;


function Header() {
  return (
    <>
      <HeaderTag>
        {/* LOGO */}
        <LogoHeader />
        {/* Navigation Bar */}
        <NavigationTag>
          {/*       <nav className="main-nav"> */}
          <UnorderedListTag>
            {/* <ul className="main-nav-list"> */}
            {headerContent.headButton.map((data) => (
              <Navbutton data={data} />
            ))}
          </UnorderedListTag>
        </NavigationTag>
        {/* mobile Navigation */}
        <ButtonMobileTag>
          {/* <button className="btn-mobile-nav"> */}
          {headerContent.iconButton.map((icon) => {
            <ion-icon className="icon-mobile-nav" name={icon.name}></ion-icon>;
          })}
        </ButtonMobileTag>
      </HeaderTag>
    </>
  );
}

export default Header;
