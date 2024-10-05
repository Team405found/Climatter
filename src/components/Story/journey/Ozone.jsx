import "../style/climatechange.css";
import Button from "@mui/material/Button";
import PostIndustrialitem from "./PostIndustrialitem";
import { ButtonGroup } from "@mui/material";
import Sidebar from "../../Sidebar";
import { Link } from "react-router-dom";

function PostIndustrialEra() {
  return (
    <div id="climatecng">
      <Sidebar />
      <br></br>
      <h1>Ozone (O₃): </h1>
      <br></br>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        In the stratosphere, situated about 15 to 35 kilometers above the
        Earth's surface, a shield of ozone stretches across the sky like a
        protective blanket. This layer absorbs an astonishing 97% to 99% of the
        sun’s harmful ultraviolet (UV) radiation, preventing it from reaching
        the Earth's surface. This protection is crucial, as excessive UV
        radiation can lead to serious health problems, including skin cancer and
        cataracts. Imagine a world where the sun's rays strike unfiltered, where
        children play outside without sunscreen, and the very crops that feed us
        are exposed to intense radiation. Without the ozone layer, life as we
        know it would be drastically different. The concentration of ozone in
        this vital layer is measured in Dobson Units (DU), with a healthy layer
        displaying about 300 DU.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        However, this shield faced a grave threat in the 1970s and 1980s.
        Scientists began to notice alarming signs of depletion, particularly
        over Antarctica, where the once-robust ozone layer began to thin
        dramatically. By the 1990s, readings plummeted to as low as 100 DU in
        certain areas, indicating a decline of over 60%. The culprit?
        Chlorofluorocarbons (CFCs)—chemicals commonly used in refrigeration,
        aerosol sprays, and other applications. These substances released
        chlorine atoms high into the atmosphere, which wreaked havoc on ozone
        molecules. Recognizing the urgent need for action, nations across the
        globe came together to sign the Montreal Protocol in 1987. This landmark
        agreement led to a remarkable 98% reduction in the use of
        ozone-depleting chemicals. Thanks to these collective efforts,
        scientists are now observing signs of recovery in the ozone layer.
        Projections suggest it could return to 1980 levels by 2066 over
        Antarctica and as early as 2040 globally.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        While stratospheric ozone serves as a protective barrier, ground-level
        ozone tells a starkly different story. Formed when pollutants from
        vehicles, factories, and power plants react with sunlight, this “bad
        ozone” can transform cities into smog-filled landscapes. On scorching
        summer days, ground-level ozone levels can soar to alarming heights,
        exceeding 180 parts per billion (ppb), well above the 70 ppb National
        Ambient Air Quality Standard (NAAQS) set by the Environmental Protection
        Agency (EPA). Imagine a bustling city where children are playing
        outside, only to be suddenly warned to stay indoors as the air quality
        deteriorates. Ground-level ozone, known to trigger respiratory problems,
        affects over 1 million people globally each year, particularly
        vulnerable populations such as the elderly and individuals with
        pre-existing health conditions.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        The consequences extend beyond human health; ground-level ozone poses a
        severe threat to agriculture as well. Studies reveal that ozone exposure
        can diminish the yields of essential crops. For instance, exposure to 60
        ppb can reduce wheat yields by 10%, while at 100 ppb, rice yields can
        drop by 15%. With the global population projected to reach 9.7 billion
        by 2050, ensuring food security becomes increasingly challenging.
      </p>
      <br></br>
      <p>
        As if the situation weren’t complex enough, climate change adds another
        layer to the ozone narrative. Rising temperatures can enhance the
        formation of ground-level ozone, accelerating the chemical reactions
        that produce it. Research predicts that without significant
        intervention, global ground-level ozone pollution could increase by 25%
        by 2050.
      </p>
      <br></br>
      <p>
        In the United States, transportation sources account for about 27% of
        ozone pollution, while industrial emissions contribute around 20%. The
        challenge now lies in effectively reducing these emissions while
        simultaneously managing climate change.
      </p>
      <br></br>
      <p>
        Despite the obstacles posed by ground-level ozone, there is hope on the
        horizon. Cities worldwide are taking proactive measures to combat
        pollution by implementing stricter vehicle emission standards, promoting
        cleaner energy sources, and investing in public transportation. The
        Kigali Amendment to the Montreal Protocol, signed in 2016, aims to phase
        out hydrofluorocarbons (HFCs)—potent greenhouse gases that, while not
        harmful to the ozone layer, contribute to climate change. This amendment
        underscores the global commitment to safeguarding not only the
        stratospheric ozone layer but also addressing broader environmental
        challenges.
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
