import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
const Featuredinfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$14,000</span>
          <span className="featuredMoneyRate">
            -$8,000 <ArrowDownward className="featuredIcon negative"  />
          </span>
        </div>
        <span className="featuredsub"> Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Slaes</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$10,000</span>
          <span className="featuredMoneyRate">
            -$5,000 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredsub"> Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5,000</span>
          <span className="featuredMoneyRate">
            $3,000 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredsub"> Compared to last month</span>
      </div>
    </div>
  );
};

export default Featuredinfo;
