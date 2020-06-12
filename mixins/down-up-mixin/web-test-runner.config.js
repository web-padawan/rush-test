module.exports = {
  coverage: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 100,
      branches: 83,
      functions: 100,
      lines: 100
    }
  },
  devServer: {
    nodeResolve: true,
    rootDir: '../../',
    moduleDirs: ['node_modules', './mixins/down-up-mixin/node_modules']
  }
};
