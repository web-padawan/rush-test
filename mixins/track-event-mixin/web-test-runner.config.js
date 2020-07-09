const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/node_modules/**'],
    threshold: {
      statements: 98,
      branches: 82,
      functions: 95,
      lines: 98
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/track-event-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
