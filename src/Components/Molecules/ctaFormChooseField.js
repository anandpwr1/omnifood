import CtaFormSelection from "../Atoms/ctaFormSelection";

function CtaFormChooseField({selectLabel}){
  return (
    <>
      <select id={selectLabel.id} name={selectLabel.name} required>
        {selectLabel.valueSelect.map((selectValue) => {
          return (
            //Choose Option
            <CtaFormSelection selectValue={selectValue}/>
          );
        })}
        
      </select>
    </>
  );
}
export default CtaFormChooseField;