import { graphql } from "gatsby"
import { arrayOf, shape, string, object } from "prop-types"

export const ProjectType = {
  description: string,
  icons: shape({
    github: string,
    website: string,
  }),
  image: shape({
    childImageSharp: object.isRequired,
  }),
  name: string.isRequired,
  status: string,
  tags: arrayOf(string),
  url: string,
}

export const query = graphql`
  fragment ProjectFragment on ProjectsYaml {
    description
    icons {
      website
      github
    }
    image {
      childImageSharp {
        fluid(maxWidth: 640, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    name
    status
    tags
    url
  }
`
