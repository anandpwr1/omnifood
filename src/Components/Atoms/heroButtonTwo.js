import { hero } from "../../content/hero";
// import "../Atoms/heroButton.css";

import styled from "styled-components";
const AnchorTag = styled.a`
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

  background-color: #fff;
  color: #555;

  background-color: #fdf2e9;

  /* border: 3px solid #fff; */

  /* Trick to add border inside */
  box-shadow: inset 0 0 0 3px #fff;

  background-color: #e67e22;
  color: #fff;

  background-color: #aaa; //background color of button

  @media (max-width: 34em) {
    padding: 2.4rem 1.6rem;
  }
`;
function HeroButtonTwo() {
  return (
    <>
      <AnchorTag href={`#${hero.href}`}>
        {/* <a href="#how" className="btn btn--outline"> */}
        {hero.buttonValue2}&darr;
      </AnchorTag>
    </>
  );
}
export default HeroButtonTwo;
