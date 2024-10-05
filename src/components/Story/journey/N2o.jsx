import "../style/n2o.css";
import Button from "@mui/material/Button";
import PostIndustrialitem from "./PostIndustrialitem";
import { ButtonGroup } from "@mui/material";
import Sidebar from "../../Sidebar";
import { Link } from "react-router-dom";

function PostIndustrialEra() {
  return (
    <div id="n2o">
      <Sidebar />
      <br></br>
      <h1>Nitrous Oxide (N₂O):</h1>
      <br></br>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        There's an often-overlooked force driving climate change, operating
        quietly but powerfully: nitrous oxide (N₂O). So Earth wrapped in not
        one, but several blankets, each made up of different gases. We’ve
        already talked about the CO₂ blanket, slowly thickening over time, and
        the methane blanket, quick to trap heat like a high-energy burst. But
        there’s another, more silent contributor to our warming world: nitrous
        oxide (N₂O), a potent gas that plays a surprisingly significant role in
        global warming.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        Nitrous oxide might not be as well-known as CO₂ or methane, but it’s
        just as powerful. In fact, N₂O traps about 300 times more heat than CO₂
        over a 100-year period. It’s like the heavyweight champion of greenhouse
        gases. And though it exists in much smaller quantities—about 0.33 parts
        per million (ppm) in the atmosphere—it’s still causing trouble. Since
        the Industrial Revolution, nitrous oxide levels have increased by 24%,
        largely due to human activities like farming and industrial processes.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        Where does all this nitrous oxide come from? The main culprit is
        agriculture, specifically the use of synthetic fertilizers. When farmers
        apply nitrogen-based fertilizers to their crops, not all of the nitrogen
        gets absorbed by the plants. Some of it escapes into the atmosphere as
        nitrous oxide. In fact, agriculture is responsible for about 70% of
        human-caused N₂O emissions. Another source? Industrial processes like
        the production of chemicals and burning fossil fuels, which also release
        this gas into the air.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        Although N₂O is present in much lower concentrations than CO₂ or
        methane, it still plays a significant role in global warming. Scientists
        estimate that nitrous oxide accounts for about 6% of all greenhouse gas
        emissions. But here's where it gets tricky: once N₂O is released into
        the atmosphere, it stays there for a long time—about 114 years. During
        that time, it continues trapping heat and contributing to climate
        change.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        The impact of nitrous oxide on our planet is already being felt. The
        increased levels of N₂O are not only warming the planet, but they’re
        also depleting the ozone layer, the protective shield that blocks
        harmful ultraviolet (UV) radiation from the Sun. This means that as N₂O
        levels rise, not only are we experiencing a warmer planet, but we’re
        also more vulnerable to the effects of UV radiation, which can lead to
        health problems like skin cancer and cataracts. Let’s take a look at the
        numbers. Nitrous oxide levels have risen from 0.27 ppm in pre-industrial
        times to about 0.33 ppm today. That might seem small, but given its
        powerful heat-trapping ability, it’s a big deal. And just like CO₂ and
        methane, the rate of increase is accelerating. Currently, N₂O levels are
        rising at about 1.2 parts per billion (ppb) per year—faster than at any
        point in history.
      </p>
      <br></br>
      <p >
        If we don’t take action, nitrous oxide levels could continue to climb,
        further heating the planet and damaging the ozone layer. But there’s
        hope. Farmers and scientists are already working on solutions. By using
        more efficient fertilizers or adopting organic farming methods, farmers
        can reduce the amount of N₂O escaping into the atmosphere. In fact,
        studies show that adopting sustainable farming practices could cut N₂O
        emissions by up to 50% in some areas. Moreover, advances in technology
        are helping industries find cleaner ways to produce chemicals and energy
        without releasing as much nitrous oxide. Some factories have started
        using N₂O abatement technology, which captures the gas before it can
        escape into the air, preventing it from contributing to global warming.
      </p>
      <br></br>
      <p>
        The story of nitrous oxide is another chapter in Earth’s climate saga—a
        tale of small amounts making a big difference. Like the other greenhouse
        gases, it’s invisible but incredibly impactful. And while it’s tempting
        to focus only on CO₂ and methane, understanding nitrous oxide’s role in
        climate change is crucial for creating a sustainable future. The more we
        learn about this powerful gas, the more we can do to stop it from
        heating our planet further. With the right strategies, we can slow down
        its rise and help ensure a healthier, cooler world for generations to
        come.
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
