import { meals } from "../../content/meals";
import MealHeadingTertiary from "../Atoms/mealHeadingTertiary";
import MealsListColumnThird from "../Atoms/mealsListColumnThird";
import MealsSeeRecepie from "../Atoms/mealsSeeRecepie";
import MealHeading from "../Molecules/mealsHeading";
import MealTypes from "../Molecules/mealsTypes";
import styled from "styled-components";

// import "../Organisms/meals.css";

const SectionTag = styled.section`
  padding: 9.6rem 0;
`;
const DivHeadingTag = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  text-align: center;
`;
const DivColumnTag = styled.div`
  // container grid grid--3-cols margin-bottom-md
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  // grid
  
  display: flex;
  column-gap: 6.4rem;
  row-gap: 9.6rem;

  &:not(:last-child) {
  margin-bottom: 9.6rem;

@media (max-width: 75em) {
    column-gap: 4.8rem;
    row-gap: 6.4rem;
}
  
//grid--3-cols
 // grid-template-columns: repeat(3, 1fr);

@media (max-width: 44em) {
    grid-template-columns: repeat(2, 1fr);
}


@media (max-width: 34em) {
    row-gap: 4.8rem;
  }
    grid-template-columns: 1fr;
  }


//margin-bottom-md
  margin-bottom: 4.8rem !important;

`;
const DivRecepieTag = styled.div`
//container  
max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
//all-recepie
  text-align: center;
  font-size: 1.8rem;
`;

const DivDietsTag = styled.div`
  @media (max-width: 44em) {
    grid-column: 1 / -1;
    justify-self: center;
  }
`;
const UnorderedListTag = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

function Meals() {
  return (
    <SectionTag id="meals">
      {/* <section className="section-meals" id="meals"> */}
      <DivHeadingTag>
        {/* <div className="container center-text"> */}
        {/* Meals Heading */}
        <MealHeading />
        {/* </div> */}
      </DivHeadingTag>

      <DivColumnTag>
        {/* <div className="container grid grid--3-cols margin-bottom-md"> */}
        {/* Column 1 and Column 2 */}
        <MealTypes data />
        {/* Column 3 */}
        <DivDietsTag>
          {/* <div className="diets"> */}
          {/* Tertiary Heading */}
          <MealHeadingTertiary data={meals} />


          <UnorderedListTag>
            {/* <ul className="list"> */}
            {meals.diet.map((meal) => {
              return <MealsListColumnThird data={meal} />;
            })}
            {/* </ul> */}
          </UnorderedListTag>
          {/* </div> */}
        </DivDietsTag>
        {/* </div> */}
      </DivColumnTag>

      <DivRecepieTag>
        {/* <div className="container all-recipes"> */}
        <MealsSeeRecepie data={meals} />
        {/* </div> */}
      </DivRecepieTag>
      {/* </section> */}
    </SectionTag>
  );
}

export default Meals;
