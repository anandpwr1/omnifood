// import "../Atoms/mealHeadingTertiary.css";

import styled from "styled-components";

const HeadingThreeTag = styled.h3`
  text-align: center;

  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 3.2rem;
  font-weight: 700;
  color: #333;
  /* color: #45260a; */
  /* color: #343a40; */
  letter-spacing: -0.5px;
  // text-align:left;

  @media (max-width: 75em) {
    font-size: 2.4rem;
  }
`;

function MealHeadingTertiary({ data }) {
  return (
    <HeadingThreeTag> 
      {data.headingTertiary}
  
    </HeadingThreeTag>
    // <h3 className="heading-tertiary">{data.headingTertiary}</h3>
  );
}
export default MealHeadingTertiary;
