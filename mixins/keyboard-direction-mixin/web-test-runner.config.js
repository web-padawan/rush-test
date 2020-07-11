const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/.pnpm/**'],
    threshold: {
      statements: 98,
      branches: 90,
      functions: 100,
      lines: 98
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/keyboard-direction-mixin/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
