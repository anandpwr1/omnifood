import { meals } from "../../content/meals";
// import "../Atoms/mealsSubHeading.css";
import styled from "styled-components";

const SpanTag = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  color: #cf711f;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
`;

function MealsSubHeading() {
  return (
    <>
      <SpanTag>
        {meals.subheading}
        {/* <span className="subheading">{meals.subheading}</span> */}
      </SpanTag>
    </>
  );
}
export default MealsSubHeading;