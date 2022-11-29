import Slider from "react-slick";
import ScrollAnimation from "../_common/ScrollAnimation";
import TeamMember from "../TeamMember";

import { teamData } from "../../core/const/team";
import { ReactComponent as ArrowSVG } from "../../assets/images/arrow.svg";

import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const NextArrow = (props: any) => {
  const { className, style, onClick, children } = props;
  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick, children } = props;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

const sliderSettings = {
  dots: false,
  slidesToShow: 3,
  speed: 1500,
  autoplaySpeed: 6000,
  slidesToScroll: 1,
  infinite: true,
  centerMode: true,
  centerPadding: "0px",
  initialSlide: 1,
  className: "team__slider",
  nextArrow: (
    <NextArrow>
      <ArrowSVG />
    </NextArrow>
  ),
  prevArrow: (
    <PrevArrow>
      <ArrowSVG />
    </PrevArrow>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        fade: true,
        speed: 500,
      },
    },
  ],
};

export default function TeamSlider() {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <Slider {...sliderSettings} ref={sliderRef}>
      {teamData.map((member, idx) => (
        <ScrollAnimation key={member.id} effect="scale" delay={idx * 150}>
          <TeamMember
            name={member.name}
            avatar={member.avatar}
            avatarSrcset={member.avatarSrcset}
            position={member.position}
          />
        </ScrollAnimation>
      ))}
    </Slider>
  );
}
