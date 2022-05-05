import { featuredIn } from "../../content/featuredIn";
// import "../Atoms/featuredInText.css"

import styled from "styled-components";

const HeadingTwoTag = styled.h2`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2.4rem;
  color: #888;
`;
function FeaturedInImages() {
  return (<>
    
    <HeadingTwoTag>
    {/* <h2 className="heading-featured-in"> */}
      {featuredIn.headingFeaturedIn}
    </HeadingTwoTag>
  </>);
}

export default FeaturedInImages;