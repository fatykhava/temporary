import { Box, Button, Grid } from '@material-ui/core';

import Layout from '../../components/layout/Layout';
import Hero from '../../components/Hero';
import TeamMember from '../../components/TeamMember';
import FeaturesList from '../../components/FeaturesList';
import ScrollAnimation from '../../components/_common/ScrollAnimation';
import { teamData } from '../Team';
import { ReactComponent as GradientBg1 } from '../../assets/images/gradient-bg1.svg';
import phonePersp1 from '../../assets/images/phone_persp1.png';
import phonePersp2 from '../../assets/images/phone_persp2.png';
import phonePersp3 from '../../assets/images/phone_persp3.png';
import phonePersp1x2 from '../../assets/images/phone_persp1@2x.png';
import phonePersp2x2 from '../../assets/images/phone_persp2@2x.png';
import phonePersp3x2 from '../../assets/images/phone_persp3@2x.png';
import './style.scss';

const teamDataSliced = teamData.slice(0, 3);
function Home() {
  return (
    <Layout className="page-home">
      <Hero />

      <FeaturesList />

        <section className="section" id="examples">
          <div className="container">
            <h2 className="h-2">App Design Examples</h2>
            <Box className="examples">
              <ScrollAnimation
                isEaseOut
                className="examples__blotch"
                effect="scale"
                duration={4000}
              >
                <GradientBg1 className="examples__blotch-svg" />
              </ScrollAnimation>

              <ScrollAnimation
                effect="fadeInBottomSmall"
                className="examples__pic-list"
              >
                <img
                  src={phonePersp1}
                  srcSet={`${phonePersp1x2} 2x`}
                  alt="Phone Perspective"
                />
                <img
                  src={phonePersp2}
                  srcSet={`${phonePersp2x2} 2x`}
                  alt="Phone Perspective"
                />
                <img
                  src={phonePersp3}
                  srcSet={`${phonePersp3x2} 2x`}
                  alt="Phone Perspective"
                />
              </ScrollAnimation>
            </Box>
          </div>
        </section>

        <section className="section" id="team">
          <div className="container">
            <h2 className="h-2">Our Team</h2>
            <Grid container direction="row" spacing={2} className="teamlist">
              {teamDataSliced.map((member, idx) => (
                <Grid key={member.id} item xs={12} sm={6} lg={4}>
                  <ScrollAnimation effect="scale" delay={idx * 150}>
                    <TeamMember
                      name={member.name}
                      avatar={member.avatar}
                      avatarSrcset={member.avatarSrcset}
                      position={member.position}
                    />
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>
            <ScrollAnimation effect="scale">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  href="/team"
                >
                  Check all team out
                </Button>
              </Box>
            </ScrollAnimation>
          </div>
        </section>
    </Layout>
  );
}

export default Home;
