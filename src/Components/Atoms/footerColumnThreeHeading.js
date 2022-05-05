import styled from "styled-components";
const ParaTag = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 4rem;
`;

function FooterColumnThreeHeading({ data }) {
  return (
    <>
      <ParaTag>
        {data.footerHeading}
        {/* <p className="footer-heading">{data.footerHeading}</p> */}
      </ParaTag>
    </>
  );
}
export default FooterColumnThreeHeading;
