import "../style/ch4.css";
import Button from "@mui/material/Button";
import PostIndustrialitem from "./PostIndustrialitem";
import { ButtonGroup } from "@mui/material";
import Sidebar from "../../Sidebar";
import { Link } from "react-router-dom";

function PostIndustrialEra() {
  return (
    <div id="ch4">
      <Sidebar />
      <br></br>
      <h1>Methane (CH₄):</h1>
      <br></br>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        Imagine a second blanket over Earth, one that’s not as thick as the CO₂
        blanket but far more powerful. This blanket is made of methane, a gas
        that traps heat at an alarming rate. Methane is like the high-energy,
        supercharged cousin of CO₂—while it's far less common in the atmosphere,
        it’s much more intense. Even though there are only about 1.9 parts per
        million (ppm) of methane in the air, compared to 421 ppm of CO₂, it can
        trap up to 84 times more heat than CO₂ over a short period, especially
        in the first 20 years after it's released. It’s a heat-trapper on
        steroids.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        For centuries, methane levels remained low, around 0.7 ppm. But since
        the Industrial Revolution, much like CO₂, methane has been on the rise.
        By 2024, methane levels have climbed to 1.9 ppm, a staggering 170%
        increase from pre-industrial times. It’s not just about how much methane
        there is—it’s about how quickly it acts. Though it breaks down faster
        than CO₂, while it’s in the atmosphere, methane packs an enormous punch.
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
      <p style={{ color: "rgb(15, 16, 88)" }}>
        Where does all this methane come from? Some of its sources might
        surprise you. One of the biggest contributors is livestock-yes you read
        it correct, it’s livestock. In fact, about 30% of methane emissions come
        from livestock digestion, particularly from cows and other ruminants as
        they break down food in their stomachs. Another 16% comes from a place
        you might not expect: landfills. As food scraps, paper, and other waste
        break down in landfills, they release methane into the air. Even rice
        paddies, where farmers grow rice in flooded fields, produce methane as
        the waterlogged soil creates the perfect environment for
        methane-releasing microbes.
      </p>
      <br></br>
      <p>
        Although methane is emitted in smaller quantities than CO₂, it’s
        responsible for about 20% of the global warming we’re experiencing
        today. That’s significant when you consider that methane emissions are
        much less common than CO₂. Think of it this way: while CO₂ is slowly and
        steadily heating the planet, methane is like a sudden burst of heat,
        supercharging the warming process. And the impacts are already being
        felt.
      </p>
      <br></br>
      <p>
        In recent years, methane has been in the spotlight as one of the
        quickest ways to slow down the acceleration of global warming. Reducing
        methane emissions, even slightly, could have a much faster impact on
        curbing global temperatures than reducing CO₂ alone. In fact, scientists
        believe that cutting methane emissions by just 40-45% by 2030 could
        prevent 0.3°C of global warming by mid-century.
      </p>
      <br></br>
      <p>
        But cutting methane emissions won’t be easy. Livestock farming is a key
        industry in many parts of the world, and landfills are everywhere.
        However, solutions are emerging. Innovations in how we manage waste—like
        capturing methane from landfills and turning it into energy—are already
        making a difference. Some farmers are experimenting with feeding
        livestock different types of feed that reduce the amount of methane cows
        produce. Even rice farming is evolving, with farmers adopting new
        techniques to flood fields less, lowering methane emissions from the
        waterlogged soils. So, while methane might not get as much attention as
        CO₂, it plays a critical role in shaping our future climate. It's a
        powerful force that, if managed carefully, could slow down the rapid
        warming of the planet. Just like with CO₂, the story of methane is one
        of urgency and innovation—one where the choices we make today can
        rewrite the future. By tackling methane emissions head-on, we have the
        chance to lighten the blanket that's heating our world too quickly.
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
