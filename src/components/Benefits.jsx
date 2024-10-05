import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import CompanyLogo from "./CompanyLogo";
import { Link } from "react-router-dom";
import benefitIcon1 from "../assets/benefits/icon-1.svg";
import benefitImage2 from "../assets/benefits/icon-2.svg";
import benefitIcon2 from "../assets/benefits/icon-2.svg";
import benefitIcon3 from "../assets/benefits/icon-3.svg";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Discover Climatter"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {/* First Benefit Item: Journey */}
          <div
            className="block relative p-0.5 bg-no-repeat bg-center bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url(assets/benefits/card-1.svg)`,
            }}
          >
            <Link
              to="/Map"
              className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-auto"
            >
              <h5 className="h5 mb-5">Journey</h5>
              <p className="body-2 mb-6 text-n-3">
                JOURNEY THROUGH TIME DELVING INTO THE HISTORY OF CLIMATE CHANGE
                AND ITS PROFOUND EFFECTS ON OUR PLANET
              </p>
              <div className="flex items-center mt-auto">
                <img src={benefitIcon1} width={48} height={48} alt="Journey" />
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  Explore more
                </p>
                <Arrow />
              </div>
            </Link>
            {/* Optional gradient light */}
            <GradientLight />

            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-10">
                <img
                  src={benefitImage2}
                  width={380}
                  height={362}
                  alt="Journey"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <ClipPath />
          </div>

          {/* Second Benefit Item: Analytics */}
          <div
            className="block relative p-0.5 bg-no-repeat bg-center bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url(assets/benefits/card-2.svg)`,
            }}
          >
            <a
              href="https://team405found.github.io/dash/"
              className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-auto"
            >
              <h5 className="h5 mb-5">Analytics</h5>
              <p className="body-2 mb-6 text-n-3">
                COMPREHENSIVE VIEW OF CLIMATE CHANGE. CLEAR, SIMPLIFIED
                REPRESENTATION OF CURRENT AND LONG-TERM TRENDS AND KEY
                ENVIRONMENTAL SHIFTS
              </p>
              <div className="flex items-center mt-auto">
                <img
                  src={benefitIcon2}
                  width={48}
                  height={48}
                  alt="Analytics"
                />
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  Explore more
                </p>
                <Arrow />
              </div>
            </a>

            {/* Optional gradient light */}
            <GradientLight />

            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-10">
                <img
                  src={benefitImage2}
                  width={380}
                  height={362}
                  alt="Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <ClipPath />
          </div>

          {/* Third Benefit Item: Quiz */}
          <div
            className="block relative p-0.5 bg-no-repeat bg-center bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url(assets/benefits/card-3.svg)`,
            }}
          >
            <a
              href="https://team405found.github.io/quiz"
              className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-auto"
            >
              <h5 className="h5 mb-5">Quiz</h5>
              <p className="body-2 mb-6 text-n-3">
                INTERACTIVE EXPERIENCE AND VALUABLE INSIGHTS INTO CLIMATE CHANGE
              </p>
              <div className="flex items-center mt-auto">
                <img src={benefitIcon3} width={48} height={48} alt="Quiz" />
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  Explore more
                </p>
                <Arrow />
              </div>
            </a>

            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-10">
                <img
                  src={benefitImage2}
                  width={380}
                  height={362}
                  alt="Quiz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <ClipPath />
          </div>
        </div>
      </div>
      <CompanyLogo className="hidden relative z-10 mt-20 lg:block " />
    </Section>
  );
};

export default Benefits;
