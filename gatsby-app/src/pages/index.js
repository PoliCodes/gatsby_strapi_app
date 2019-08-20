import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import "../styles/global.css"  
import SEO from "../components/seo"
import Header from "../components/header";
// import Image from "../components/image"

const IndexPage = ({data}) => ( 
  <Layout>
    <SEO title="Home" />
    <p>Welcome to your new Gatsby site.</p>
    <ul className="home">
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>
              {document.node.title}
            </Link>
          </h2>

          <Img fixed={document.node.image.childImageSharp.fixed}/>    

          <p>
            {document.node.content}
          </p>
        </li>
      ))}
    </ul>    
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
    query IndexQuery{
      allStrapiArticle{
        edges{
          node{
            id
            image{
              childImageSharp{
                fixed(width: 200, height: 125){
                  ...GatsbyImageSharpFixed
                }
              }
            }
            title
            content            
          }
        }
      }
    }
`