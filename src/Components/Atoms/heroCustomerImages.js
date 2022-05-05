import { hero } from "../../content/hero";

import styled from "styled-components"
const ImageTag = styled.img`
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 50%;
  margin-right: -1.6rem;
  border: 3px solid #fdf2e9;


  /// Solve This
  &:last-child {
    margin: 0;
  }
`;
function HeroCustomerImages() {
  return (
    <>
      {hero.customerImages.map((customerImages) => (
        <ImageTag src={customerImages.src} alt={customerImages.alt} />
      ))}
    </>
  );
}
export default HeroCustomerImages;