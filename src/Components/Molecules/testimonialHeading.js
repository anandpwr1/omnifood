import TestimonialSecHeading from "../Atoms/testimonialSecHeading";
import TestimonialSubHeading from "../Atoms/testimonialSubHeading";

function TestimonialHeading({data}) {
  return (<>{/* Subheading */}
    <TestimonialSubHeading data={data}/>
    {/* Secondary Heading */}
    <TestimonialSecHeading data={data} />
    </>
 );
}

export default TestimonialHeading;