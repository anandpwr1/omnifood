// import "../Atoms/mealsSeeRecepie.css";

import styled from "styled-components";

const AnchorTag = styled.a`
  &:link,
  &:visited {
    display: inline-block;
    color: #e67e22;
    text-decoration: none;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: #cf711f;
    border-bottom: 1px solid transparent;
  }
`;
function MealsSeeRecepie({ data }) {
  return (
    <>
      <AnchorTag>
      {/* <a href="#" className="link"> */}
        {data.seeRecepie} &rarr;
      {/* // </a> */}
      </AnchorTag>
    </>
  );
}
export default MealsSeeRecepie;