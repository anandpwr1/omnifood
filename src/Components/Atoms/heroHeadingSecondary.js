import { hero } from "../../content/hero";
import "../Atoms/heroHeadingSecondary.css";

import styled from "styled-components";
const ParaTag = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
  text-align: left;
`;


function HeroSecondary() {
  return (
    <>
      <ParaTag>
        {hero.heroDescription}
      </ParaTag> 


      {/* <p className="hero-description">{hero.heroDescription}</p> */}
    </>
  );
}
export default HeroSecondary;
