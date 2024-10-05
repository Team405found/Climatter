import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "../resources/greenhouse/bengu.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function GreenHouse() {
  return (
    <motion.div
      className="green_house_st"
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
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.2, ease: "circOut" }}
          style={{
            position: "relative",
            top: "5vh",
            left: "5vw",
            width: "90vw",
          }}
        >
          <h1
            style={{
              position: "relative",
              left: "2vh",
              color: "#fff",
              fontSize: "7vh",
              maxWidth: "50%",
              textAlign: "left",
              fontWeight: "750",
              fontFamily:
                "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
              lineHeight: "1.4",
              left: "0vw",
              marginBottom: "3vh",
            }}
          >
            Greenhouse Gases and Their Effects{" "}
          </h1>
          <h2
            style={{
              position: "relative",
              color: "#fff",
              fontSize: "1.8vw",
              textAlign: "justify",
              maxWidth: "60vw",
              fontWeight: "500",
              fontFamily:
                "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
              lineHeight: "1.1",
              marginBottom: "13vh",
            }}
          >
            Greenhouse gases are like a blanket around our Earth. They trap heat
            from the sun and keep our planet warm enough for life. The main
            greenhouse gases include carbon dioxide (CO₂), methane (CH₄), and
            nitrous oxide (N₂O).
          </h2>
        </motion.div>
        <motion.div
          initial={{ right: "-200vw" }}
          animate={{ right: "-50vw" }}
          transition={{ duration: 1.2, ease: "circOut" }}
          style={{ position: "relative", top: "10vh", width: "45vw" }}
        >
          <h1
            style={{
              position: "relative",
              color: "#fff",
              fontSize: "1.7vw",
              textAlign: "right",
              fontWeight: "500",
              fontFamily:
                "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
              lineHeight: "1.1",
            }}
          >
            While these gases are important for keeping our planet warm, too
            much of them can lead to problems. For example, increased CO₂ leads
            to more heat, which causes ice caps to melt and sea levels to rise.
            Methane and nitrous oxide contribute to even more warming.
            Understanding how these gases work helps us find ways to reduce
            their impact
          </h1>
          <div
            style={{
              position: "relative",
              marginLeft: "auto",
              marginRight: "0",
              bottom: "-5vh",
            }}
          >
            <ButtonGroup
              variant="contained"
              style={{
                display: "flex",
                position: "absolute",
                top: "-2vh",
                right: "0vw",
              }}
            >
              <Link to="/Story/journey/PostIndustrialEra">
                <Button>Previous</Button>
              </Link>
              <Link to="/Story/journey/ClimateChange">
                <Button>Next</Button>
              </Link>
            </ButtonGroup>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default GreenHouse;
