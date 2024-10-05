import "../style/Postindustrialera.css";
import Button from "@mui/material/Button";
import PostIndustrialitem from "./PostIndustrialitem";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

function PostIndustrialEra() {
  return (
    <div id="postindustrialera">
      <h1>The Post-Industrial Era: A New Awakening </h1>
      <br></br>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        As the world moved past the Industrial Era and into the mid-20th
        century, the environmental consequences of unchecked industrial growth
        became impossible to ignore. Urban centers around the world were
        grappling with the dark clouds of pollution hanging over their skylines.
        The global population, which had reached 2.5 billion in 1950, saw a
        growing demand for energy. The shift from coal to oil powered an
        industrial boom, and by 1973, global oil consumption surged to 57
        million barrels per day, a fourfold increase from pre-war levels. This
        growth came at a cost—between 1950 and 1980, CO₂ emissions more than
        doubled, from 6 billion tons to 15 billion tons annually.
      </p>
      <br></br>
      <p
        style={{
          color: "rgb(15, 16, 88)",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        By the 1960s and 1970s, the environmental toll became evident. Smog
        enveloped cities, and rivers became polluted with industrial waste. The
        publication of Rachel Carson's Silent Spring in 1962 sparked widespread
        concern about the impacts of industrial chemicals on ecosystems and
        human health. As the 1970s unfolded, the first Earth Day in 1970 saw
        over 20 million Americans participate, giving rise to a global
        environmental movement.
      </p>
      <br></br>
      <p
        style={{
          color: "rgb(15, 16, 88)",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        The Post-Industrial Era also witnessed environmental disasters that
        triggered an awakening. In 1985, scientists discovered a growing ozone
        hole over Antarctica, caused by chlorofluorocarbons (CFCs) used in
        everyday products. The discovery led to the signing of the Montreal
        Protocol in 1987, a historic international agreement to phase out
        ozone-depleting chemicals. Meanwhile, the world’s energy demands
        continued to soar, driven by the expansion of the automobile and
        oil-dependent industries.{" "}
      </p>
      <br></br>
      <PostIndustrialitem />
      <br></br>
      <br></br>
      <p>
        Despite some environmental victories, the issue of climate change
        remained on the horizon. In 1988, the Intergovernmental Panel on Climate
        Change (IPCC) was formed, warning that the continued burning of fossil
        fuels would lead to catastrophic global warming. By 1990, the IPCC's
        first report projected that if no action was taken, global temperatures
        could rise between 1.5°C to 4.5°C by the end of the century, setting the
        stage for the climate crises we face today.
      </p>
      <br></br>
      <p>
        As the Post-Industrial Era evolved, the first steps toward climate
        action were taken. The Kyoto Protocol of 1997 set international targets
        for reducing greenhouse gas emissions, though its impact was limited by
        the refusal of key countries to ratify the agreement. Meanwhile, the
        growth of renewable energy began to accelerate. By 2010, global wind
        power capacity reached 200 gigawatts (GW), and solar energy capacity
        surpassed 40 GW. Countries like Germany and Denmark took bold steps
        toward transitioning to renewable energy, signaling a shift toward a
        more sustainable future.
      </p>
      <p>
        Today, the world stands at a critical juncture. The lessons learned from
        the industrial boom and the environmental crises of the 20th century
        must shape the path forward. The Post-Industrial Era has shown that
        human ingenuity can both harm and heal the planet. Now, it’s up to us to
        decide the future, to take decisive action to mitigate climate change,
        and to ensure that the progress we make doesn’t come at the expense of
        the Earth.
      </p>
      <br></br>
      <div style={{ textAlign: "right" }}>
        <ButtonGroup variant="contained">
          <Link to={"/Story/journey/PostIndustry"}>
            <Button>Previous</Button>
          </Link>
          <Link to="/Map">
            <Button>Back to Map</Button>
          </Link>
          <Link to={"/Story/journey/Greenhouseeffect"}>
            <Button>Next</Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default PostIndustrialEra;
