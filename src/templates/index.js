import { graphql } from "gatsby";
import React from "react";
import "../styles/style.css";
import ReactTooltip from "react-tooltip";
import CustomFonts from "../components/custom-fonts/custom-fonts";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import MainContent from "../components/main-content/main-content";
import SEO from "../components/seo/seo";
import Sidebar from "../components/sidebar/sidebar";
import StructuredData from "../components/structured-data/structured-data";
import Particles from "react-particles-js";
import { CONFIG } from "./ts-particle.config";

const IndexPage = ({ data }) => {
  const { history, profile, projects, site, social } = data;

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <SEO />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />

      <Particles
        style={{ position: "fixed", top: 0, left: 0, zIndex: 0 }}
        width={"100vw"}
        height={"100vh"}
        params={CONFIG}
      />

      <ReactTooltip
        effect="solid"
        place="top"
        type="info"
        backgroundColor="#101010E6"
        className="z-100"
      />

      <Header initials={profile.initials} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />

        <MainContent
          history={history.nodes}
          profile={profile}
          projects={projects.nodes}
        />
      </div>

      <Footer
        name={profile.name}
        showThemeLogo={site.siteMetadata.showThemeLogo}
      />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        showThemeLogo
      }
    }
    profile: profileYaml {
      ...ProfileFragment
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    history: allWorkHistoryYaml {
      nodes {
        ...WorkHistoryFragment
      }
    }
    projects: allProjectsYaml {
      nodes {
        ...ProjectFragment
      }
    }
  }
`;
