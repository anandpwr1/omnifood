import { howItWorks } from "../../content/howItWorks";
import HowItWorkGrid from "../Molecules/howItWorkGrid";
// import "../Organisms/howItWork.css";
import styled from "styled-components";

const SectionTag = styled.section`
  padding: 9.6rem 0 ;
`;
const DivContainerTag = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;
const SpanTag = styled.span`
  display: block;
  font-size: 2.4rem;
  font-weight: 800;
  color: #cf711f;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
`;
const HeadingTwoTag = styled.h2`
  color: inherit;
  margin-bottom: 3.2rem;
  font-size: 2rem;

  @media (max-width: 75em) {
    font-size: 3.6rem;
  }

  @media (max-width: 44em) {
    margin-bottom: 4.8rem;
  }
`;
const DivContainerGridTag = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  grid-template-columns: repeat(2, 1fr);

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

    grid-template-columns: 1fr;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:not(:last-child) {
    margin-bottom: 9.6rem;
  }

  grid-template-columns: repeat(2, 1fr);

  align-items: center;
`;

function Working() {
  return (
    <SectionTag id="how">
      {/* <section className="section-how" id="how"> */}

      {/* Heading */}
      <DivContainerTag>
        {/* <div className="container"> */}
        <SpanTag>
          {/* <span className="subheading"> */}
          {howItWorks.subHeading}
          {/* </span> */}
        </SpanTag>
        <HeadingTwoTag>
          {/* <h2 className="heading-secondary"> */}
          {howItWorks.headingSecondary}
        </HeadingTwoTag>
        {/* </h2> */}
      </DivContainerTag>

      {/* Grid how it works */}
      <DivContainerGridTag>
        {/* <div className="container grid grid--2-cols grid--center-v"> */}
        {/* Three Steps of How It works */}
        <HowItWorkGrid />
      </DivContainerGridTag>
    </SectionTag>
  );
}
export default Working;
