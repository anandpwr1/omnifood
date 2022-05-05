import "../Atoms/mealsListColumnThird.css";

import styled from "styled-components";

const ListTag = styled.li`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  line-height: 1.2;
  margin-bottom: 1.6rem;
`;

function MealsListColumnThird({ data }) {
  return (
    <>
      <ListTag>
      {/* <li className="list-item"> */}
        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
        <span>{data.itemList}</span>
      {/* </li> */}
      </ListTag>
    </>
  );
}
export default MealsListColumnThird;