function HowItWorkText(props) {
  return (
    <>
      <div className="step-text-box">
        <p className="step-number">{props.howIt.stepDescription}</p>
        <h3 className="heading-tertiary">{props.howIt.headingTertiary}</h3>
        <p className="step-description">{props.howIt.stepDescription}</p>
      </div>
    </>
  );
}
export default HowItWorkText;