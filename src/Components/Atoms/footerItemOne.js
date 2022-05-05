import "../Atoms/footerItem.css";
import styled from "styled-components";
const AnchorTag = styled.a`
font-size: 1.6rem;
color: #555;

  .&:link,
  .&:visited {
    text-decoration: none;
    font-size: 1.6rem;
    color: #767676;
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: #555;
  }
`;

function ItemOne({ data }) {
  return (
    <>
      <li>
                <AnchorTag href={data.href}>

        {/* <a className="footer-link" href={data.href}> */}
          {data.itemOne}
          {/* </a> */}
          </AnchorTag>
      </li>
    </>
  );
}
export default ItemOne;
