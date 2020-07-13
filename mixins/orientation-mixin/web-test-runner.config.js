const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/mixins/orientation-mixin/*'],
    threshold: {
      statements: 93,
      branches: 100,
      functions: 83,
      lines: 93
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/orientation-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
