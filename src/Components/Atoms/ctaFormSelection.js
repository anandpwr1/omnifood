function CtaFormSelection({selectValue}) {
  return (
    <>
      <option value={selectValue.value}>{selectValue.valueText}</option>
    </>
  );
}
export default  CtaFormSelection