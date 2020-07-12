const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/mixins/checked-state-mixin/*'],
    threshold: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/checked-state-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
