import "../Atoms/mealsListItemIcon.css";

import styled from "styled-components";

const ListTag = styled.li`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

function MealsListItemThree({ data }) {
  return (
    <>
      <ListTag>
        {/* <li className="meal-attribute"> */}
          <ion-icon className="meal-icon" name="star-outline"></ion-icon>
          <span>
            <strong>{data.rating}</strong> {data.ratingName}
          </span>
        {/* </li> */}
      </ListTag>
    </>
  );
}
export default MealsListItemThree;
