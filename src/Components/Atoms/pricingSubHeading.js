// import "../Atoms/pricingSubHeading.css";

import styled from "styled-components";

const SpanTag = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  color: #cf711f;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
`;
function PricingSubHeading({ data }) {
  return (
    <>
      <SpanTag>{data.subheading}</SpanTag>
      {/* <span className="subheading">{data.subheading}</span> */}
    </>
  );
}
export default PricingSubHeading;