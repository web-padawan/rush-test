const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 95,
      branches: 61,
      functions: 100,
      lines: 95
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/checked-state-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
