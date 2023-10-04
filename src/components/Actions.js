import React from "react";

import { StepHandler } from "../PageContext";

const Actions = ({ mobile }) => {
  const step = StepHandler().step;
  const nextStep = StepHandler().nextStepHandler;
  const prevStep = StepHandler().prevStepHandler;

  return (
    <div className={mobile ? "mobile-btn-wrapper" : "btn-wrapper"}>
      <button href="/#" onClick={prevStep} className="basic-btn arrow-left">
        Back
      </button>

      {step !== 4 && (
        <button onClick={nextStep} className="button">
          Next step
        </button>
      )}

      {step === 4 && <button className="button confirm">Confirm</button>}
    </div>
  );
};

export default Actions;
