const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;

  await createResolvers({
    treApi_WebshopImage: {
      imageFile: {
        type: 'File',
        async resolve(source) {
          let sourceUrl = source.url;
          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      },
    },
  });
};
