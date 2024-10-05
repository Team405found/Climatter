import React from "react";
import "../style/Industrialera.css";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import Industrialitem from "./Industrialitem";

function IndustrialEra() {
  return (
    <div id="industrialera">
      <h1>Industrial Era : </h1>
      <br></br>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        As the sun set on the pre-industrial era, humanity found itself at a
        crucial crossroads. For thousands of years, societies relied on
        renewable energy sources such as wood, wind, and water, living in
        harmony with the rhythms of nature. However, the 18th century ushered in
        a new age—the Industrial Revolution—a period marked by dramatic
        technological advancements and profound societal changes. The transition
        from agrarian lifestyles to industrialized urban living was not merely a
        shift in production methods; it was the dawn of a new relationship
        between humanity and the environment.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        The Industrial Revolution fundamentally reshaped societies, spurring
        rapid technological advancements and urban growth. In Britain, coal
        production skyrocketed from 5 million tons in 1780 to 120 million tons
        by 1850, drastically increasing greenhouse gas emissions. By 1850,
        Britain was consuming nearly 80% of the world’s coal supply, making it
        the leading industrial nation and setting the stage for global
        industrialization.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        Atmospheric CO₂ levels, which were stable at around 280 ppm prior to
        industrialization, rose to 295 ppm by 1860, indicating a significant
        shift in the atmospheric balance. This increase was primarily due to the
        burning of fossil fuels, which also included oil and natural gas, as
        industries sought to power steam engines, machinery, and factories.
      </p>
      <br></br>
      <Industrialitem />
      <br></br>
      <br></br>
      <p>
        As the 19th century closed, the ramifications of the Industrial
        Revolution became clear. Rising temperatures and escalating CO₂ levels
        underscored the beginning of human-driven climate change. This era
        initiated a complex relationship with the environment, leading into the
        post-industrial era, where awareness of climate issues grew.
      </p>
      <p>
        The legacy of the Industrial Revolution emphasizes the importance of
        balancing progress with environmental responsibility. As we navigate a
        future defined by technology and innovation, we must learn from the
        past, committing to sustainable practices that foster a healthier
        planet. The challenges we face today call for a renewed dedication to
        understanding our impact and shaping a sustainable future for
        generations to come.
      </p>
      <br></br>
      <div style={{ textAlign: "right" }}>
        <ButtonGroup variant="contained">
          <Link to="/Story/journey/Industrial_st">
            <Button>Previous</Button>
          </Link>
          <Link to="/Map">
            <Button>Back to Map</Button>
          </Link>
          <Link to="/Story/journey/PostIndustry">
          <Button>Next</Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default IndustrialEra;
