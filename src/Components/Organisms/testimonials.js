import TestimonialImage from "../Atoms/testimonialImage";
import TestimonialCustomerComment from "../Molecules/testimonialCustomerComment";
import TestimonialHeading from "../Molecules/testimonialHeading";

// import "../Organisms/testimonials.css";

import styled from "styled-components";

const SectionTag = styled.section`
  background-color: #fdf2e9;
  display: grid;
  grid-template-columns: 55fr 45fr;
  align-items: center;

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
  }
`;
const DivContainerTag = styled.div`
  padding: 9.6rem;

  @media (max-width: 75em) {
    padding: 9.6rem 3.2rem;
  }
`;
const DivGalleryTag = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
    padding: 1.6rem;

  @media (max-width: 84em) {
      grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 59em) {
      grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 34em) {
      grid-template-columns: repeat(4, 1fr);
      gap: 1.2rem;
  }
`;
const FigureTag = styled.figure`
    overflow: hidden;

   img {
    display: block;
    width: 100%;
    transition: all 0.4s;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

// import {testimonial} from "../../content/testimonial"
function Testimonials({ testimonial, showIndividual }) {
  return (
    <SectionTag>
      {/* <section className="section-testimonials" id="testimonials"> */}

      <DivContainerTag>
        {/* <div className="testimonials-container"> */}
        {/* Commponent Heading */}
        <TestimonialHeading data={testimonial} />

        {/* commments by customers */}
        <TestimonialCustomerComment data={testimonial} value={showIndividual} />
        {/* </div> */}
      </DivContainerTag>

      <DivGalleryTag>
        {/* <div className="gallery"> */}
        {testimonial.gallery.map((gal) => (
          <FigureTag>
            {/* <figure className="gallery-item"> */}
              {/* Testimonial main Image */}
              <TestimonialImage data={gal} />
            {/* </figure> */}
          </FigureTag>
        ))}
        {/* </div> */}
      </DivGalleryTag>
      {/* </section> */}
    </SectionTag>
  );
}

export default Testimonials;
