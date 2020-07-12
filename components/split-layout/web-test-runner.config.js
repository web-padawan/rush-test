const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/components/split-layout/src/*'],
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
