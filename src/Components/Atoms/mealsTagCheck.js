import "../Atoms/mealsTagCheck.css";

import styled from "styled-components";

const SpanTag = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #333;
  border-radius: 100px;
  font-weight: 600;

  background-color: #51cf66;

  background-color: #ffd43b;
`;
function MealsTagCheck({data}){
  return (
    <>
      <SpanTag>{data.tag}</SpanTag>
      {/* <span className="tag tag--vegetarian">{data.tag}</span> */}

      {data.tagCheck ? (
        <SpanTag>{data.tagTwo}</SpanTag>
        // <span className="tag tag--paleo">{data.tagTwo}</span>
        
      ) : (
        <></>
      )}
    </>
  );
}

export default MealsTagCheck;