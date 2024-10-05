import "../style/co2.css";
import Button from "@mui/material/Button";
import PostIndustrialitem from "./PostIndustrialitem";
import { ButtonGroup } from "@mui/material";
import Sidebar from "../../Sidebar";
import { Link } from "react-router-dom";

function PostIndustrialEra() {
  return (
    <div id="co2">
      <Sidebar />
      <br></br>
      <h1>Carbon Dioxide (CO₂):</h1>
      <br></br>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        Imagine Earth as a cozy home, wrapped in a blanket made of carbon
        dioxide (CO₂). For centuries, this blanket was just thick enough to keep
        the planet warm, a perfect balance that allowed life to flourish. It was
        the ideal thickness, holding the planet’s temperature steady and
        creating a world where ecosystems thrived. Before humans began to
        harness the power of machines, the air held about 280 parts per million
        (ppm) of CO₂—a comfortable, stable level. But everything changed when
        the Industrial Revolution began. The once-balanced blanket started to
        thicken as humans burned more and more fossil fuels—coal, oil, and
        natural gas—to power factories, trains, and later, cars and airplanes.
        Over time, this invisible blanket grew heavier, trapping more heat. By
        2024, the CO₂ levels had surged past 421 ppm, a 50% increase from
        pre-industrial times. The air, once so steady, was now different, and
        the planet began to feel the effects.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        Picture this: every year, human activities pump an astonishing 36
        billion metric tons of CO₂ into the atmosphere. That’s like filling
        14,000 Empire State Buildings with CO₂—year after year. And it’s
        happening fast. CO₂ levels are rising at a rate of 2.4 ppm per year,
        much quicker than at any time in Earth’s past. It’s as if the blanket is
        getting thicker and thicker, making the planet too warm. What does this
        mean for the Earth? The planet’s average temperature has already risen
        by 1.1°C (2°F) since the 19th century. It doesn’t sound like much, but
        this small shift is shaking up weather patterns around the globe.
        Glaciers and polar ice sheets, which once seemed eternal, are melting at
        a staggering rate. In Antarctica, 150 billion tons of ice are vanishing
        every year, while Greenland is losing even more—280 billion tons
        annually. This is causing the seas to rise, creeping up by 20 cm (8
        inches) over the last century, and the water continues to rise higher.
      </p>
      <br></br>
      <p>
        And it’s not just the ice that’s melting. The thicker CO₂ blanket is
        making extreme weather more intense and unpredictable. Imagine this: in
        the scorching summer of 2023, Southern Europe baked under a relentless
        heatwave. Temperatures in parts of Italy, Spain, and Greece soared to
        over 48°C (118°F), the highest ever recorded in Europe. Wildfires blazed
        across the landscape, leaving forests in ashes. People sweltered in
        cities, and ancient buildings stood under the weight of the searing
        heat.
      </p>
      <br></br>
      <p>
        Across the ocean in 2022, Hurricane Ian tore through the United States,
        with winds blasting at 240 km/h (150 mph), causing devastation in its
        path. Entire communities were destroyed, and the cost of the storm
        exceeded $113 billion. Further east, in Pakistan, torrential monsoon
        rains in 2023 unleashed catastrophic flooding. The water surged through
        towns and villages, affecting over 33 million people and sweeping away
        homes and farmlands. Scientists linked this historic flood to the
        warming climate, which is intensifying storms and making them harder to
        predict. The Arctic, a frozen land of ice and snow, is warming faster
        than anywhere else on Earth—four times faster than the global average.
        The sea ice that once covered the region is shrinking year by year,
        leaving wildlife struggling to adapt. As the ice melts, sea levels rise,
        threatening coastal communities around the world.
      </p>
      <br></br>
      <p>
        And this is just the beginning. If we continue on this path, CO₂ levels
        could soar to 550 ppm by the end of the century, pushing global
        temperatures up by another 2°C to 3°C. This rise would bring even more
        powerful hurricanes, longer droughts, and shifts in where and how we
        grow food. The impacts could ripple across the planet, affecting
        billions of people. But there’s hope. The story isn’t over yet. Humanity
        has the power to act, to innovate, and to slow down the thickening of
        Earth’s blanket. By reducing CO₂ emissions and transitioning to cleaner
        energy, we can begin to lighten the load and restore the balance. The
        choices we make now will determine whether future generations will enjoy
        a livable planet—or face an uncertain, overheated world. The future is
        in our hands, and we have the tools to rewrite the story
      </p>
      <br></br>
      <div style={{ textAlign: "right" }}>
        <Link to={"/Story/journey/ClimateChange"}>
          <Button variant="contained">Previous</Button>
        </Link>
      </div>
    </div>
  );
}

export default PostIndustrialEra;
