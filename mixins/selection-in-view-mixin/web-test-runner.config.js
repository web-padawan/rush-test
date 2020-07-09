const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 97,
      branches: 100,
      functions: 85,
      lines: 97
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/selection-in-view-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
