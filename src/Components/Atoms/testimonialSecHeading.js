// import "../Atoms/testimonialSecHeading.css";
import styled from "styled-components";

const HeadingTwoTag = styled.h2`
  font-size: 4.4rem;
  line-height: 1.2;
  margin-bottom: 9.6rem;
  font-weight: 700;
  color: #333;
  /* color: #45260a; */
  /* color: #343a40; */
  letter-spacing: -0.5px;

  color: inherit;
  margin-bottom: 3.2rem;

  @media (max-width: 44em) {
    .heading-secondary {
      margin-bottom: 4.8rem;
    }
  }


`;

function TestimonialSecHeading({ data }) {
  return (<>
    <HeadingTwoTag>{ data.subheading}</HeadingTwoTag>
    {/* <h2 className="heading-secondary">{data.subheading}</h2> */}
  </>
    );
}

export default TestimonialSecHeading;