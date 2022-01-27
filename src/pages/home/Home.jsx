import Chart from "../../Components/Chart/Chart";
import Featuredinfo from "../../Components/Featuredinfo/Featuredinfo";
import "./home.css";
import { userData } from "../../dummyData";
import SmallWidget from "../../Components/SmallWidget/SmallWidget";
import LargeWidget from "../../Components/LargeWidget/LargeWidget";
const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  );
};

export default Home;
