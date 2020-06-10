const path = require(`path`);
const contentfulPathResolver = require('./gatsby/utils/contentfulPathResolver');
const { createResolvers } = require('./gatsby/create-resolvers');

exports.createResolvers = createResolvers;
const createPageWithLocales = (
  page,
  { deletePage, createPage },
  withDelete = false
) => {
  return new Promise(resolve => {
    const newPath = page.path;

    const newPage = {
      ...page,
      path: `/en${newPath}`,
      context: { ...page.context, locale: 'en-US' },
    };
    const newPage2 = {
      ...page,
      path: newPath,
      context: { ...page.context, locale: 'sv-SE' },
    };
    if (withDelete) {
      deletePage(page);
    }
    createPage(newPage);
    createPage(newPage2);
    resolve();
  });
};

const webshopDevices = async graphql => {
  const result = await graphql(`
    {
      treApi {
        webshopDevices(customerType: consumer, deviceType: phone) {
          products {
            id
            urlSlug
            brand
            model
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  return result.data.treApi.webshopDevices.products || [];
};

// const getDeviceData = async (urlRegex, graphql) => {
//   const products = await webshopDevices(graphql)

//   const pages = products.map(product => {
//     const devicePath = contentfulPathResolver(urlRegex, {
//       ...product,
//       type: 'mobiltelefoner',
//     })

//     return {
//       path: devicePath,
//       context: product,
//       component: templates.device,
//     }
//   })

//   return pages
// }

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      treApi {
        contentPages {
          id
          urlRegex
          blocks {
            type
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const isDevicePage = blocks =>
    blocks.some(block => block.type === 'devicedetails');

  const isProductListPage = blocks =>
    blocks.some(block => block.type === 'productlist');

  return Promise.all(
    result.data.treApi.contentPages.map(async page => {
      const { blocks, urlRegex, ...rest } = page;

      let path = urlRegex;

      if (path.includes('massesandbox')) return;
      if (path.includes('cizzi')) return;
    })
  );
};

// You can delete this file if you're not using it
exports.onCreatePage = ({ page, actions }) => {
  if (page.path.includes('404')) {
    return Promise.resolve();
  }

  return createPageWithLocales(page, actions, true);
};
