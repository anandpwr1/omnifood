import "../Atoms/footerLogo.css";
import styled from "styled-components";
const AnchorTag = styled.a`
    display: block;
    margin-bottom: 3.2rem;
`;
const ImageTag = styled.img`
  height: 2.2rem;
`;


function FooterLogo() {
  return (
    <>
      <AnchorTag>
        {/* <a href="#" className="footer-logo"> */}
        <ImageTag alt="Omnifood logo" src="img/omnifood-logo.png" />
        {/* <img className="logo" alt="Omnifood logo" src="img/omnifood-logo.png" /> */}
        {/* </a> */}
      </AnchorTag>
    </>
  );
}
export default FooterLogo;