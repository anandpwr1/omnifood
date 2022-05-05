import "../Atoms/mealsImageCheck.css";
import styled from "styled-components";

const ImageTag = styled.img`

  width: 100%;
`;

function MealsImageCheck({ data }) {
  return (<>
    {data.imgCheck ? (
      <ImageTag
        src="img/meals/meal-1.jpg"
        // className="meal-img"
        alt="Japanese Gyozas"
      />
    ) : (
      <ImageTag
        src="img/meals/meal-2.jpg"
        // className="meal-img"
        alt="Japanese Gyozas"
      />
    )} </>);
}
export default MealsImageCheck;