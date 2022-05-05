import Icons from "../Atoms/icons";
import "../Molecules/social-icons.css";
import styled from "styled-components";

const UnorderedListTag = styled.ul`

  list-style: none;
  display: flex;
  gap: 2.4rem;
`;
const AnchorTag = styled.a`
  &:link,
  &:visited {
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

function SocialIcons({ data }) {
  return(
  <UnorderedListTag>
    {/* <ul className="social-links"> */}
    {data.map((d) => (
      <li>
        <AnchorTag href={d.href}>
          {/* <a className="footer-link" href={d.href}> */}
            <Icons name={d.name} />
          {/* </a> */}
        </AnchorTag>
      </li>
    ))}
    {/* </ul> */}
  </UnorderedListTag>);
}

export default SocialIcons;
