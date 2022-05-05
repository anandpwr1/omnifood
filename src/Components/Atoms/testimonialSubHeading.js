// import "../Atoms/testimonialSubHeading.css";

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
function TestimonialSubHeading({ data }) {
  return (
    <>
    
      <SpanTag>{ data.componentHeading}</SpanTag>
      {/* <span className="subheading">{data.componentHeading}</span> */}
    </>
  );
}

export default TestimonialSubHeading;