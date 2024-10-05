import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          position: "relative",
          top: "-5vh",
          height: "0vh",
          zIndex: 100,

        }}
      >
        <Link to ="/Story/journey/Co2">
        <Button variant="contained" color="" style={{ color: '#0f4a2c' }}>Carbon DiOxide</Button>
        </Link>
        <Link to="/Story/journey/Ch4">
        <Button variant="contained" color="" style={{ color: '#0f4a2c' }}>Methane</Button>
        </Link>
        <Link to="/Story/journey/N2o">
        <Button variant="contained" color="" style={{ color: '#0f4a2c' }}>Nitrus Oxide</Button>
        </Link>
        <Link to="/Story/journey/Ozone">
        <Button variant="contained" color="" style={{ color: '#0f4a2c' }}>Ozone</Button>
        </Link>
      </div>
  );
};

export default Sidebar;
