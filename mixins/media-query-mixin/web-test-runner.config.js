module.exports = {
  coverage: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 100,
      branches: 66,
      functions: 100,
      lines: 100
    }
  },
  devServer: {
    nodeResolve: true,
    rootDir: '../../',
    moduleDirs: ['node_modules', './mixins/media-query-mixin/node_modules']
  }
};
