// import "../Atoms/mealsTitle.css";

import styled from "styled-components";

const ParaTag = styled.p`
text-align: left;
  font-size: 2.4rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 3.2rem;
`;


function MealsTitle({ data }) {
  return (
    <ParaTag>{data.mealTitle}</ParaTag>
      // <p className="meal-title"> {data.mealTitle}</p>
   
  );
}
export default MealsTitle;