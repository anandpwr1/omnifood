import TestimonialAuthor from "../Atoms/testimonialAuthor";
import TestimonialBlockquote from "../Atoms/testimonialBlockquote";
import TestimonialImages from "../Atoms/testimonialImages";

// import "../Molecules/testimonialCustomerComment.css";

import styled from "styled-components";

const DivTestimonialTag = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 4.8rem;
    column-gap: 8rem;

  @media (max-width: 34em) {
      grid-template-columns: 1fr;
  }
`;
// const Figuretag = styled.figure``;

function TestimonialCustomerComment({ data , value }) {
  return (
    <>
      {value && (
        <DivTestimonialTag>
        {/* <div className="testimonials"> */}
          {data.content.map((content) => (
            <figure className="testimonial">
              {/* Image */}
              <TestimonialImages data={content} />
              {/* blockquote */}
              <TestimonialBlockquote data={content} />
              {/* writer of testimonial */}
              <TestimonialAuthor data={content} />
            </figure>
          ))}
        {/* </div> */}
        </DivTestimonialTag>
      )}
    </>
  );
}
export default TestimonialCustomerComment;