import { useState } from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import './App.css';
import jsonData from './components/Charts/data.json';

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [linearData, setLineardata] = useState(jsonData['january']);
  const [barData, setBardata] = useState();
  const [groupData, setGroupdata] = useState();
  const [accoutData, setAccountdata] = useState();

  return (
    <div className="main">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="container">
        <NavBar
          activeTab={activeTab}
          setLineardata={setLineardata}
          setBardata={setBardata}
          setGroupdata={setGroupdata}
          setAccountdata={setAccountdata}
        />
        <Content
          linearData={linearData}
          barData={barData}
          groupData={groupData}
          accoutData={accoutData}
        />
      </div>
    </div>
  );
}

export default App
