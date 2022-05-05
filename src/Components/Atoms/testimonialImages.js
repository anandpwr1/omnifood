import "../Atoms/testimonialImages.css";

import styled from "styled-components";

const ImageTag = styled.img`
  width: 6.4rem;
  border-radius: 50%;
  margin-bottom: 1.2rem;
`;
function TestimonialImages({ data }) {
  return (
    <>
      <ImageTag alt={data.alt} src={data.src} />
      {/* <img className="testimonial-img" alt={data.alt} src={data.src} /> */}
    </>
  );
}
export default TestimonialImages;