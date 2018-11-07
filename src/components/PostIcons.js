import { graphql } from "gatsby"
import React from "react"
import { FaCalendar, FaFolderOpen } from "react-icons/fa"


import { rhythm } from "../utils/typography"

export default ({ node, className = `` }) => (
  <div css={{ marginTop: rhythm(-1 / 2) }} className={className}>
    <span style={{ marginRight: rhythm(1) }}>
      <FaCalendar size={14} style={{ position: `relative`, bottom: 1 }} />
      {` `}
      {node.date}
    </span>
    {node.categories &&
      node.categories.map(category => (
        <span style={{ marginRight: rhythm(1) }} key={category.name}>
          <FaFolderOpen size={14} style={{ position: `relative`, bottom: 1 }} />
          {` `}
          {category.name}
        </span>
      ))}
    
  </div>
)

export const query = graphql`
  fragment PostIcons on wordpress__POST {
    date(formatString: "MMMM DD, YYYY")
    categories {
      name
    }
  }
`
