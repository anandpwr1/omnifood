function HowItWorkImages(props) {
  return (
    <>
      <div className="step-img-box">
        <img src={props.howIt.src} className="step-img" alt={props.howIt.alt} />
      </div>
    </>
  );
}
export default HowItWorkImages;