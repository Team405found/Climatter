import React, { useState } from "react";
import { Link } from "react-router-dom";
import { map } from "../constants";
import "../components/design/design/Map.css";

const GameMap = () => {
  const [hoveredTitle, setHoveredTitle] = useState(""); // State to track the hovered title

  return (
    <div className="game-container">
      <div className="map-wrapper">
        <div className="title-box">
          {/* Only display the title of the hovered card */}
          {hoveredTitle && <h3 className="title">{hoveredTitle}</h3>}
        </div>
        <div className="card_container">
          {map.map((item) => (
            <div
              className="expandable-card"
              key={item.id}
              onMouseEnter={() => setHoveredTitle(item.title)} // Set the hovered title on mouse enter
              onMouseLeave={() => setHoveredTitle("")} // Clear the title on mouse leave
            >
              <Link to={item.url}>
                <img src={item.imageUrl} alt={item.title} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameMap;
