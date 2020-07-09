const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/node_modules/**', '**/test/unit/track-helpers.*'],
    threshold: {
      statements: 97,
      branches: 81,
      functions: 100,
      lines: 97
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './components/split-layout/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
