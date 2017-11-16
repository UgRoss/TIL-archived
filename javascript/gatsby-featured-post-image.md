# Featured post image in GatsbyJS using markdown variables
If you want to have featured post image in same folder with post or just want to be able to retrieve image with GraphQL query it can be done with help of [gatsby-plugin-sharp](https://www.npmjs.com/package/gatsby-plugin-sharp).

1. Install [gatsby-plugin-sharp](https://www.npmjs.com/package/gatsby-plugin-sharp) and include it in `gatsby-config.js`.

2. Include needed image inside markdown file. It can be done so:
```markdown
---
title: My Post
date: "2017-05-28T22:40:32.169Z"
img: ./demo.jpg
---
```
3. Add to your GraphQL query image 
```javasciprt
image {
  childImageSharp {
    responsiveResolution(...args) {
      src
    }
  }
}
```
It can be like:
```
allMarkdownRemark() {
  edges {
    node {
      excerpt
      frontmatter {
        path
        date(formatString: "DD MMMM, YYYY")
        type
        title
        img {
          childImageSharp {
            responsiveResolution(width: 600) {
              src
            }
          }
        }
      }
    }
  }
}
```

