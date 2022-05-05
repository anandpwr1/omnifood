import { hero } from "../../content/hero";
import HeroCustomerImages from "../Atoms/heroCustomerImages";
import HeroNoOfMealsDelivered from "../Atoms/heroNoOfMealsDelivered";

import styled from "styled-components";

import "../Molecules/heroMealsDeliverd.css";

const DivDeliveredImageTag = styled.div`
  display: flex;
  margin-top: 4rem;


`;
function HeroMealsDelivered() {
  return (
    <>
      <DivDeliveredImageTag>
        {/* <div className="delivered-imgs"> */}
        {/* Customer Images */}
        <HeroCustomerImages />
        <HeroNoOfMealsDelivered />

        {/* </div> */}

        {/* <div> */}
        {/* No of Meals Delivered */}
        {/* <HeroNoOfMealsDelivered /> */}
        {/* </div> */}
      </DivDeliveredImageTag>
    </>
  );
}
export default HeroMealsDelivered;
