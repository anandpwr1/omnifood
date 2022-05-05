// import { hero } from "../../content/hero";
import HeroImage from "../Atoms/heroImage";
import HeroButtons from "../Molecules/heroButtons";
import HeroDescriptionText from "../Molecules/heroDescription";
import HeroMealsDelivered from "../Molecules/heroMealsDeliverd";
// import "../Organisms/heroSection.css";

import styled from "styled-components";

const SectionTag = styled.section`
  margin-top: 8rem;
  background-color: #fdf2e9;
  padding: 4.8rem 0 9.6rem 0;

  @media (max-width: 34em) {
    padding: 2.4rem 0 6.4rem 0;
  }
`;

const DivHeroTag = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9.6rem;
  align-items: center;

  @media (max-width: 84em) {
    max-width: 120rem;
  }

  @media (max-width: 75em) {
    gap: 4.8rem;
  }

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    padding: 0 8rem;
    gap: 6.4rem;
  }
`;
const DivHeroTextTag = styled.div`
  @media (max-width: 59em) {
    text-align: center;
  }
`;
const DivDeliveredMealsTag = styled.div`
  @media (max-width: 59em) {
    text-align: center;
  }
`;
const DivImageTag = styled.div`
  display: flex;
  align-items: right ;
  gap: 2.6rem;
  margin-top: 8rem;
`;

function Hero() {
  return (
    // Hero Section

    <SectionTag>
      {/* <section className="section-hero"> */}
      <DivHeroTag>
        {/* <div className="hero"> */}
        <DivHeroTextTag>
          {/* <div className="hero-text-box"> */}
          {/* 1. Headings hero section */}

          <HeroDescriptionText />

          {/* 2 Buttons Here  */}

          <HeroButtons />

          {/* 3 Customer Images and No of Delivered meals */}

          <DivDeliveredMealsTag>
            {/* <div className="delivered-meals"> */}
            <HeroMealsDelivered />
          </DivDeliveredMealsTag>
        </DivHeroTextTag>

        {/* 4Hero Section Image */}

        <DivImageTag>
          {/* <div className="hero-img-box"> */}
          <HeroImage />
        </DivImageTag>
      </DivHeroTag>
    </SectionTag>
  );
}

export default Hero;
