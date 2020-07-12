const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/mixins/control-state-mixin/*'],
    threshold: {
      statements: 94,
      branches: 100,
      functions: 93,
      lines: 94
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/control-state-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
