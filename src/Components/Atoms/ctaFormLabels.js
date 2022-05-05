function CtaFormLabels({data}){
  return (
    <>
      <label for={data.for}>{data.forText}</label>
    </>
  );
}
export default CtaFormLabels;