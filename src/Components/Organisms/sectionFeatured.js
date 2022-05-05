// import { featuredIn } from "../../content/featuredIn";
import FeaturedInText from "../Atoms/featuredInImages";
import FeaturedInImages from "../Atoms/featuredInText";
import "../Organisms/sectionFeatured.css";

import styled from "styled-components";

const SectionTag = styled.section`
  padding: 4.8rem 0 3.2rem 0;
`;
const DivContainerTag = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;
const DivLogosTag = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;

  height: 3.2rem;
  filter: brightness(0);
  opacity: 50%;

  @media (max-width: 59em) {
    height: 2.4rem;
  }

  @media (max-width: 34em) {
    height: 1.2rem;
  }
`;

function Featured() {
  return (
    <SectionTag>
      {/* // <section className="section-featured"> */}

      <DivContainerTag>
        {/* <div className="container"> */}
        {/* 1.Featured in Text */}
        <FeaturedInImages />
        <DivLogosTag>
          {/* <div className="logos"> */}
          {/* Featured in Logos Images */}
          <FeaturedInText />
        </DivLogosTag>
        );
      </DivContainerTag>
    </SectionTag>
  );
}

export default Featured;
