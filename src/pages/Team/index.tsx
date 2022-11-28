import { Grid } from '@material-ui/core';

import ScrollAnimation from '../../components/_common/ScrollAnimation';
import Layout from '../../components/layout/Layout';
import TeamMember from '../../components/TeamMember';
import srcHeroBg from '../../assets/images/team/team-bg.png';
import memberAva1 from '../../assets/images/team/maksim.png';
import memberAva2 from '../../assets/images/team/bill.png';
import memberAva3 from '../../assets/images/team/markus.png';
import memberAva4 from '../../assets/images/team/hazar.png';
import memberAva5 from '../../assets/images/team/igor1.png';
import memberAva6 from '../../assets/images/team/igor.png';
import memberAva7 from '../../assets/images/team/jenny.png';
import memberAva8 from '../../assets/images/team/kate.png';
import memberAva9 from '../../assets/images/team/lee.png';
import memberAva10 from '../../assets/images/team/livi.png';
import memberAva11 from '../../assets/images/team/pamela.png';
import memberAva12 from '../../assets/images/team/ruby.png';
import memberAva13 from '../../assets/images/team/russel.png';
import memberAva14 from '../../assets/images/team/vlad.png';
import memberAva15 from '../../assets/images/team/vlad1.png';
import memberAva1x2 from '../../assets/images/team/maksim@2x.png';
import memberAva2x2 from '../../assets/images/team/bill@2x.png';
import memberAva3x2 from '../../assets/images/team/markus@2x.png';
import memberAva4x2 from '../../assets/images/team/hazar@2x.png';
import memberAva5x2 from '../../assets/images/team/igor1@2x.png';
import memberAva6x2 from '../../assets/images/team/igor@2x.png';
import memberAva7x2 from '../../assets/images/team/jenny@2x.png';
import memberAva8x2 from '../../assets/images/team/kate@2x.png';
import memberAva9x2 from '../../assets/images/team/lee@2x.png';
import memberAva10x2 from '../../assets/images/team/livi@2x.png';
import memberAva11x2 from '../../assets/images/team/pamela@2x.png';
import memberAva12x2 from '../../assets/images/team/ruby@2x.png';
import memberAva13x2 from '../../assets/images/team/russel@2x.png';
import memberAva14x2 from '../../assets/images/team/vlad@2x.png';
import memberAva15x2 from '../../assets/images/team/vlad1@2x.png';

import './style.scss';

export const teamData = [
  {
    id: '001',
    name: 'Maksim',
    position: 'Conversion Optimising Specialist',
    avatar: memberAva1,
    avatarSrcset: memberAva1x2,
  },
  {
    id: '002',
    name: 'Bill',
    position: 'Team Owner',
    avatar: memberAva2,
    avatarSrcset: memberAva2x2,
  },
  {
    id: '003',
    name: 'Markus',
    position: 'Products & Growth',
    avatar: memberAva3,
    avatarSrcset: memberAva3x2,
  },
  {
    id: '004',
    name: 'Hazar',
    position: 'DevOps',
    avatar: memberAva4,
    avatarSrcset: memberAva4x2,
  },
  {
    id: '005',
    name: 'Igor',
    position: 'Motion Graphics',
    avatar: memberAva5,
    avatarSrcset: memberAva5x2,
  },
  {
    id: '006',
    name: 'Igor',
    position: 'Chief Technical Officer',
    avatar: memberAva6,
    avatarSrcset: memberAva6x2,
  },
  {
    id: '007',
    name: 'Jenny',
    position: 'Customer Support',
    avatar: memberAva7,
    avatarSrcset: memberAva7x2,
  },
  {
    id: '008',
    name: 'Kate',
    position: 'Data Analyst',
    avatar: memberAva8,
    avatarSrcset: memberAva8x2,
  },
  {
    id: '009',
    name: 'Lee',
    position: 'Software Engineer',
    avatar: memberAva9,
    avatarSrcset: memberAva9x2,
  },
  {
    id: '010',
    name: 'Livi',
    position: 'Brand Development Content Specialist',
    avatar: memberAva10,
    avatarSrcset: memberAva10x2,
  },
  {
    id: '011',
    name: 'Pamela',
    position: 'Administrator',
    avatar: memberAva11,
    avatarSrcset: memberAva11x2,
  },
  {
    id: '012',
    name: 'Ruby',
    position: 'Motion Graphic Design',
    avatar: memberAva12,
    avatarSrcset: memberAva12x2,
  },
  {
    id: '013',
    name: 'Russel',
    position: 'Direct Response Marketing',
    avatar: memberAva13,
    avatarSrcset: memberAva13x2,
  },
  {
    id: '014',
    name: 'Vlad',
    position: 'iOS Engeneer',
    avatar: memberAva14,
    avatarSrcset: memberAva14x2,
  },
  {
    id: '015',
    name: 'Vlad',
    position: 'Chief Marketing Officer',
    avatar: memberAva15,
    avatarSrcset: memberAva15x2,
  },
];

function Team() {
  return (
    <Layout headerTheme="dark" className="page-team" back="/">
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
              <ScrollAnimation effect="scale">
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
