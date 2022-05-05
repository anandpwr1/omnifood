import "../Atoms/mealsListItemIcon.css";
import styled from "styled-components";

const ListTag = styled.li`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

function MealsListItemTwo({ data }) {
  return (
    <>
      <ListTag>
        {/* <li className="meal-attribute"> */}
        <ion-icon className="meal-icon" name="restaurant-outline"></ion-icon>
        <span>
          {data.nutriScore} &reg; <strong>{data.nutriScoreValue}</strong>
        </span>
        {/* </li>*/}
      </ListTag>
    </>
  );
}
export default MealsListItemTwo;
