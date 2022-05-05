import "../Atoms/ctaHeadingText.css";
import styled from "styled-components";

const ParaTag = styled.p`
  font-size: 2rem;
  line-height: 1.8;
  margin-bottom: 4.8rem;
`;


function CtaHeadingText({ data }) {
  return (
    <>
      <ParaTag>{data.ctaText}</ParaTag>
      {/* <p className="cta-text">{data.ctaText}</p> */}
    </>
  );
}

export default CtaHeadingText;