import "../Atoms/pricingContainerIcons.css";

function PricingContainerIcons({ data }) {
  return (<>
    <ion-icon className="feature-icon" name={data.name}></ion-icon>
  </>);
}
export default PricingContainerIcons;