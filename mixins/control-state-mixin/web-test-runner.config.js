const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/.pnpm/**'],
    threshold: {
      statements: 97,
      branches: 83,
      functions: 94,
      lines: 97
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/control-state-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
