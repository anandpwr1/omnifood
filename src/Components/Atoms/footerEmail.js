// import "../Atoms/footerItem.css";
import styled from "styled-components";
const AnchorTag = styled.a`
  .&:link,
  .&:visited {
    text-decoration: none;
    font-size: 1.6rem;
    color: #767676;
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: #555;
  }
`;

function FooterEmail({ data }) {
  return (
    <>
      <AnchorTag href={data.hrefEmail}>
        {/* <a className="footer-link" href={data.hrefEmail}> */}
        {data.email}
        {/* </a> */}
      </AnchorTag>
    </>
  );
}
export default FooterEmail;
