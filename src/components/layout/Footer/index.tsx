import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { ReactComponent as IconFB } from '../../../assets/images/facebook.svg';
import { ReactComponent as IconTW } from '../../../assets/images/twitter.svg';
import { ReactComponent as IconIG } from '../../../assets/images/instagram.svg';
import { ReactComponent as IconYT } from '../../../assets/images/youtube.svg';
import { ReactComponent as Polygon } from '../../../assets/images/polygon.svg';

import './style.scss';
import { SliderType } from '../../../type';

const CustomSlider = withStyles({
  root: {
    height: 4,
    margin: '56px 0',
    color: 'transparent',
  },
  thumb: {
    height: 28,
    width: 26,
    backgroundColor: 'transparent',
    border: 'none',
    marginTop: -12,
    marginLeft: -13,
    '& .thumb__value': {
      position: 'absolute',
      top: -40,
      padding: '8px 16px',
      background: '#FFFFFF',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
      borderRadius: 22,
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1,
      color: 'rgba(59,69,84,0.8)',
    },
    '& .polygon': {
      backgroundColor: 'transparent',
    },
  },
  active: {},
  markLabel: {
    left: '0!important',
    position: 'absolute',
    transform: 'none !important',
    fontSize: 16,
    fontWeight: 700,
    paddingTop: 4,
    color: 'rgba(255,255,255,0.8)',
    "&[data-index='1']": {
      right: '0 !important',
      left: 'auto !important',
    },
  },
  track: {
    height: 4,
  },
  rail: {
    color: '#505D70',
    opacity: 1,
    height: 4,
  },
})(Slider);

function CustomThumbComponent(props: any) {
  return (
    <span {...props}>
      <span className="thumb__value">
        {props['aria-labelledby']}
        {props['aria-valuenow']}
      </span>
      <Polygon className="thumb__polygon" />
    </span>
  );
}

export default function Footer() {
  const [sliders, setValue] = React.useState<any>({
    [SliderType.followers]: 10000,
    [SliderType.price]: 14.99,
  });

  const handleChange = (
    event: any,
    newValue: number | number[],
    sliderName: string
  ) => {
    setValue({ ...sliders, [sliderName]: newValue });
  };
  return (
    <footer className="footer">
      <section className="footer__section">
        <h2 className="h-2">Let’s count a bit</h2>
        <div className="footer__followers">
          <p>
            Number of <span className="text-bold">followers</span>
          </p>
          <div className="socials">
            {[
              {
                link: 'https://www.instagram.com/strongherapp/',
                icon: <IconIG className="icon" />,
              },
              {
                link: 'https://www.youtube.com/channel/UCnDAy62_O8ruHOIKKdnzHuQ',
                icon: <IconYT className="icon" />,
              },
              {
                link: 'https://www.facebook.com/appstrongher/',
                icon: <IconFB className="icon" />,
              },
              {
                link: 'twitter.com',
                icon: <IconTW className="icon" />,
              },
            ].map((it, idx) => (
              <a
                key={idx}
                href={it.link}
                className="socials__link"
                target="_blanc"
              >
                {it.icon}
              </a>
            ))}
          </div>
        </div>
        <CustomSlider
          ThumbComponent={CustomThumbComponent}
          marks={[
            {
              value: 0,
              label: '1,000',
            },
            {
              value: 100,
              label: '1,000,000',
            },
          ]}
          defaultValue={[sliders[SliderType.followers]]}
          min={1000}
          max={1000000}
          onChange={(event, newValue) =>
            handleChange(event, newValue, SliderType.followers)
          }
        />
        <p>
          Monthly subscription <span className="text-bold">price</span>
        </p>
        <CustomSlider
          ThumbComponent={CustomThumbComponent}
          marks={[
            {
              value: 0,
              label: '$14,99',
            },
            {
              value: 100,
              label: '$49,99',
            },
          ]}
          defaultValue={[sliders[SliderType.price]]}
          min={14.99}
          max={49.99}
          aria-labelledby="$"
          onChange={(event, newValue) =>
            handleChange(event, newValue, SliderType.price)
          }
        />
        <p>
          <span className="text-bold">
            You could earn between $
            {Math.round(
              (sliders[SliderType.followers] * sliders[SliderType.price]) / 100
            )}{' '}
            and $
            {Math.round(
              ((sliders[SliderType.followers] * sliders[SliderType.price]) /
                100) *
                5
            )}{' '}
            per month*
          </span>
        </p>
        <p className="text--explanation">
          *Based on estimate of between 1% and 5% of your followers subscribing.
        </p>
      </section>
      <section className="footer__section">
        <h2 className="h-2">Let's Work Together</h2>
        <p className="text--work-together">
          Ready to take your fitness brand to the next level? <br /> Shoot us a
          note at <a href="mailto:bill@vibemedia.app">bill@vibemedia.app</a> and
          we’ll schedule a meeting to answer all your questions.
        </p>
      </section>
    </footer>
  );
}
