import { meals } from "../../content/meals";
import MealsImageCheck from "../Atoms/mealsImageCheck";
import MealsListItemOne from "../Atoms/mealsListItemOne";
import MealsListItemThree from "../Atoms/mealsListItemThree";
import MealsListItemTwo from "../Atoms/mealsListItemTwo";
import MealsTagCheck from "../Atoms/mealsTagCheck";
import MealsTitle from "../Atoms/mealsTitle";

// import "../Molecules/mealsTypes.css";

import styled from "styled-components";

const DivMealTag = styled.div`


  //class meal
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  overflow: hidden;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
  }
`;
const DivMealContentTag = styled.div`
  //class meal-content
  padding: 3.2rem 4.8rem 4.8rem 4.8rem;

  @media (max-width: 59em) {
    padding: 2.4rem 3.2rem 3.2rem 3.2rem;
  }
`;
const DivMealTagsTag = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  gap: 0.4rem;
}`;
const UnorderedListTag = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function MealTypes() {
  return (
    <>
      {meals.meal.map((mealsdetails) => {
        return (
          <>
            {/* Image Check */}
            <DivMealTag>
              {/* <div className="meal"> */}
              <MealsImageCheck data={mealsdetails} />
              <DivMealContentTag>
                {/* <div className="meal-content"> */}

                <DivMealTagsTag>
                  {/* <div className="meal-tags"> */}
                  {/* Meal tag and tag Check*/}

                  <MealsTagCheck data={mealsdetails} />
                  {/* </div> */}
                </DivMealTagsTag>
                {/* Meal Title */}
                <MealsTitle data={mealsdetails} />

                {/* Meal Details and Ratings */}
                <UnorderedListTag>
                  {/* <ul className="meal-attributes"> */}
                  <MealsListItemOne data={mealsdetails} />
                  <MealsListItemTwo data={mealsdetails} />
                  <MealsListItemThree data={mealsdetails} />
                  {/* </ul> */}
                </UnorderedListTag>
                {/* </div> */}
              </DivMealContentTag>
              ){/* </div>   */}
            </DivMealTag>
          </>
        );
      })}
    </>
  );
}
export default MealTypes;
