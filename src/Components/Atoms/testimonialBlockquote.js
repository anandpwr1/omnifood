// import "../Atoms/testimonialBlockquote.css";
import styled from "styled-components";

const BlockquoteTag = styled.blockquote`
  font-size: 1.8rem;
  line-height: 1.8;
  margin-bottom: 1.6rem;
`;

function TestimonialBlockquote({ data }) {
  return (
    <>
      <BlockquoteTag>{ data.value}</BlockquoteTag>
      {/* <blockquote className="testimonial-text">{data.value}</blockquote> */}
    </>
  );
}
export default TestimonialBlockquote;