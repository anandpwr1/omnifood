import PricingContainerIcons from "../Atoms/pricingContainerIcons";
import PricingFeatureText from "../Atoms/pricingFeatureText";
import PricingFeatureTitle from "../Atoms/pricingFeatureTitle";

/////Create feature styed component here 

function PricingContainer({pricing}){
  return (
    <>
      {pricing.container.map((contains) => {
        return (
          <>
            <div className="feature">
              <PricingContainerIcons data={contains}/>
              <PricingFeatureTitle data={contains}/>
             <PricingFeatureText data={contains}/>
            </div>
          </>
        );
      })}
    </>
  );
}
export default PricingContainer;