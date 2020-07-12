const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    include: ['**/mixins/themable-element/*'],
    threshold: {
      statements: 100,
      branches: 66,
      functions: 100,
      lines: 100
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/themable-element/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
