const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/mixins/media-query-mixin/*'],
    threshold: {
      statements: 98,
      branches: 92,
      functions: 100,
      lines: 98
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/media-query-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
