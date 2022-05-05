// import "../Atoms/pricingFeatureText.css";
import styled from "styled-components";

const ParaTag = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
`;

function PricingFeatureText({ data }) {
  return (
    <>
      <ParaTag>{data.featureText}</ParaTag>
      {/* <p className="feature-text">{data.featureText}</p> */}
    </>
  );
}
export default PricingFeatureText;