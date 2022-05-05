import { featuredIn } from "../../content/featuredIn";

function FeaturedInText() {
  return (<>
       {featuredIn.logoImage.map((logoImg) => {
          return(
            <img src={logoImg.src} alt={logoImg.alt} />);
          })}
  </>);
}

export default FeaturedInText;