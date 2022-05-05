// import "../Atoms/pricingPlanName.css";
import styled from "styled-components";

const ParaTag = styled.p`
  color: #cf711f;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.75;
  margin-bottom: 3.2rem;
`;

function PricingPlanName({ data }) {
  return (
    <>
      <ParaTag>{data.planName}</ParaTag>
      {/* <p className="plan-name">{data.planName}</p> */}
    </>
  );
}
export default PricingPlanName;