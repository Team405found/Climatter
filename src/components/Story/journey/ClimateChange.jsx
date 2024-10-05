import "../style/climatechange.css";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import Sidebar from "../../Sidebar";
import { Link } from "react-router-dom";

function PostIndustrialEra() {
  return (
    <div id="climatecng">
      <Sidebar />
      <br></br>
      <h1>Greenhouse Gases and Their Effects</h1>
      <br></br>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        Greenhouse gases function like a blanket surrounding our Earth,
        effectively trapping heat from the sun and ensuring that our planet
        remains warm enough to support life. This natural phenomenon, known as
        the greenhouse effect, plays a crucial role in regulating the Earth's
        temperature. Without this effect, our planet would be inhospitable, as
        temperatures would drop significantly, making it difficult for
        ecosystems to thrive. The balance of greenhouse gases in the atmosphere
        is vital for maintaining the climate conditions necessary for various
        life forms to flourish, highlighting the importance of understanding and
        preserving this delicate equilibrium.
      </p>
      <br></br>
      <p >
        However, human activities have significantly altered this balance. The
        burning of fossil fuels, deforestation, and industrial processes have
        all contributed to a rise in emissions, intensifying the greenhouse
        effect. As temperatures continue to rise, we face a myriad of challenges
        and disruptions to ecosystems. Addressing these changes is critical for
        the health of our planet and future generations, necessitating concerted
        efforts to reduce greenhouse gas emissions and transition to more
        sustainable practices. Let's meet them, shall we?
      </p>

      <div style={{ textAlign: "right" }}>
        <ButtonGroup variant="contained">
          <Link to={"/Story/journey/Greenhouseeffect"}>
            <Button>Previous</Button>
          </Link>
          <Link to="/Map">
            <Button>Back to Map</Button>
          </Link>
          <Link to={"/Story/journey/Animation"}>
            <Button>Next</Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default PostIndustrialEra;
