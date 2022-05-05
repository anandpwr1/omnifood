import styled from "styled-components";
import { useState } from "react";
// import useWindowSize from "../../utils/media-selector";

import { hero } from "../../content/hero";
import { hover } from "@testing-library/user-event/dist/hover";
// import "../Atoms/heroButton.css";
// const contaier = styled.div`
// clour: ${(p) => {
//   if (2 > 3) {
    
//   }
// }}
// `;

const AchorButton = styled.a`
  display: inline-block;

  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  padding: 1.6rem 3.2rem;
  border-radius: 9px;

  /* Only necessary for .btn */
  border: none;
  cursor: pointer;
  font-family: inherit;

  /* Put transition on original "state" */
  /* transition: background-color 0.3s; */
  transition: all 0.3s;
  background-color:  ${(hoverState) => {
  if (hoverState)
  {
    return "black";
  }
  else {
    return "red";
  }
  }};
  //  #e67e22;
  color: #fff;
  margin-right: 4.6rem !important;

  color: white;


`;

function HeroButtonOne() {
  const [hoverState, setHoverState] = useState(false);

  return (
    <>
      <AchorButton
        hoverState={hoverState}
        href={`#${hero.href}`}>
        {hero.buttonValue1}
      </AchorButton>
    </>
  );
}
export default HeroButtonOne;


// const contaier = styled.div`
//   clour: ${(p) => {
//     if (2 > 3) {
//     }
//   }};
// `;

// const AchorButton = styled.a`
//   display: inline-block;

//   text-decoration: none;
//   font-size: 2rem;
//   font-weight: 600;
//   padding: 1.6rem 3.2rem;
//   border-radius: 9px;

//   /* Only necessary for .btn */
//   border: none;
//   cursor: pointer;
//   font-family: inherit;

//   /* Put transition on original "state" */
//   /* transition: background-color 0.3s; */
//   transition: all 0.3s;
//   background-color: ${({ hoverState, size }) => {
//     if (hoverState) {
//       if (size === "SM") {
//         return "blue";
//       }
//       return "orange";
//     } else {
//       return "black";
//     }
//   }}};
//   color: #fff;
//   margin-right: 1.6rem !important;

//   clour: ${({ size }) => {
//     if (size === "SM") return "120px";
//     return null;
//   }}
// ;
// `;
// function HeroButtonOne(props) {
//   console.log(props);
//   return null;
//   const [hoverState, setHoverState] = useState(false);
//   const size = useWindowSize();
//   console.log("=====> ", size);
//   return (
//     <>
//       <AchorButton
//         href={`#${hero.href}`}
//         onClick={() => setHoverState(!hoverState)}
//         hoverState={hoverState}
//         size={size}
//       >
//         {hero.buttonValue1}
//       </AchorButton>
//     </>
//   );
// }


// function test() { }
// () => { 
//   return 
// }
// (p) => {
//   const { hoverState, size } = p;
// }
//   ({ hoverState, size }) => ()
// p = { hoverState, size }
 
// a(['a', 'b'], {name: "ajay", age: 30})
// const a = (p,q) => {
//   const {name, age} = q
// }