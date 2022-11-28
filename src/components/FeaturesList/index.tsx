import videMp4 from '../../assets/video/workout.mp4';
import videoOgv from '../../assets/video/workout.ogv';
import videoWebm from '../../assets/video/workout.webm';
import srcMockup1 from '../../assets/images/features/mockup1.png';
import srcMockup2 from '../../assets/images/features/mockup2.png';
import srcMockup3 from '../../assets/images/features/mockup3.png';
import srcMockup4 from '../../assets/images/features/mockup4.png';
import srcMockup5 from '../../assets/images/features/mockup5.png';
import srcMockup6 from '../../assets/images/features/mockup6.png';
import srcMockup7 from '../../assets/images/features/mockup7.png';
import srcMockup1x2 from '../../assets/images/features/mockup1@2x.png';
import srcMockup2x2 from '../../assets/images/features/mockup2@2x.png';
import srcMockup3x2 from '../../assets/images/features/mockup3@2x.png';
import srcMockup4x2 from '../../assets/images/features/mockup4@2x.png';
import srcMockup5x2 from '../../assets/images/features/mockup5@2x.png';
import srcMockup6x2 from '../../assets/images/features/mockup6@2x.png';
import srcMockup7x2 from '../../assets/images/features/mockup7@2x.png';
import { ReactComponent as Bg1 } from '../../assets/images/features/gradient-bg1.svg';
import { ReactComponent as Bg2 } from '../../assets/images/features/gradient-bg2.svg';
import { ReactComponent as Bg3 } from '../../assets/images/features/gradient-bg3.svg';
import { ReactComponent as Bg4 } from '../../assets/images/features/gradient-bg4.svg';
import { ReactComponent as Bg5 } from '../../assets/images/features/gradient-bg5.svg';
import { ReactComponent as Bg6 } from '../../assets/images/features/gradient-bg6.svg';
import { ReactComponent as Bg7 } from '../../assets/images/features/gradient-bg7.svg';
import { ReactComponent as Path1 } from '../../assets/images/features/path1.svg';
import { ReactComponent as Path2 } from '../../assets/images/features/path2.svg';
import { ReactComponent as Path3 } from '../../assets/images/features/path3.svg';
import { ReactComponent as Path4 } from '../../assets/images/features/path4.svg';
import { ReactComponent as Path5 } from '../../assets/images/features/path5.svg';
import { ReactComponent as Path6 } from '../../assets/images/features/path6.svg';

import './style.scss';
import { Box } from '@material-ui/core';
import ScrollAnimation from '../_common/ScrollAnimation';
import Video from '../_common/Video';

const featuresData = [
  {
    id: '001',
    videoMp4: videMp4,
    videoOgv: videoOgv,
    videoWebm: videoWebm,
    caption: 'App User Design',
    descr:
      'Discuss your vision, audience, and storyboard ideas to create human-centered designs that users love.',
    mockup: srcMockup1,
    mockup2x: srcMockup1x2,
    bg: Bg1,
    path: Path1,
  },
  {
    id: '002',
    caption: 'Brand Development',
    descr:
      'Devise a tailor-made brand strategy to generate greater brand engagement, conversions, and measurable results for your business.',
    mockup: srcMockup2,
    mockup2x: srcMockup2x2,
    bg: Bg2,
    path: Path2,
  },
  {
    id: '003',
    caption: 'App Development',
    descr:
      'Discuss your vision, audience, and storyboard ideas to create human-centered designs that users love.',
    mockup: srcMockup3,
    mockup2x: srcMockup3x2,
    bg: Bg3,
    path: Path3,
  },
  {
    id: '004',
    caption: 'Launch Strategy',
    descr:
      'Develop a bulletproof launch strategy paired with nimble execution to achieve your marketing goals from awareness to advocacy.',
    mockup: srcMockup4,
    mockup2x: srcMockup4x2,
    bg: Bg4,
    path: Path4,
  },
  {
    id: '005',
    caption: 'Marketing Strategy',
    descr:
      'Craft a well thought out marketing strategy to influence prospects, engage customers, and nurture leads from simple inquiries to a committed relationship via all social media platforms.',
    mockup: srcMockup5,
    mockup2x: srcMockup5x2,
    bg: Bg5,
    path: Path5,
  },
  {
    id: '006',
    caption: 'Analytics and Data Mining',
    descr:
      'We use data and analytics to monitor your app’s performance and optimize it to maximize results.',
    mockup: srcMockup6,
    mockup2x: srcMockup6x2,
    bg: Bg6,
    path: Path6,
  },
  {
    id: '007',
    caption: 'User Feedback Support',
    descr:
      'We’ll support you to handle app operations and begin iterating with new features based on feedback from your customers.',
    mockup: srcMockup7,
    mockup2x: srcMockup7x2,
    bg: Bg7,
  },
];
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
                effect={idx % 2 ? 'fadeInScreenRight' : 'fadeInScreenLeft'}
                duration={1500}
              >
                <div className="feature__mockup">
                  <img
                    src={it.mockup}
                    srcSet={`${it.mockup2x} 2x`}
                    alt={it.caption}
                  />
                  {it.id === '001' && <Video feature={it} />}
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                tag="span"
                effect={idx % 2 ? 'fadeInLeft' : 'fadeInRight'}
                className="feature__numb"
              >
                {++idx}
              </ScrollAnimation>
              <div className="feature__info">
                <ScrollAnimation
                  effect={idx % 2 ? 'fadeInLeft' : 'fadeInRight'}
                >
                  <h5 className="h-4">{it.caption}</h5>
                </ScrollAnimation>

                <ScrollAnimation
                  effect={idx % 2 ? 'fadeInLeft' : 'fadeInRight'}
                >
                  <p className="feature__descr">{it.descr}</p>
                </ScrollAnimation>
              </div>
            </div>
          ))}
        </Box>
      </div>
    </section>
  );
}
