import PricingSecHeading from "../Atoms/pricingSecHeading";
import PricingSubHeading from "../Atoms/pricingSubHeading";

function PricingHeading({data}) {
  return (
    <>
      {/* Subheading */}
      <PricingSubHeading data={data}/>
      {/* Secondary Heading */}
      <PricingSecHeading data={data}/>
    </>
  );
}
export default PricingHeading;