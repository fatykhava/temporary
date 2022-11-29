import videMp4 from "../../assets/video/workout.mp4";
import videoOgv from "../../assets/video/workout.ogv";
import videoWebm from "../../assets/video/workout.webm";
import srcMockup1 from "../../assets/images/features/mockup1.png";
import srcMockup2 from "../../assets/images/features/mockup2.png";
import srcMockup3 from "../../assets/images/features/mockup3.png";
import srcMockup4 from "../../assets/images/features/mockup4.png";
import srcMockup5 from "../../assets/images/features/mockup5.png";
import srcMockup6 from "../../assets/images/features/mockup6.png";
import srcMockup1x2 from "../../assets/images/features/mockup1@2x.png";
import srcMockup2x2 from "../../assets/images/features/mockup2@2x.png";
import srcMockup3x2 from "../../assets/images/features/mockup3@2x.png";
import srcMockup4x2 from "../../assets/images/features/mockup4@2x.png";
import srcMockup5x2 from "../../assets/images/features/mockup5@2x.png";
import srcMockup6x2 from "../../assets/images/features/mockup6@2x.png";
import { ReactComponent as Bg1 } from "../../assets/images/features/gradient-bg1.svg";
import { ReactComponent as Bg2 } from "../../assets/images/features/gradient-bg2.svg";
import { ReactComponent as Bg3 } from "../../assets/images/features/gradient-bg3.svg";
import { ReactComponent as Bg4 } from "../../assets/images/features/gradient-bg4.svg";
import { ReactComponent as Bg5 } from "../../assets/images/features/gradient-bg5.svg";
import { ReactComponent as Bg6 } from "../../assets/images/features/gradient-bg6.svg";
import { ReactComponent as Path1 } from "../../assets/images/features/path1.svg";
import { ReactComponent as Path2 } from "../../assets/images/features/path2.svg";
import { ReactComponent as Path3 } from "../../assets/images/features/path3.svg";
import { ReactComponent as Path4 } from "../../assets/images/features/path4.svg";
import { ReactComponent as Path5 } from "../../assets/images/features/path5.svg";

import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box } from "@material-ui/core";
import Slider from "react-slick";
import ScrollAnimation from "../_common/ScrollAnimation";
import Video from "../_common/Video";

const featuresData = [
  {
    id: "001",
    videoMp4: videMp4,
    videoOgv: videoOgv,
    videoWebm: videoWebm,
    caption: "App User Design",
    descr:
      "Working with a renowned design studio and your vision, Vibe Media can produce an entirely bespoke app that stands out and offers exactly what you need.",
    mockup: srcMockup1,
    mockup2x: srcMockup1x2,
    bg: Bg1,
    path: Path1,
  },
  {
    id: "002",
    caption: "Brand Development",
    descr:
      "Vibe Media’s expert outreach and strategy team can grow your audience and engage your customers.",
    mockup: srcMockup2,
    mockup2x: srcMockup2x2,
    bg: Bg2,
    path: Path2,
  },
  {
    id: "003",
    caption: "Launch Strategy",
    descr:
      "Getting off to the best start is key to success. Our apps always launch from the best possible place, securing their success.",
    mockup: srcMockup3,
    mockup2x: srcMockup3x2,
    bg: Bg3,
    path: Path3,
  },
  {
    id: "004",
    caption: "Marketing Strategy",
    descr:
      "All our apps are built with the future in mind. Vibe Media have proven avenues to grow your app and revenue with expertly managed ads and marketing campaigns.",
    mockup: srcMockup4,
    mockup2x: srcMockup4x2,
    bg: Bg4,
    path: Path4,
  },
  {
    id: "005",
    caption: "Turnkey, In-House Team",
    descr:
      "Vibe Media can manage your entire app presence. From customer service to publishing, from critical bug fixes to new features and from marketing to data management - we make sure someone is always looking out for what your app needs.",
    mockup: srcMockup5,
    mockup2x: srcMockup5x2,
    bg: Bg5,
    path: Path5,
  },
  {
    id: "006",
    caption: "Proven Results",
    descr:
      "We work with the right influencers to create world-class, high revenue apps. Our Apps are some of the most successful and well received health and fitness apps in the world.",
    mockup: srcMockup6,
    mockup2x: srcMockup6x2,
    bg: Bg6,
  },
];

const sliderSettings = {
  dots: false,
  slidesToShow: 1,
  speed: 3000,
  autoplaySpeed: 6000,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
};

export default function FeaturesList() {
  return (
    <section className="section section--festures">
      <div className="container">
        <h2 className="h-2">What we do</h2>
        <Box className="features">
          {featuresData.map((it, idx) => (
            <div key={it.id} className="feature">
              <it.bg className="feature__gradient-bg" />
              {it?.path && <it.path className="feature__path" />}
              <ScrollAnimation
                effect={idx % 2 ? "fadeInScreenRight" : "fadeInScreenLeft"}
                duration={1500}
              >
                <div className="feature__mockup">
                  <img
                    src={it.mockup}
                    srcSet={`${it.mockup2x} 2x`}
                    alt={it.caption}
                  />
                  {it.id === "001" && <Video feature={it} />}
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                tag="span"
                effect={idx % 2 ? "fadeInLeft" : "fadeInRight"}
                className="feature__numb"
              >
                {++idx}
              </ScrollAnimation>
              <div className="feature__info">
                <ScrollAnimation
                  effect={idx % 2 ? "fadeInLeft" : "fadeInRight"}
                >
                  <h5 className="h-4">{it.caption}</h5>
                </ScrollAnimation>

                <ScrollAnimation
                  effect={idx % 2 ? "fadeInLeft" : "fadeInRight"}
                >
                  <p className="feature__descr">{it.descr}</p>
                </ScrollAnimation>
              </div>
            </div>
          ))}
        </Box>
        <Box className="slider--festures">
          <Slider className='slider' {...sliderSettings}>
            {featuresData.map((it, idx) => (
              <div key={it.id} className="feature">
                <it.bg className="feature__gradient-bg" />
                {it?.path && <it.path className="feature__path" />}
                <ScrollAnimation
                  effect={idx % 2 ? "fadeInScreenRight" : "fadeInScreenLeft"}
                  duration={1500}
                >
                  <div className="feature__mockup">
                    <img
                      src={it.mockup}
                      srcSet={`${it.mockup2x} 2x`}
                      alt={it.caption}
                    />
                    {it.id === "001" && <Video feature={it} />}
                  </div>
                </ScrollAnimation>
                <ScrollAnimation
                  tag="span"
                  effect={idx % 2 ? "fadeInLeft" : "fadeInRight"}
                  className="feature__numb"
                >
                  {++idx}
                </ScrollAnimation>
                <div className="feature__info">
                  <ScrollAnimation
                    effect={idx % 2 ? "fadeInLeft" : "fadeInRight"}
                  >
                    <h5 className="h-4">{it.caption}</h5>
                  </ScrollAnimation>

                  <ScrollAnimation
                    effect={idx % 2 ? "fadeInLeft" : "fadeInRight"}
                  >
                    <p className="feature__descr">{it.descr}</p>
                  </ScrollAnimation>
                </div>
              </div>
            ))}
          </Slider>
        </Box>
      </div>
    </section>
  );
}
