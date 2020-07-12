const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/mixins/keyboard-direction-mixin/*'],
    threshold: {
      statements: 97,
      branches: 78,
      functions: 100,
      lines: 97
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/keyboard-direction-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
