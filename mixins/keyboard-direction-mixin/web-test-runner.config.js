module.exports = {
  coverage: true,
  coverageConfig: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 98,
      branches: 90,
      functions: 100,
      lines: 98
    }
  },
  devServer: {
    nodeResolve: true,
    rootDir: '../../',
    moduleDirs: ['node_modules', './mixins/keyboard-direction-mixin/node_modules']
  }
};
