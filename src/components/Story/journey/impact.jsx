import React from "react";
import "../style/climatechange.css";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";


function IndustrialEra() {
  return (
    <div id="climatecng">
      <h1>Humanity’s Epic Quest to Save the Planet </h1>
      <br></br>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        By the year 2000, the concentration of carbon dioxide (CO₂) in the
        atmosphere had surpassed 370 parts per million (ppm), a level not seen
        for millions of years. This increase in CO₂, along with other greenhouse
        gases like methane (CH₄) and nitrous oxide (N₂O), contributed to rising
        global temperatures. The average temperature had already risen by 1°C
        (1.8°F) above pre-industrial levels, and the consequences were becoming
        evident in everyday life—more intense hurricanes, wildfires, and
        droughts. It was in this decade that the first major steps toward
        combating climate change were taken. The 2015 Paris Agreement was a
        historic moment, where 196 nations pledged to limit global warming to
        well below 2°C, with efforts to keep it below 1.5°C. Countries began
        setting ambitious targets, with promises to reduce emissions by up to
        50% by 2030 and achieve net-zero emissions by 2050.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        One of the biggest breakthroughs in humanity’s efforts to remedy climate
        change came in the form of renewable energy. By 2023, renewable energy
        sources like solar and wind accounted for over 30% of global electricity
        production, up from just 5% in 2000. Countries like Germany and Denmark
        became pioneers, with wind farms sprouting along their coastlines and
        solar panels glittering on rooftops. Take solar energy, for instance.
        The cost of solar power had dropped by 90% between 2009 and 2021, making
        it cheaper than coal or natural gas in many regions. This led to a solar
        boom—by 2023, more than 1 terawatt of solar capacity was installed
        globally, enough to power nearly 600 million homes!
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        Transportation, which contributed about 24% of global CO₂ emissions,
        underwent a revolution. Electric vehicles (EVs), once a niche market,
        surged in popularity. In 2010, there were only around 17,000 electric
        cars on the road. By 2024, that number had skyrocketed to more than 26
        million! Countries like Norway led the charge, with 80% of new car sales
        being electric by 2024. Major automakers, from Tesla to Volkswagen,
        committed to phasing out gasoline-powered vehicles, with some pledging
        to produce only electric models by 2035. The shift to EVs not only
        reduced emissions but also sparked innovation in battery technology,
        leading to batteries that could store more energy and charge faster.
      </p>
      <br></br>
      <p>
        Nature also became an essential ally in the fight against climate
        change. Deforestation had been a significant driver of emissions, but
        reforestation projects aimed to reverse that damage. In places like
        Brazil, the Congo, and Indonesia, efforts were made to replant millions
        of trees. One of the most ambitious projects was the African-led “Great
        Green Wall” initiative, which sought to plant a wall of trees stretching
        8,000 km across the width of Africa. By 2024, over 20 million hectares
        of degraded land had been restored, with 12 million new trees planted,
        sequestering vast amounts of CO₂ from the atmosphere
      </p>
      <br></br>
      <p>
        In addition to renewable energy and reforestation, technology played a
        pivotal role in addressing climate change. Carbon capture and storage
        (CCS) emerged as a promising tool. The idea was simple—capture CO₂
        emissions from industrial processes and power plants, and store them
        underground where they couldn’t harm the atmosphere. By 2024, over 30
        commercial CCS facilities were operational worldwide, capturing around
        40 million tons of CO₂ each year—equivalent to taking 8 million cars off
        the road. While CCS was still in its infancy, it held immense potential
        to curb emissions from industries like cement and steel, which were
        harder to decarbonize.
      </p>
      <p>
        The battle against climate change is far from over, but progress is
        being made. By 2030, it’s predicted that renewable energy will account
        for over 50% of global electricity, and by 2050, the world may achieve
        net-zero emissions if current trends continue. New technologies, such as
        hydrogen fuel and even artificial photosynthesis, could reshape how we
        power our lives. And it’s not just governments or corporations leading
        the way—communities, individuals, and children are stepping up. Cities
        are becoming greener, food systems are being transformed, and
        innovations are constantly emerging to reduce waste and enhance
        sustainability.
      </p>
      <br></br>
      <div style={{ textAlign: "right" }}>
        <ButtonGroup variant="contained">
          <Link to="/Story/journey/Animation">
            <Button>Previous</Button>
          </Link>
          <Link to="/">
            <Button>Back to Homepage</Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default IndustrialEra;
