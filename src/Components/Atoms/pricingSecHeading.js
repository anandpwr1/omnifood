import "../Atoms/pricingSecHeading.css";

import styled from "styled-components";

const HeadingTwoTag = styled.h2`
  font-size: 4.4rem;
  line-height: 1.2;
  margin-bottom: 9.6rem;
  font-weight: 700;
  color: #333;

  letter-spacing: -0.5px;
  color: inherit;
  margin-bottom: 3.2rem;

  @media (max-width: 44em) {
      margin-bottom: 4.8rem;
  }
`;
function PricingSecHeading({ data }) {
  return (
    <>
      <HeadingTwoTag>{data.headingSecondary}</HeadingTwoTag>
      {/* <h2 className="heading-secondary">{data.headingSecondary}</h2> */}
    </>
  );
}
export default PricingSecHeading;
