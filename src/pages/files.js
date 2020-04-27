import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import {graphql} from "gatsby"

const FilesPage = ({data}) => (
  <Layout>
    <SEO title="Files" />
    <h1>Files</h1>
    <ul>
        {data.allFile.edges.map(({node})=><li>
            {node.name} - {node.size} - {node.source} - {node.birthTime}
        </li>)}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
query MyQuery {
    allFile {
      edges {
        node {
          name
          sourceInstanceName
          birthTime(fromNow: true)
          size
        }
      }
    }
  }
  `


export default FilesPage
