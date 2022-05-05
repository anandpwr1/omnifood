// import "../Atoms/ctaSecHeading.css";
import styled from "styled-components";

const HeadingTwoTag = styled.h2`
  font-size: 4.4rem;
  color: inherit;
  margin-bottom: 3.2rem;

  @media (max-width: 75em) {
    font-size: 3.6rem;
  }

  @media (max-width: 44em) {
    margin-bottom: 4.8rem;
  }
`;

function CtaSecHeading({ data }) {
  return (
    <>
      {" "}
      <HeadingTwoTag>{data.headingSecondary}</HeadingTwoTag>
      {/* <h2 className="heading-secondary">{data.headingSecondary}</h2> */}
    </>
  );
}

export default CtaSecHeading;
