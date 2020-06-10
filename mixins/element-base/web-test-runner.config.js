module.exports = {
  coverage: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  devServer: {
    nodeResolve: true,
    rootDir: '../../',
    moduleDirs: ['node_modules', './mixins/element-base/node_modules']
  }
};
