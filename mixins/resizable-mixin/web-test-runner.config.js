const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/mixins/resizable-mixin/*'],
    threshold: {
      statements: 97,
      branches: 85,
      functions: 87,
      lines: 97
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/resizable-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
