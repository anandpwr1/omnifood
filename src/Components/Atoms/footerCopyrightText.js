import "../Atoms/footerCopyrightText.css";

import styled from "styled-components";
const ParaTag = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #767676;
  margin-top: auto;
`;

function FooterCopyrightText() {
  return (
    <>
      <ParaTag>
        {/* <p className="copyright"> */}
          Copyright &copy; <span className="year">2027</span> by Omnifood, Inc.
          All rights reserved.
        {/* </p> */}
      </ParaTag>
    </>
  );
}
export default FooterCopyrightText;