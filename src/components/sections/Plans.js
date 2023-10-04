import advance from "../../assets/img/icon-advanced.svg";
import arcade from "../../assets/img/icon-arcade.svg";
import pro from "../../assets/img/icon-pro.svg";
import Actions from "../Actions";

const Plans = () => {
  return (
    <div className="content-wrapper">
      <div className="mb-6">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="plans">
        <div className="item active">
          <img src={arcade} alt="" />
          <div>
            <h4>Arcade</h4>
            <span>$9/Mo</span>
          </div>
        </div>
        <div className="item">
          <img src={advance} alt="" />
          <div>
            <h4>Arcade</h4>
            <span>$12/Mo</span>
          </div>
        </div>
        <div className="item">
          <img src={pro} alt="" />
          <div>
            <h4>Arcade</h4>
            <span>$15/Mo</span>
          </div>
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

export default Plans;
