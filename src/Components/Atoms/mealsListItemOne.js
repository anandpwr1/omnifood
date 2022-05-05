import "../Atoms/mealsListItemIcon.css";
// import "../Atoms/mealAttribute.css";

import styled from "styled-components";

const ListTag = styled.li`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;


function MealsListItemOne({ data }) {
  return (
    <>
      <ListTag>
      {/* <li className="meal-attribute"> */}
        <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
        <span>
          <strong>{data.noOfCalories}</strong> {data.calories}
        </span>
      {/* </li> */}
      </ListTag>
      
    </>
  );
}
export default MealsListItemOne;