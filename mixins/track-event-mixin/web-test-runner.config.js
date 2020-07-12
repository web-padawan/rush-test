const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/mixins/track-event-mixin/*'],
    threshold: {
      statements: 99,
      branches: 86,
      functions: 95,
      lines: 99
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/track-event-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
