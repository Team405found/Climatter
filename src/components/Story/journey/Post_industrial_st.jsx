import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "../resources/postindustrial/northSeaBlooms.jpg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

function PostIndustry() {
  return (
    <motion.div
      className="PostIndustry"
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
            left: "0vw",
            width: "48vw",
            height: "50vh",
          }}
        >
          <h1
            style={{
              position: "relative",
              left: "3vh",
              color: "#fff",
              fontSize: "3.5vw",
              maxWidth: "60%",
              textAlign: "left",
              fontWeight: "700",
              fontFamily:
                "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
              lineHeight: "1.4",
              left: "0vw",
            }}
          >
            From the Post-Industrial Era to the Present Day{" "}
          </h1>
          <h2
            style={{
              position: "relative",
              color: "#fff",
              fontSize: "1.8vw",
              textAlign: "justify",
              lineHeight: "1",
              backdropFilter: "blur(8px)",
              borderRadius: "30px",
              width: "fit-content",
              padding: "10px",
              margin: "20px auto",
            }}
          >
            As the world moved past the Industrial Era and into the mid-20th
            century, the environmental consequences of unchecked industrial
            growth became impossible to ignore.{" "}
          </h2>
        </motion.div>
        <motion.div
          initial={{ x: "-105vw" }}
          animate={{ x: "5vw" }}
          transition={{ duration: 1.2, ease: "circOut", delay: 1.5 }}
          style={{ position: "relative", top: "0vh", width: "45vw" }}
        >
          <h1
            style={{
              position: "relative",
              color: "#fff",
              fontSize: "1.4vw",
              textAlign: "justify",
              backdropFilter: "blur(8px)",
              borderRadius: "30px",
              width: "fit-content",
              padding: "10px",
              margin: "10px auto",
            }}
          >
            The dawn of the Industrial Revolution transformed societies,
            economies, and the way humans interacted with the planet. Fueled by
            coal and oil, the world experienced an unprecedented boom in
            technological innovation and growth, but it came with a hidden
            cost—the environment. As factories belched smoke into the sky and
            cities swelled in size, the seeds of human-driven climate change
            were sown. Yet, it wasn’t until the Post-Industrial Era, as the
            world entered the 20th century, that the consequences of this rapid
            development began to manifest. This era would soon reveal that human
            progress and environmental degradation were two sides of the same
            coin.{" "}
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
                top: "-10vh",
                left: "77vw",
              }}
            >
              <Link to="/Story/journey/IndustrialEra">
                <Button>Previous</Button>
              </Link>
              <Link to="/Story/journey/PostIndustrialEra">
                <Button>Next</Button>
              </Link>
            </ButtonGroup>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PostIndustry;
