import MobileActions from "./Actions";
import StepsBar from "./StepsBar";
import AddOns from "./sections/AddOns";
import PersonalInfo from "./sections/PersonalInfo";
import Plans from "./sections/Plans";
import Summery from "./sections/Summery";

import { StepHandler } from "../PageContext";

function Content() {
  const step = StepHandler().step;

  return (
    <>
      <StepsBar mobile="true" />
      <div className="container">
        <div className="wrapper">
          <StepsBar />
          {step === 1 && <PersonalInfo />}
          {step === 2 && <Plans />}
          {step === 3 && <AddOns />}
          {step === 4 && <Summery />}
        </div>
      </div>
      <MobileActions mobile="true" />
    </>
  );
}

export default Content;
