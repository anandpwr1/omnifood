import FooterCopyrightText from "../Atoms/footerCopyrightText";
import FooterLogo from "../Atoms/footerLogo";
import SocialIcons from "./social-icons";

// import "../Molecules/footerColumnOne.css";

import styled from "styled-components";
const DivLogoColTag = styled.div`
  display: flex;
  flex-direction: column;
@media (max-width: 44em) {
    grid-column: span 3;
}`;


function FooterColumnOne({data}) {
  return (
    <>
      <DivLogoColTag>
      {/* <div className="logo-col"> */}
        {/* Footer Logo */}
       <FooterLogo/>
        {/* Social Icons */}
        <SocialIcons data={data} />
        {/* Copyright Text */}
       <FooterCopyrightText/>
      {/* </div> */}
      </DivLogoColTag>
    </>
  );
}
export default FooterColumnOne;