import PricingPlanDetails from "../Atoms/pricingPlanDetails";
import PricingContainer from "../Molecules/pricingContainer";
import PricingHeading from "../Molecules/pricingHeading";
import PricingTypeOfPlans from "../Molecules/pricingTypeOfPlans";

// import "../Organisms/pricing.css";
import styled from "styled-components";

const SectionTag = styled.section`
  padding: 9.6rem 0;
`;
const DivHeadingTag = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;
const DivTypesOfPlanTag = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;

  margin-bottom: 9.6rem;

  @media (max-width: 75em) {
    column-gap: 4.8rem;
    row-gap: 6.4rem;
  }

  @media (max-width: 34em) {
    row-gap: 4.8rem;
  }

  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 34em) {
    grid-template-columns: 1fr;
  }
  margin-bottom: 4.8rem !important;
`;
const DivPlanDetailsTag = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;

  margin-bottom: 9.6rem;

  @media (max-width: 75em) {
    column-gap: 4.8rem;
    row-gap: 6.4rem;
  }

  @media (max-width: 34em) {
    row-gap: 4.8rem;
  }
`;
const DivFourContainersTag = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;
  grid-template-columns: repeat(4, 1fr);

  margin-bottom: 9.6rem;

  @media (max-width: 75em) {
    column-gap: 4.8rem;
    row-gap: 6.4rem;
  }

  @media (max-width: 34em) {
    row-gap: 4.8rem;
  }

  @media (max-width: 44em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 34em) {
    grid-template-columns: 1fr;
  }
`;

function Pricing({ pricing }) {
  return (
    <SectionTag id="pricing">
      {/* // <section className="section-pricing" id="pricing"> */}

      <DivHeadingTag>
        {/* <div className="container"> */}
        {/* Heading */}
        <PricingHeading data={pricing} />
        {/* </div> */}
      </DivHeadingTag>

      {/* Types of Plans */}

      <DivTypesOfPlanTag>
        {/* <div className="container grid grid--2-cols margin-bottom-md"> */}
        <PricingTypeOfPlans pricing={pricing} />
        {/* </div> */}
      </DivTypesOfPlanTag>

      <DivPlanDetailsTag>
        {/* <div className="container grid"> */}
        {/* Plan Details */}
        <PricingPlanDetails data={pricing} />
        {/* </div> */}
      </DivPlanDetailsTag>

      <DivFourContainersTag>
        {/* <div className="container grid grid--4-cols"> */}
        {/* Four Containers  */}
        <PricingContainer pricing={pricing} />
        {/* </div> */}
      </DivFourContainersTag>
      {/* </section> */}
    </SectionTag>
  );
}

export default Pricing;
