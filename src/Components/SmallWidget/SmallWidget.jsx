import "./smallwidget.css";
import { Visibility } from "@material-ui/icons";

const SmallWidget = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New join members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hadi Bi</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widegtSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hadi Bi</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widegtSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hadi Bi</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widegtSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hadi Bi</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widegtSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hadi Bi</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widegtSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SmallWidget;
