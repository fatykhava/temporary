import { Box, Button } from "@material-ui/core";

import Studio from "../../components/Studio";
import BestApp from "../../components/BestApp";
import Layout from "../../components/layout/Layout";
import Hero from "../../components/Hero";
import TeamSlider from "../../components/sliders/TeamSlider";
import FeaturesList from "../../components/FeaturesList";
import ScrollAnimation from "../../components/_common/ScrollAnimation";
import OfferList from "../../components/OfferList";
import OurApps from "../../components/OurApps";
import Madfit from "../../components/Madfit";

import "./style.scss";

function Home() {
  return (
    <Layout className="page-home">
      <Hero />
      <FeaturesList />
      <Madfit />
      <OurApps />
      <section className="section" id="team">
        <div className="container">
          <h2 className="h-2">Our Team</h2>
          <Box className="teamlist">
            <TeamSlider />
          </Box>
          <ScrollAnimation isEaseOut effect="scale" className="button">
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
      <Studio />
      <OfferList />
      <BestApp />
    </Layout>
  );
}

export default Home;
