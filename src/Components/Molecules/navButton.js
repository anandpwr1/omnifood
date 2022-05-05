import './navButton.css';

import styled from "styled-components";

const AnchorTag = styled.a`

&:link,
&:visited{
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.8rem;
  transition: all 0.3s;
   padding: 1.2rem 2.4rem;
  border-radius: 9px;
  color: #fff;
  background-color: #e67e22;
  // #fdf2e9
  
}
&: hover,
&: active{
  color: #cf711f;
  background-color: 
  // #fff;
 }}`;

function Navbutton(props) {
  return (
    <>
      <li>
        <AnchorTag href={`#${props.data.href}`}>
          {props.data.value}

          {/* <a
          className={`main-nav-link ${props.data.isCTA ? "nav-cta" : ""}`}
          href={`#${props.data.href}`} >
            {props.data.value}
            </a> */}
        </AnchorTag>
      </li>
    </>
  );
}

export default Navbutton;
