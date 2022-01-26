import TopBar from "./Components/TopBar/TopBar";
import "./app.css";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar/>
        <div className="others">Others</div>
      </div>
    </div>
  );
}

export default App;
