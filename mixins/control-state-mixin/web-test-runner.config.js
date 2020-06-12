module.exports = {
  coverage: true,
  coverageConfig: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 96,
      branches: 88,
      functions: 93,
      lines: 96
    }
  },
  devServer: {
    nodeResolve: true,
    rootDir: '../../',
    moduleDirs: ['node_modules', './mixins/control-state-mixin/node_modules']
  }
};
