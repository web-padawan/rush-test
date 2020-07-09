const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 100,
      branches: 83,
      functions: 84,
      lines: 100
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/down-up-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
