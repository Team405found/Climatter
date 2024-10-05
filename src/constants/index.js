import { image } from "framer-motion/client";
import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
import level1 from '../assets/map/1.jpg';
import level2 from '../assets/map/2.jpg';
import level3 from '../assets/map/3.jpg';
import level4 from '../assets/map/4.jpg';
import level5 from '../assets/map/5.jpg';
import level6 from '../assets/map/6.jpg'; 

  export const navigation = [
    {
      id: "0",
      title: "Map",
      url: "Map",
    },
    {
      id: "1",
      title: "Analytics",
      url: "https://team405found.github.io/dash/",
    },
    {
      id: "2",
      title: "Quiz",
      url: "https://team405found.github.io/quiz",
    },
  ];
  export const map= [
    {
      id: "0",
      imageUrl:level1,
      title: "Prehuman Era",
      url: "/Story/journey/Prehuman",
    },
    {
      id: "1",
      imageUrl: level2,
      title: "Pre-Industrial Era",
      url: "/Story/journey/PreIndustry",
    },
    {
      id: "2",
      imageUrl: level3,
      title: "Industrial Era",
      url: "/Story/journey/Industrial_st",
    },
    {
      id: "3",
      imageUrl: level4,
      title: "Post Industrial Era",
      url: "/Story/journey/PostIndustry",
    },
    {
      id: "4",
      imageUrl: level5,
      title: "Greenhouse Effect",
      url: "/Story/journey/Greenhouseeffect",
    },
    {
      id: "5",
      imageUrl: level6,
      title: "Save the Planet",
      url: "/Story/journey/Impact",
    }
  ]
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [  instagram,twitter, telegram];
  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  
    
  export const benefits = [
    {
      id: "0",
      title: "Journey",
      text: "JOURNEY THROUGH TIME DELVING INTO THE HISTORY OF CLIMATE CHANGE AND ITS PROFOUND EFFECTS ON OUR PLANET",
      backgroundUrl: "assets/benefits/card-1.svg",
      url:"Map",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Analytics",
      text: "COMPREHENSIVE VIEW OF CLIMATE CHANGE. CLEAR, SIMPLIFIED REPRESENTATION OF CURRENT AND LONG-TERM TRENDS AND KEY ENVIRONMENTAL SHIFTS",
      backgroundUrl: "assets/benefits/card-2.svg",
      url:"https://team405found.github.io/dash/",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Quiz",
      text: "INTERACTIVE EXPERIENCE AND VALUABLE INSIGHTS INTO CLIMATE CHANGE",
      backgroundUrl: "assets/benefits/card-3.svg",
      url:"https://team405found.github.io/quiz",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    }
  ];
  
