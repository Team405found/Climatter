import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "../resources/preindustrial/Industrial_era.jpg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

const Pre_industry_st_2 = () => {
  return (
    <motion.div
      className="page6"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.5 }}
      exit={{ x: window.innerWidth }}
    >
      <img
        src={Image}
        style={{
          position: "absolute",
          top: "0vh",
          width: "100%",
          maxHeight: "100vh",
          zIndex: "-100",
        }}
      ></img>
      <div
        style={{
          position: "absolute",
          top: "0vh",
          width: "100%",
          maxHeight: "100vh",
        }}
      >
        <motion.div
          initial={{ x: "150vw" }}
          animate={{ x: "50vw" }}
          transition={{ duration: 1.2, ease: "circOut" }}
          style={{
            position: "relative",
            top: "0vh",
            left: "0vw",
            width: "45vw",
            height: "50vh",
          }}
        >
          <h1
            style={{
              position: "relative",
              textAlign: "right",
              color: "burlywood",
              fontSize: "7vw",
              fontWeight: "750",
              fontFamily:
                "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
              lineHeight: "1.5"
            }}
          >
            Industrial Era
          </h1>
          
        </motion.div>
        <motion.div
          initial={{ x: "-105vw" }}
          animate={{ x: "5vw" }}
          transition={{ duration: 1.2, ease: "circOut", delay: 1.5 }}
          style={{ position: "relative", top: "-30vh", width: "45vw" }}
        >
          <h1
            style={{
              position: "relative",
              backdropFilter: "blur(50px)",
              color: "#000",
              fontStyle: "italic",
              fontSize: "1.6vw",
              fontWeight: "40%",
              textAlign: "justify",
              padding: "10px",
              borderRadius: "30px",
              width: "fit-content",
              margin: "20px auto",
              bottom: "-10vh",
            }}
          >
            The Industrial Era, spanning from the late 18th to the early 20th
            century, marked a pivotal transformation in human society and its
            relationship with the environment. Rapid industrialization,
            urbanization, and the extensive use of fossil fuels led to
            unprecedented economic growth but also significant environmental
            consequences. Increased carbon emissions, deforestation, and
            pollution disrupted natural climate patterns, resulting in rising
            global temperatures and extreme weather events. This poster
            presentation explores the multifaceted impact of industrial
            activities on climate change, highlighting key developments, their
            ecological repercussions, and the urgent need for sustainable
            practices to mitigate the lasting effects of this transformative
            period on our planet.
          </h1>

          <div
            style={{
              position: "relative",
              marginLeft: "auto",
              marginRight: "0",
              bottom: "-20vh",
            }}
          >
            <ButtonGroup
              variant="contained"
              style={{
                display: "flex",
                position: "absolute",
                top: "-11vh",
                left: "77vw",
              }}
            >
              <Link to="/Story/journey/PreIndustrialEra">
                <Button>Previous</Button>
              </Link>
              <Link to="/Story/journey/IndustrialEra">
                <Button>Next</Button>
              </Link>
            </ButtonGroup>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pre_industry_st_2;
