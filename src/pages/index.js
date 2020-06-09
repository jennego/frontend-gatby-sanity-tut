import React from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

const serializers = {
  types: {
    code: props => (
      <pre> (JSON.stringify(props, null, 2) </pre>
      // <pre data-language={props.node.language}>
      //   <code>{props.node.code}</code>
      // </pre>
    ),
  },
}

const Index = ({ data }) => (
  <div>
    {data.allSanityBlogPost.edges.map(({ node }) => (
      <div key={node.id}>
        <h1> {node.name} </h1>
        <BlockContent blocks={node._rawBody} serializers={serializers} />
        {console.log(node)}
      </div>
    ))}
  </div>
)
export const query = graphql`
  {
    allSanityBlogPost {
      edges {
        node {
          _rawBody
          name
          sponsor {
            name
            url
          }
          id
        }
      }
    }
  }
`

export default Index
