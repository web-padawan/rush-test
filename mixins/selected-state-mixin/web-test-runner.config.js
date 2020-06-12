module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 100,
      branches: 87,
      functions: 100,
      lines: 100
    }
  },
  devServer: {
    compatibility: 'none',
    nodeResolve: true,
    rootDir: '../../',
    moduleDirs: ['node_modules', './mixins/selected-state-mixin/node_modules']
  }
};
