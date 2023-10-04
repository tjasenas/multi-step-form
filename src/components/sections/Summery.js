import React from "react";
import Actions from "../Actions";

const Summery = () => {
  return (
    <div className="content-wrapper">
      <div class="mb-6">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>

      <div className="summery">
        <div className="summery-row">
          <div>
            <h4>Arcade(Monthly) </h4>
            {/* <a href="#">Change</a> */}
          </div>
          <span>$9/Mon</span>
        </div>
        <div className="summery-row">
          <div>Online service </div>
          <span>$9/Mon</span>
        </div>
        <div className="summery-row">
          <div>Larger storage</div>
          <span>$9/Mon</span>
        </div>
      </div>
      <div className="total-row ">
        <span>Total(per months)</span>
        <strong>+$12/mo</strong>
      </div>
      <Actions />
    </div>
  );
};

export default Summery;
