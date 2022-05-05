import { cta } from "../../content/cta";
import CtaFormImage from "../Atoms/ctaFormImage";
import CtaForm from "../Molecules/ctaForm";
import CtaHeading from "../Molecules/ctaHeading";

import "../Organisms/cta.css";
import styled from "styled-components";

const SectionTag = styled.section`
  padding: 4.8rem 0 12.8rem;
`;
const DivContainerTag = styled.div`
  max-width: 130rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;
const DivCtaTag = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* background-color: #e67e22; */
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  border-radius: 11px;

  background-image: linear-gradient(to right bottom, #eb984e, #e67e22);
  overflow: hidden;

  color: inherit;
  margin-bottom: 3.2rem;
  *:focus {
    outline: none;
    box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);
  }

  @media (max-width: 59em) {
    grid-template-columns: 3fr 2fr;
  }

  @media (max-width: 34em) {
    grid-template-columns: 1fr;
  }
`;
const DivCtaTextBoxTag = styled.div`
    padding: 4.8rem 6.4rem 6.4rem 6.4rem;
  @media (max-width: 59em) {
    padding: 4.8rem 6.4rem 6.4rem 6.4rem;
    color: #45260a;
  }

  @media (max-width: 34em) {
      padding: 3.2rem;
    }
  }
`;

function Cta({ cta }) {
  return (
    <SectionTag id="cta">
      {/* <section className="section-cta" id="cta"> */}
      <DivContainerTag>
        {/* <div className="container"> */}
        <DivCtaTag>
          {/* <div className="cta"> */}
          <DivCtaTextBoxTag>
            {/* <div className="cta-text-box"> */}
            {/* Heading */}
            <CtaHeading data={cta} />

            {/* Form */}
            <CtaForm cta={cta} />
            {/* </div> */}
          </DivCtaTextBoxTag>
          {/* Image */}
          <CtaFormImage />
          {/* </div> */}
        </DivCtaTag>
        {/* </div> */}
      </DivContainerTag>
      {/* </section> */}



      
    </SectionTag>
  );
}

export default Cta;
