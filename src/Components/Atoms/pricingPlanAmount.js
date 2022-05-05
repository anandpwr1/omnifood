import "../Atoms/pricingPlanAmount.css";
import styled from "styled-components";

const ParaPriceTag = styled.p`
    font-size: 6.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1.6rem;

  span {
    font-size: 3rem;
    font-weight: 500;
    margin-right: 0.8rem;
  }
`;

const ParaTextTag = styled.p`
font-size: 1.6rem
`;


function PricingPlanAmount({ data }) {
  return (
    <>
<ParaPriceTag>
      {/* <p className="plan-price"> */}
        <span>{data.planCurrency}</span>
        {data.planAmount}
      {/* </p> */}
      </ParaPriceTag>

      <ParaTextTag>{data.planText}</ParaTextTag>
      {/* <p className="plan-text">{data.planText}</p> */}
    </>
  );
}
export default PricingPlanAmount;