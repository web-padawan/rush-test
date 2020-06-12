module.exports = {
  coverage: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 90,
      branches: 100,
      functions: 80,
      lines: 90
    }
  },
  devServer: {
    nodeResolve: true,
    rootDir: '../../',
    moduleDirs: ['node_modules', './mixins/orientation-mixin/node_modules']
  }
};
