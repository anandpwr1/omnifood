// import "../Atoms/testimonialAuthor.css";

import styled from "styled-components";
const ParaTag = styled.p`
  font-size: 1.6rem;
  color: #6f6f6f;
`;

function TestimonialAuthor({ data }) {
  return (
    <>
      <ParaTag>&mdash; {data.name}</ParaTag>
      {/* <p className="testimonial-name">&mdash; {data.name}</p> */}
    </>
  );
}
export default TestimonialAuthor;
