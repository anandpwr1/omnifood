// import "../Atoms/howItWorksImage.css";
import styled from "styled-components";
import HowItWorkGrid from '../Molecules/howItWorkGrid';

const DivImgBoxTag = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before,
  &:after{
  content: "";
  display: block;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
  &:before {
  width: 60%;
  /* height: 60%; */

  /* 60% of parent's width */
  padding-bottom: 60%;

  background-color: #fdf2e9;
  z-index: -2;}

&:after {
  width: 45%;
  padding-bottom: 45%;
  background-color: #fae5d3;
  z-index: -1;
}

  @media (max-width: 34em) {
    &:nth-child(2){
    grid-row: 1;
    }
    &:nth-child(6){
    grid-row: 5;
    }

    transform: translateY(2.4rem);
  }
`;
const ImageTag = styled.img`
  width: 35%;
`;
function HowItWorksImage({ data}){
  return (
    <>
      <DivImgBoxTag>
        {/* <div className="step-img-box"> */}
        <ImageTag src={data.src} alt={data.alt} />
        {/* <img src={data.src} className="step-img" alt={data.alt} /> */}
      </DivImgBoxTag>
      {/* </div> */}
    </>
  );
}

export default HowItWorksImage;
