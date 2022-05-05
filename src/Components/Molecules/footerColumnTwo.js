import FooterAddress from "../Atoms/footerAddress";
import FooterColumnTwoHeading from "../Atoms/footercolumnTwoHeading";
import FooterEmail from "../Atoms/footerEmail";
import FooterPhoneNumber from "../Atoms/footerPhoneNumber";

// import "../Molecules/footerColumnTwo.css";

import styled from "styled-components";
const DivAddressColumnTag = styled.div`
  grid-column: 0;

  @media (max-width: 44em) {
    grid-column: span 3;
  }
`;
const AddressTag = styled.address`
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.6;
`;

function FooterColumnTwo({ contactUs }) {
  return (
    <>
      <DivAddressColumnTag>
        {/* <div className="address-col"> */}
          {contactUs.map((contact) => {
            return (
              <>
                {/* Column 2 Heading */}
                <FooterColumnTwoHeading data={contact} />
                {/* Address */}
                <AddressTag>
                  {/* <address className="contacts"> */}
                    <FooterAddress data={contact} />
                    {/* Contact Phone Number */}
                    <p>
                      <FooterPhoneNumber data={contact} />
                      <br />
                      {/* Contact Email */}
                      <FooterEmail data={contact} />
                    </p>
                  {/* </address> */}
                </AddressTag>
              </>
            );
          })}
        {/* </div> */}
      </DivAddressColumnTag>
    </>
  );
}
export default FooterColumnTwo;
