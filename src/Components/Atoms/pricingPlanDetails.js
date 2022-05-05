// import "../Atoms/pricingPlanDetails.css";
import styled from "styled-components";

const AsideTag = styled.aside`
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: center;
`;

function PricingPlanDetails({ data }) {
  return (
    <>
      {" "}
      <AsideTag>{data.planDetails}</AsideTag>
      {/* <aside className="plan-details">{data.planDetails}</aside> */}
    </>
  );
}
export default PricingPlanDetails;