const { compile } = require('path-to-regexp');

const encodeUrl = str => str.replace(/\s+/g, '-').toLowerCase();

const contentfulPathResolver = (path, options) =>
  compile(path, { encode: encodeUrl })(options);

module.exports = contentfulPathResolver;
