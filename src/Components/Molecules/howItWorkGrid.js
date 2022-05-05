import { howItWorks } from "../../content/howItWorks";
import HowItWorksDescription from "../Atoms/howItWorksDescription";
import HowItWorksImage from "../Atoms/howItWorksImage";



function HowItWorkGrid() {
  return (
    <>
      {howItWorks.steps.map((howIt) => {
        return (
          <>
            {howIt.stepNumber == "02" ? (
              <>
                {/* Image first  */}
                <HowItWorksImage data={howIt} />

                {/* Description Second */}
                <HowItWorksDescription data={howIt} />
              </>
            ) : (
              <>
                {/* Description First */}
                <HowItWorksDescription data={howIt} />

                {/* Image Second */}
                <HowItWorksImage data={howIt} />
              </>
            )}
          </>
        );
      })}
    </>
  );
}
export default HowItWorkGrid;