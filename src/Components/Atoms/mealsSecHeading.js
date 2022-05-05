import { meals } from "../../content/meals";
// import "../Atoms/mealsSecHeading.css";
import styled from "styled-components";

const HeadingTwoTag = styled.h2`
  /* color: #45260a; */
  color: inherit;
  margin-bottom: 3.2rem;

  @media (max-width: 75em) {
    font-size: 3.6rem;
  }

  @media (max-width: 44em) {
    margin-bottom: 4.8rem;
  }
  font-size: 3.6rem;
`;

function MealsSecHeading() {
  return (
    <>
      <HeadingTwoTag>
        {meals.headingSecondary}
      </HeadingTwoTag>
      {/* <h2 className="heading-secondary">{meals.headingSecondary}</h2> */}
    </>
  );
}
export default MealsSecHeading;