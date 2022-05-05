import FooterColumnOne from "../Molecules/footerColumnOne";
import FooterColumnThree from "../Molecules/footerColumnsThree";
import FooterColumnTwo from "../Molecules/footerColumnTwo";
// import "../Organisms/footer.css";

import styled from "styled-components";

const FooterTag = styled.footer`
  padding: 12.8rem 0;
  border-top: 1px solid #eee;
`;

const DivFooterTag = styled.div`
    max-width: 120rem;
    padding: 0 3.2rem;
    margin: 0 auto;

    display: grid;
    column-gap: 6.4rem;
    row-gap: 4.8rem;

    grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;
    margin-right: 6.4rem;

    margin-bottom: 2.4rem;

  @media (max-width: 44em) {
      grid-template-columns: repeat(6, 1fr);
  }
`;


function Footer({ footer }) {
  return (
    <FooterTag>
      {/* // <footer className="footer"> */}
      <DivFooterTag>
      {/* <div className="container grid grid--footer"> */}
        {/* Column 1 */}
        <FooterColumnOne data={footer.socialLinks} />

        {/* Column 2 */}
        <FooterColumnTwo contactUs={footer.contactUs} />

        {/* Column 3, 4 and 5 */}
        <FooterColumnThree footerData={footer.footerDetails} />
      {/* </div> */}
      </DivFooterTag>
    {/* </footer> */}
    </FooterTag>
  );
}
export default Footer;
