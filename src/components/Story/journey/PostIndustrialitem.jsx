import React, { useState, useEffect } from "react";
import { Typography, IconButton } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import "../style/postindustrialitem.css";

function Preindustrialitem(props) {
  var items = [
    {
      name: "Melting Ice Caps and Rising Sea Levels",
      description1:
        "1. Acceleration of Ice Melt: Recent studies show that the rate of ice loss from Greenland has tripled since the 1990s, significantly contributing to rising sea levels.",
      description2:
        "2. The influx of freshwater from melting ice caps disrupts ocean currents, which can alter weather patterns and affect global climate systems.",
      description3:
        "3. Melting ice caps threaten polar ecosystems, as species such as polar bears and seals rely on sea ice for hunting and breeding.",
      description4:
        "4. As temperatures rise, permafrost is thawing, releasing stored methane and CO2, which further accelerates climate change and contributes to rising temperatures.",
      description5:
        "5. The rising costs of adaptation and infrastructure reinforcement in vulnerable coastal cities may strain economies and divert resources from other essential services.",
    },
    {
      name: "Rising Global Temperatures",
      description1:
        "1. Global temperatures have risen by around 1.2°C above pre-industrial levels as of the early 21st century, with 2020 and 2021 ranking among the hottest years on record.",
      description2:
        "2. This rise has contributed to shifts in global climate patterns, including altered precipitation rates and more severe weather conditions like floods and droughts.",
      description3:
        "3. Predictions indicate that, without significant intervention, global temperatures may rise by 2.7°C or more by century's end, worsening climate effects.",
      description4:
        "4. Rising temperatures create drier conditions, increasing the likelihood and severity of wildfires, which devastate ecosystems and human settlements alike.",
      description5:
        "5. Warmer temperatures exacerbate air quality issues, contributing to respiratory problems and heat-related illnesses, particularly among vulnerable populations.",
    },
    {
      name: "Ocean Acidification",
      description1:
        "1. The ocean has absorbed around 30% of the carbon dioxide emitted by human activities since the industrial era, resulting in a 26% increase in ocean acidity. ",
      description2:
        "2. This acidification weakens marine organisms with calcium carbonate shells or skeletons, such as corals, oysters, and some plankton species, which are crucial to marine food chains. ",
      description3:
        "3. Fisheries, which provide food for 3 billion people globally, are increasingly at risk, particularly in regions dependent on coral reefs, like Southeast Asia and the Caribbean. ",
      description4:
        "4. Ocean acidification makes it more difficult for corals to form their calcium carbonate structures, leading to weakened reefs that are more susceptible to bleaching and disease.",
      description5:
        "5. Shellfish farming, particularly for oysters, clams, and mussels, is at risk due to the corrosive effects of acidified waters on shell formation, threatening food sources and economies.",
    },
    {
      name: "Deforestation and Biodiversity Loss",
      description1:
        "1. Over 420 million hectares of forest—roughly the size of the European Union—have been lost since 1990, largely due to agricultural expansion, logging, and infrastructure development. ",
      description2:
        "2. Deforestation contributes to about 15% of global greenhouse gas emissions, while the loss of forests reduces the planet’s ability to absorb CO₂ from the atmosphere.",
      description3:
        "3. The extinction rate of species is estimated to be 1,000 times higher than the natural rate due to human activities, with 75% of terrestrial environments now significantly altered by industrial and agricultural practices.",
      description4:
        "4. Forests provide essential ecosystem services, including water filtration, carbon storage, and climate regulation. Their loss compromises these services, affecting both local and global environments.",
      description5:
        "5. Habitat loss affects migratory routes for numerous animal species, hindering their ability to find food, reproduce, and adapt to changing environmental conditions.",
    },
    {
        name: "Air Pollution and Health Impacts",
        description1:
          "1. Air pollution, primarily from the burning of fossil fuels in industrial processes, transport, and energy production, is responsible for an estimated 7 million premature deaths annually. ",
        description2:
          "2. The World Health Organization (WHO) identifies particulate matter (PM2.5) and nitrogen dioxide (NO₂) as major pollutants, both of which contribute to lung disease, heart conditions, and strokes. ",
        description3:
          "3. Urban air quality remains a severe issue in rapidly developing areas, with cities like Delhi and Beijing often recording PM2.5 levels exceeding WHO safety thresholds by several times.",
        description4:
          "4. ir pollution incurs significant economic costs, including increased healthcare expenses, lost productivity due to illness, and damage to ecosystems, which can strain national economies.",
        description5:
          "5. Air pollutants can harm ecosystems by acidifying soils and water bodies, damaging plant life, and disrupting wildlife populations, which can ultimately affect food chains.",
      },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(items[0]);
  useEffect(() => {
    setCurrentItem(items[activeIndex]);
  }, [activeIndex, items]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "ArrowLeft") {
      handlePrev();
    }
  };

  return (
    <div id="postindus" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="postindus-content">
        <IconButton onClick={handlePrev} className="arrow-button">
          <ArrowBack fontSize="large" />
        </IconButton>
        <Typography className="phyto-name">{currentItem.name}</Typography>
        <IconButton onClick={handleNext} className="arrow-button">
          <ArrowForward fontSize="large" />
        </IconButton>
      </div>
      <div className="text-content">
        <Typography className="phyto-desc">
          {currentItem.description1}
        </Typography>
        <Typography className="phyto-desc">
          {currentItem.description2}
        </Typography>
        <Typography className="phyto-desc">
          {currentItem.description3}
        </Typography>
        <Typography className="phyto-desc">
          {currentItem.description4}
        </Typography>
        <Typography className="phyto-desc">
          {currentItem.description5}
        </Typography>
      </div>
    </div>
  );
}

export default Preindustrialitem;
