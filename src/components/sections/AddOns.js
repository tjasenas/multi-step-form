import React from "react";
import Actions from "../Actions";

const AddOns = () => {
  return (
    <div className="content-wrapper">
      <div class="mb-6">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="plans">
        <div className="item">
          <input type="checkbox" />
          <div className="description">
            <h4>Online service</h4>
            <p>Access to multiplayer games</p>
          </div>
          <span>+$1/mo</span>
        </div>
        <div className="item">
          <input type="checkbox" />
          <div className="description">
            <h4>Larger storage </h4>
            <p>Extra 1TB of cloud save</p>
          </div>
          <span>+$2/mo</span>
        </div>
        <div className="item">
          <input type="checkbox" />
          <div className="description">
            <h4>Customizable profit </h4>
            <p>Custom theme on your profile</p>
          </div>
          <span>+$2/mo</span>
        </div>
      </div>
      <div className="toggle-plan">
        <div className="option-btn active">Monthly</div>
        <div className="switcher right"></div>
        <div className="option-btn">Yearly</div>
      </div>

      <Actions />
    </div>
  );
};

export default AddOns;
