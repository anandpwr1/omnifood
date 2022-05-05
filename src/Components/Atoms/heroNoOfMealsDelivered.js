import { hero } from "../../content/hero";
// import "../Atoms/heroNoOfMealsDelivered.css";

import styled from "styled-components";
const ParaTag = styled.p`
  margin-top: 4rem; //writeen later.
  font-size: 1.8rem;
  font-weight: 700;
`;

const SpanTag = styled.span`
  color: #cf711f;
  font-weight: 700;
`;
function HeroNoOfMealsDelivered() {
  return (
    <>
      <ParaTag>
        {/* <p className="delivered-text"> */}
        {hero.noOfMealsDelivered}
        <SpanTag>{hero.noOfMealsDeliveredText}</SpanTag>
        {/* <span>{hero.noOfMealsDelivered}</span> */}

        {/* {hero.noOfMealsDeliveredText} */}
        {/* </p> */}
      </ParaTag>
    </>
  );
}
export default HeroNoOfMealsDelivered;
