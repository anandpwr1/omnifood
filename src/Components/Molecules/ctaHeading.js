import CtaHeadingText from "../Atoms/ctaHeadingText";
import CtaSecHeading from "../Atoms/ctaSecHeading";

function CtaHeading({data}){
  return (<>
    <CtaSecHeading data={data}/>
    <CtaHeadingText data={data}/>
  </>)
}

export default CtaHeading;