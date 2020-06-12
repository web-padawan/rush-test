module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 100,
      branches: 85,
      functions: 100,
      lines: 100
    }
  },
  devServer: {
    nodeResolve: true,
    rootDir: '../../',
    moduleDirs: ['node_modules', './mixins/slotted-items-mixin/node_modules']
  }
};
