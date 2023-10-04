import React from "react";
import { StepHandler } from "../PageContext";

const StepsBar = ({ mobile }) => {
  const step = StepHandler().step;
  const navigateToStep = StepHandler().navigateToStep;

  return (
    <div className={mobile ? "mobile-steps" : "steps-wrapper"}>
      <ul className="steps-navi">
        <li className={step === 1 ? "active" : ""}>
          <a href="/#" onClick={(e) => navigateToStep(e, 1)}>
            <div className="step-nr">1</div>
            <div className="step-text">
              <span>Step 1</span>
              <p>Presonal Info</p>
            </div>
          </a>
        </li>
        <li className={step === 2 ? "active" : ""}>
          <a href="/#" onClick={(e) => navigateToStep(e, 2)}>
            <div className="step-nr">2</div>
            <div className="step-text">
              <span>Step 2</span>
              <p>Select Plan</p>
            </div>
          </a>
        </li>
        <li className={step === 3 ? "active" : ""}>
          <a href="/#" onClick={(e) => navigateToStep(e, 3)}>
            <div className="step-nr">3</div>
            <div className="step-text">
              <span>Step 3</span>
              <p>Add-Ons</p>
            </div>
          </a>
        </li>
        <li className={step === 4 ? "active" : ""}>
          <a href="/#" onClick={(e) => navigateToStep(e, 4)}>
            <div className="step-nr">4</div>
            <div className="step-text">
              <span>Step 4</span>
              <p>Summery</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StepsBar;
