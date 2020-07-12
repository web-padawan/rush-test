const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/mixins/keyboard-mixin/*'],
    threshold: {
      statements: 100,
      branches: 100,
      functions: 50,
      lines: 100
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/keyboard-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
