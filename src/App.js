import TopBar from "./Components/TopBar/TopBar";
import "./app.css";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
