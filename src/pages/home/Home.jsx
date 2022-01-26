import Chart from "../../Components/Chart/Chart";
import Featuredinfo from "../../Components/Featuredinfo/Featuredinfo";
import "./home.css";
import { userData } from "../../dummyData";
const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart data={userData} title="User Analytics" grid dataKey='Active User'/>
    </div>
  );
};

export default Home;
