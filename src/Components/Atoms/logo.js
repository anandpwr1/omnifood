// import './logo.css';

import styled from "styled-components";

const Image = styled.img`
  height: 2.8rem;
`;

function LogoHeader() {
  return (
    <a href="#">
      <Image alt={"Omnifood logo"} src="img/omnifood-logo.png" />
    </a >
  );
}
export default LogoHeader;