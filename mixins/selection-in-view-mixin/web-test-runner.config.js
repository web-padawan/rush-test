const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/mixins/selection-in-view-mixin/*'],
    threshold: {
      statements: 100,
      branches: 100,
      functions: 85,
      lines: 100
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/selection-in-view-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
