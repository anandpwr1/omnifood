import { hero } from "../../content/hero";
// import "../Atoms/heroImage.css";

import styled from "styled-components";
const ImageTag = styled.img`
  width: 100%;

  @media (max-width: 59em) {
    width: 60%;
  }
  @media (max-width: 34em) {
    width: 80%;
  }
`;

function HeroImage() {
  return (
    <>
      <picture>
        {hero.pictureContent.map((picCont) => {
          return (
            <div>
              <source srcset={picCont.first.srcset} type={picCont.first.type} />
              <source
                srcset={picCont.second.srcset}
                type={picCont.second.type}
              />
              <ImageTag src={picCont.src} className="hero-img" alt={picCont.alt} />
            </div>
          );
        })}
      </picture>
    </>
  );
}
export default HeroImage;
