import { useState } from "react";

import Header from "./Organisms/header";
import Hero from "./Organisms/heroSection";
import Featured from "./Organisms/sectionFeatured";
import Working from "./Organisms/howItWorks";
import Meals from "./Organisms/meals";
import Testimonials from "./Organisms/testimonials";
import Pricing from "./Organisms/pricing";
import Cta from "./Organisms/cta";
import Footer from "./Organisms/footer";
import {testimonial} from "../content/testimonial"
import { pricing } from "../content/pricing";
import { cta } from "../content/cta";
import { footer } from "../content/footer";
import './home.css';

import styled from "styled-components";
const BodyTag = styled.body`
  font-family: "Rubik", sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #555;

  overflow-x: hidden;
`;

function Home(){
  const [showIndividual, setShowIndividual] = useState(true)
  return (
    <BodyTag>
      {/* <body> */}
        <Header />

        <main>
          <Hero />

          <Featured />

          <Working />

          <Meals />
          {/* <button onClick={() => setShowIndividual(!showIndividual)}>
          Click me
        </button> */}

          <Testimonials
            testimonial={testimonial}
            showIndividual={showIndividual}
          />

          <Pricing pricing={pricing} />

          <Cta cta={cta} />
        </main>

        <Footer footer={footer} />
      {/* </body> */}
    </BodyTag>
  );
}

export default Home;