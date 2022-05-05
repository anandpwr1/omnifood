import FooterColumnThreeHeading from "../Atoms/footerColumnThreeHeading";
import ItemFour from "../Atoms/footerItemFour";
import ItemOne from "../Atoms/footerItemOne";
import ItemThree from "../Atoms/footerItemThree";
import ItemTwo from "../Atoms/footerItemTwo";

// import "../Molecules/footerColumnsThree.css";

import styled from "styled-components";
const NavTag = styled.nav`
  @media (max-width: 44em) {
      grid-row: 1;
      grid-column: span 2;
      margin-bottom: 3.2rem;
  }
`;
const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

    margin-bottom: 2.4rem;
`;


function FooterColumnThree({ footerData }) {
  return (
    <>
     
      {footerData.map((footDetail) => {
        return (
          <>
            <NavTag>
              {/* <nav className="nav-col"> */}
              {/* column Heading */}
              <FooterColumnThreeHeading data={footDetail} />

              <UnorderedList>
                {/* <ul className="footer-nav"> */}
                  {/* Item One Text */}
                  <ItemOne data={footDetail} />
                  {/* Item Two text */}
                  <ItemTwo data={footDetail} />
                  {/* Item Three Text */}
                  <ItemThree data={footDetail} />
                  {/* Item Four text */}
                  <ItemFour data={footDetail} />
                {/* </ul> */}
              </UnorderedList>
              {/* </nav> */}
            </NavTag>
          </>
        );
      }
      )}
    </>);
}
export default FooterColumnThree;