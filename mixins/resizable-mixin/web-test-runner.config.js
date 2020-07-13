const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/mixins/resizable-mixin/*'],
    threshold: {
      statements: 100,
      branches: 92,
      functions: 100,
      lines: 100
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/resizable-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
