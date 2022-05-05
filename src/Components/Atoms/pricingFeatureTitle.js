
// import "../Atoms/pricingFeatureTitle.css";

import styled from "styled-components";
const ParaTag = styled.p`
  font-size: 2.4rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 1.6rem;
`;

function PricingFeatureTitle({ data }) {
  return (
    <>
      <ParaTag>{data.featureTitle}</ParaTag>
      {/* <p className="feature-title">{data.featureTitle}</p> */}
    </>
  );
}
export default PricingFeatureTitle;
