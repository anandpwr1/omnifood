import CtaFormLabels from "../Atoms/ctaFormLabels";
import CtaInputFields from "../Atoms/ctaInputFields";
import CtaSelectLableFromWhere from "../Atoms/ctaSelectLabelFromWhere";
import CtaFormChooseField from "./ctaFormChooseField";

// import "../Molecules/ctaForm.css";
import styled from "styled-components";
const FormTag = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
  row-gap: 2.4rem;

  label {
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }

  input,
  select {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.8rem;
    font-family: inherit;
    color: inherit;
    border: none;
    background-color: #fdf2e9;
    border-radius: 9px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  input::placeholder {
    color: #aaa;
  }

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
  }
`;

const ButtonTag = styled.button`
  @media (max-width: 59em) {
    margin-top: 1.2rem;
  }

  &:link,
  &:visited {
    display: inline-block;

    text-decoration: none;
    font-size: 2rem;
    font-weight: 600;
    padding: 1.6rem 3.2rem;
    border-radius: 9px;

    /* Only necessary for .btn */
    border: none;
    cursor: pointer;
    font-family: inherit;

    /* Put transition on original "state" */
    /* transition: background-color 0.3s; */
    transition: all 0.3s;
  }

  background-color: #45260a;
  color: #fdf2e9;
  align-self: end;
  padding: 1.2rem;
  border:1.8px;

  &:hover {
    background-color: #fff;
    color: #555;
  }

  @media (max-width: 34em) {
    &:link,
    &:visited {
      padding: 2.4rem 1.6rem;
    }
  }
`;
// ==========Create its styled component

function CtaForm({ cta }) {
  return (
    <>
      <FormTag name="sign-up">
        {/* <form className="cta-form" name="sign-up" netlify> */}
        {cta.label.map((labelCta) => {
          return (
            <>
              <div>
                {/* Lable one and two */}
                <CtaFormLabels data={labelCta} />
                {/* Field One and Two */}
                <CtaInputFields data={labelCta} />
              </div>
            </>
          );
        })}

        <div>
          {cta.labelSelect.map((selectLabel) => {
            return (
              <>
                {/* Field Label Three */}
                <CtaSelectLableFromWhere data={selectLabel} />
                {/* Choose field Three */}
                <CtaFormChooseField selectLabel={selectLabel} />
              </>
            );
          })}
        </div>
        {/* Button */}
        <ButtonTag className="btn btn--form">{cta.buttonText}</ButtonTag>
        {/* <button className="btn btn--form">{cta.buttonText}</button> */}

        {/* </form> */}
      </FormTag>
    </>
  );
}
export default CtaForm;
