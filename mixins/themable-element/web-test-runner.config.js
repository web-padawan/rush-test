const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 100,
      branches: 92,
      functions: 100,
      lines: 100
    }
  },
  devServer: {
    compatibility: 'none',
    nodeResolve: true,
    rootDir: '../../',
    moduleDirs: ['node_modules', './mixins/themable-element/node_modules'],
    plugins: [esbuildPlugin({ ts: true })]
  }
};
