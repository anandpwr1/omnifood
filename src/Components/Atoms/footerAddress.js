// import "../Atoms/footerAddress.css";

import styled from "styled-components";
const ParaTag = styled.p`
  margin-bottom: 2.4rem;
`;


function FooterAddress({ data }) {
  return (
    <>
      <ParaTag>
        {/* <p className="address"> */}
        {data.address}
        {/* </p> */}
      </ParaTag>
    </>
  );
}

export default FooterAddress;