const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/mixins/roving-tabindex-mixin/*'],
    threshold: {
      statements: 100,
      branches: 88,
      functions: 100,
      lines: 100
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/roving-tabindex-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
