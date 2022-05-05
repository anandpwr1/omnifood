import { hero } from "../../content/hero";
import "../Atoms/heroHeadingPrimary.css";

import styled from "styled-components";

const HeadingOneTag = styled.h1`
  font-size: 5.2rem;
  line-height: 1.05;
  margin-bottom: 3.2rem;
  font-weight: 700;
  color: #333;
  /* color: #45260a; */
  /* color: #343a40; */
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: 84em) {
    .heading-primary {
      font-size: 4.4rem;
    }
  }
`;

function HeroHeadingPrimary() {
  return (
    <>
      <HeadingOneTag>
        {hero.heroValue}
      </HeadingOneTag>  
      {/* <h1 className="heading-primary">{hero.heroValue}</h1> */}
    </>
  );

}
export default HeroHeadingPrimary;