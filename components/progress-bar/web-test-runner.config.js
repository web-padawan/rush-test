module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  devServer: {
    compatibility: 'none',
    nodeResolve: true,
    rootDir: '../../',
    moduleDirs: ['node_modules', './components/progress-bar/node_modules']
  }
};
