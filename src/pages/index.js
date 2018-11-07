import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { FaCalendar } from "react-icons/fa"

import Layout from "../layouts"
import PostIcons from "../components/PostIcons"

import { rhythm } from "../utils/typography"

class Home extends Component {
  render() {
    const data = this.props.data
	 
	
    return (
      <Layout>
        
        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div css={{ marginBottom: rhythm(2) }} key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3 dangerouslySetInnerHTML={{ __html: node.title}} />
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <PostIcons node={node} />
          </div>
        ))}
      </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    
    allWordpressPost(
				filter: {
					categories: {
							  elemMatch: { 
								name: {
							  		in: [ "pacific-papers", "black-media-trust" ]
							  } 
							 }
					}
				}
				sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          ...PostIcons
        }
      }
    }
  }
`
