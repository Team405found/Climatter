import React, { useState, useEffect, useRef } from 'react'
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import '../style/Animation.css';
import Cyclone from '../resources/Animation/Cyclone.jpg';
import Drought from '../resources/Animation/Drought.jpg';
import Flood from '../resources/Animation/flood2.jpg';
import BengalTiger from '../resources/Animation/bengal_tiger.jpg';
import Seal from '../resources/Animation/seals.jpg';
import RisingSeaLevel from '../resources/Animation/Rising_Sea_Level.jpg';
import BioDiver from '../resources/Animation/bio_diver.jpg'
import WorkT from '../resources/Animation/Work_together.jpg'
import Refugees from '../resources/Animation/Refugee_camp.jpg'
import Hazard from '../resources/Animation/Hazard.jpg'
const images = [
    { url: Cyclone, name: 'Increased cyclones', description: 'The frequency and intensity of cyclones have increased as a direct consequence of climate change, driven by rising sea surface temperatures and atmospheric instability. Warmer oceans fuel stronger storms, leading to more devastating cyclones with greater impacts on coastal communities.' },
    { url: Drought, name: 'Droughts', description: 'The increase in droughts due to climate change is caused by higher global temperatures and altered precipitation patterns, leading to prolonged dry spells. These intensified droughts deplete water resources, harm agriculture, and increase the risk of wildfires.' },
    { url: Flood, name: 'Floods', description: 'The increase in floods due to climate change is fueled by rising sea levels and more intense rainfall, overwhelming natural drainage systems. These frequent and severe floods damage infrastructure, displace communities, and disrupt ecosystems.' },
    { url: RisingSeaLevel, name: 'Rising sea level', description: 'Climate change accelerates rising sea levels through the melting of polar ice and the thermal expansion of seawater as it warms. This rise threatens coastal cities, erodes shorelines, and increases the risk of flooding in low-lying regions.' },
    { url: BioDiver, name: 'Impact on Biodiversity', description: 'Climate change disrupts ecosystems, altering habitats and threatening biodiversity by pushing species toward extinction. Shifts in temperature and weather patterns force many plants and animals to migrate or adapt, leading to the loss of delicate ecological balances.' },
    { url: BengalTiger, name: 'Royal Bengal Tiger', description: 'The majestic Royal Bengal Tiger, symbol of strength and beauty, roams the dense forests and mangroves, but its future hangs in the balance. As climate change erodes its habitat and brings rising seas and shrinking prey, this regal predator faces a slow march toward extinction.' },
    { url: Seal, name: 'Harp Seal', description: 'The Harp seal, with its pristine white pups resting on Arctic ice, is a symbol of beauty in the frozen wilderness. Yet as climate change melts their icy habitat, these enchanting creatures face a precarious future, struggling to survive in a vanishing world.' },
    { url: Refugees, name: 'Climate refugees', description: 'Climate refugees are individuals forced to leave their homes due to the impacts of climate change, such as rising sea levels, extreme weather, or droughts. Their displacement highlights the urgent need for global action to address the human cost of environmental degradation.' },
    { url: Hazard, name: 'Health hazards', description: 'Climate change increases health hazards by intensifying heatwaves, spreading diseases, and worsening air pollution. These impacts lead to respiratory problems, heat-related illnesses, and the spread of vector-borne diseases like malaria and dengue.' },
    { url: WorkT, name: 'Let\'s work together...', description: 'By uniting our efforts, we can reduce the impact of climate change through sustainable choices, innovation, and global cooperation. Together, we hold the power to protect our planet for future generations and create a more resilient world.' },
  ];

const Animation = () => {
  const [items, setItems] = useState(images);
  // const timeRunning = 15000;
  const timeAutoNext = 7000;

  const carouselRef = useRef(null);
  const runningTimeRef = useRef(null);

  // let runNextAuto, runTimeOut;
  let runNextAuto = null;

  const resetTimeAnimation = () => {
    const runningTime = runningTimeRef.current;
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; // Trigger reflow
    runningTime.style.animation = 'runningTime 7s linear 1 forwards';
  };

  const showSlider = (type) => {
    const newItems = [...items];
    if (type === 'next') {
      newItems.push(newItems.shift()); // Move the first item to the end
    } else {
      newItems.unshift(newItems.pop()); // Move the last item to the start
    }
    setItems(newItems);

    // Clear timeout for resetting the class
    // clearTimeout(runTimeOut);
    // runTimeOut = setTimeout(() => {
    //   carouselRef.current.classList.remove('next', 'prev');
    // }, timeRunning);

    // // Reset auto-next timeout
    // clearTimeout(runNextAuto);
    // runNextAuto = setTimeout(() => {
    //   showSlider('next');
    // }, timeAutoNext);

    resetTimeAnimation(); // Reset running time animation
  };

  useEffect(() => {
    // Set auto-slide interval
    // runNextAuto = setTimeout(() => {
    //   showSlider('next');
    // }, timeAutoNext);
    const autoSlide = () => {
      showSlider('next');
    };
    runNextAuto = setTimeout(autoSlide, timeAutoNext);

    // Start the animation
    resetTimeAnimation();

    return () => {
      clearTimeout(runNextAuto); // Cleanup timeouts
      // clearTimeout(runTimeOut);
    };
  }, [items]);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list">
        {items.map((item, index) => (
          <div className="item" key={index} style={{ backgroundImage: `url(${item.url})` }}>
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Next and Prev buttons */}
      <div className="arrows">
        <button className="prev" onClick={() => showSlider('prev')}>&lt;</button>
        <button className="next" onClick={() => showSlider('next')}>&gt;</button>
      </div>

      {/* Time running bar */}
      <div className="timeRunning" ref={runningTimeRef}></div>
      <div className="button-group-container" style={{ textAlign: "right" }}>
        <ButtonGroup variant="contained">
          <Link to={"/Story/journey/ClimateChange"}>
            <Button>Previous</Button>
          </Link>
          <Link to={"/Story/journey/Impact"}>
            <Button>Next</Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Animation

