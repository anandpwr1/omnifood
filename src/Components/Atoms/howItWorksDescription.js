// import "../Atoms/howItWorksDescription.css";
import styled from "styled-components";

const ParaStepTag = styled.p`
  font-size: 8.6rem;
  font-weight: 600;
  color: #ddd;
  margin-bottom: 1.2rem;

  @media (max-width: 59em) {
    font-size: 7.4rem;
  }
`;

const HeadThreeTag = styled.h3`
  @media (max-width: 75em) {
    font-size: 2.4rem;
  }

  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 3.2rem;
  font-weight: 700;
  color: #333;
  /* color: #45260a; */
  /* color: #343a40; */
  letter-spacing: -0.5px;
`;

const ParaDescTag = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
`;

function HowItWorksDescription({ data }) {
  return (
    <>
      <div>
        <ParaStepTag>{data.stepNumber}</ParaStepTag>
        {/* <p className="step-number">{data.stepNumber}</p> */}
        <HeadThreeTag>{data.headingTertiary}</HeadThreeTag>
        {/* <h3 className="heading-tertiary">{data.headingTertiary}</h3> */}
        <ParaDescTag>{data.stepDescription}</ParaDescTag>
        {/* <p className="step-description">{data.stepDescription}</p> */}
      </div>
    </>
  );
}
export default HowItWorksDescription;
