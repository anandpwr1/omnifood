import PricingPlanAmount from "../Atoms/pricingPlanAmount";
import PricingPlanIcon from "../Atoms/pricingPlanIcon";
import PricingPlanName from "../Atoms/pricingPlanName";

import "../Molecules/pricingTypeOfPlans.css";

import styled from "styled-components";
const HeaderTag = styled.header`
  text-align: center;
  margin-bottom: 4.8rem;
`;
const UnorderedListTag = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const ListTag = styled.li`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  line-height: 1.2;

  .no-flexbox-gap .list-item:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;
const SignUpTag = styled.div`
  text-align: center;
  margin-top: 4.8rem;
`;

const AnchorTag = styled.a`
  display: inline-block;

  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  padding: 1.6rem 3.2rem;
  border-radius: 9px;

  /* Only necessary for .btn */
  border: none;
  cursor: pointer;
  font-family: inherit;

  /* Put transition on original "state" */
  /* transition: background-color 0.3s; */
  transition: all 0.3s;

  color: #555;

  /* border: 3px solid #fff; */

  /* Trick to add border inside */
  box-shadow: inset 0 0 0 3px #fff;

  color: #fff ;

  background-color: #e67e22; //background color of button

  @media (max-width: 34em) {
    padding: 2.4rem 1.6rem;
  }
`;

function PricingTypeOfPlans({ pricing }) {
  return (
    <>
      {pricing.plan.map((plan) => {
        let planClass;
        return (
          <>
            {/* Starter Plan and Complete Plan */}

            <div
              className={
                plan.planName == "Starter"
                  ? (planClass = "pricing-plan pricing-plan--starter")
                  : (planClass = "pricing-plan pricing-plan--complete")
              }
            >
              <HeaderTag>
                {/* <header className="plan-header"> */}
                {/* Plan Name */}
                <PricingPlanName data={plan} />
                {/* Plan Price */}
                <PricingPlanAmount data={plan} />
                {/* </header> */}
              </HeaderTag>

              <UnorderedListTag>
                {/* <ul className="list"> */}
                <ListTag>
                  {/* <li className="list-item"> */}
                  <PricingPlanIcon data={pricing.icon} />
                  <span>{plan.noOfMealsADay}</span>
                  {/* </li> */}
                </ListTag>

                <ListTag>
                  {/* <li className="list-item"> */}
                  <PricingPlanIcon data={pricing.icon.iconTitle} />

                  {plan.orderTimeCheck ? (
                    <span>
                      {plan.orderTime} <strong>{plan.orderTiming}</strong>
                    </span>
                  ) : (
                    <span>{plan.orderTime}</span>
                  )}
                  {/* </li> */}
                </ListTag>

                <ListTag>
                  {/* <li className="list-item"> */}
                  <PricingPlanIcon data={pricing.icon.iconTitle} />
                  <span>{plan.freeDelivery}</span>
                  {/* </li> */}
                </ListTag>

                <ListTag>
                  {/* <li className="list-item"> */}
                  <PricingPlanIcon data={pricing.icon.iconTitle} />
                  <span> {plan.planOffer}</span>
                  {/* </li> */}
                </ListTag>
                {/* </ul> */}
              </UnorderedListTag>

              <SignUpTag>
                {/* <div className="plan-sing-up"> */}
                {/* Button Apply */}

                {/* Create Tag Here */}
                <AnchorTag>
                  {/* <a href="#" className="btn btn--full"> */}
                    {plan.startEatingWellButton}
                  {/* </a> */}
                </AnchorTag>
                {/* </div> */}
              </SignUpTag>
            </div>
          </>
        );
      })}
    </>
  );
}
export default PricingTypeOfPlans;
