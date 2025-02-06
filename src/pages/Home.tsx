import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">MULTIPURPOSE APP</h1>
      <div className="components-container">
        <div className="component-card">
            <h3>COUNTER</h3>
        <Link to="/counter"><ArrowCircleRightIcon sx={{fontSize:60}} /></Link>
        </div>
        <div className="component-card">
        <h3>USER FORM</h3>
        <Link to="/form"><ArrowCircleRightIcon sx={{fontSize:60}}/></Link>
        </div>
        <div className="component-card">
        <h3>RICH TEXT EDITOR</h3>
        <Link to="/editor"><ArrowCircleRightIcon sx={{fontSize:60}}/></Link>
        </div>
        <div className="component-card">
        <h3>DASHBOARD</h3>
        <Link to="/dashboard"><ArrowCircleRightIcon sx={{fontSize:60}}/></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;