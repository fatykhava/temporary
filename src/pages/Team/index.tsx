import { Grid } from "@mui/material";

import ScrollAnimation from "../../components/_common/ScrollAnimation";
import Layout from "../../components/layout/Layout";
import TeamMember from "../../components/TeamMember";
import srcHeroBg from "../../assets/images/team/team-bg.png";

import "./style.scss";
import { teamData } from "../../core/const/team";

function Team() {
  return (
    <Layout headerTheme="dark" className="page-team" back="/" title="Team">
      <ScrollAnimation isEaseOut effect="fadeIn" duration={4000}>
        <img src={srcHeroBg} alt="Team" className="team__hero-bg" />
      </ScrollAnimation>
      <div className="container">
        <div className="team__hero">
          <h1 className="h-1">Our Team</h1>
          <p>
            Boutique team which focuses on quality over quantity. Our team is on
            a mission to change the fitness app space for hand chosen
            influencers.
          </p>
        </div>
        <Grid container direction="row" spacing={2} className="teamlist">
          {teamData.map((member) => (
            <Grid key={member.id} item xs={12} sm={6} lg={4}>
              <ScrollAnimation isEaseOut effect="scale">
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
      </div>
    </Layout>
  );
}

export default Team;
