const path = require('path')
const products = require('./products.json')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const { data } =await graphql(`
  query Projects {
    allProduct {
      nodes {
        slug
      }
    }
  }
  `)
  data.allProduct.nodes.forEach(node => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve('./src/templates/product-page.tsx'),
      context: {
        slug: node.slug
      }

    })
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  products.forEach(product => {
    createNode({
      ...product,
      slug: product.displayName
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, ''),
      id: createNodeId(product.id),
      internal: {
        type: 'Product',
        content: JSON.stringify(product),
        contentDigest: createContentDigest(product),
      },
    })
  })
}
