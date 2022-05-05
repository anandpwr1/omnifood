function CtaInputFields({data}){
  return (
    <>
      <input
        id={data.id}
        type={data.type}
        placeholder={data.placeholder}
        name={data.name}
        required
      />
    </>
  );
}
export default CtaInputFields;