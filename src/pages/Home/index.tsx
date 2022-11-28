import { Button, Grid } from "@material-ui/core";

import Studio from "../../components/Studio";
import BestApp from "../../components/BestApp";
import Layout from "../../components/layout/Layout";
import Hero from "../../components/Hero";
import TeamMember from "../../components/TeamMember";
import FeaturesList from "../../components/FeaturesList";
import ScrollAnimation from "../../components/_common/ScrollAnimation";
import { teamData } from "../Team";
import "./style.scss";

const teamDataSliced = teamData.slice(0, 3);
function Home() {
  return (
    <Layout className="page-home">
      <Hero />
      <FeaturesList />
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
          <ScrollAnimation effect="scale" className="button">
            <Button
              variant="contained"
              color="primary"
              disableElevation
              href="/team"
            >
              Meet the team
            </Button>
          </ScrollAnimation>
        </div>
      </section>
      <Studio/>
      <BestApp />
    </Layout>
  );
}

export default Home;
