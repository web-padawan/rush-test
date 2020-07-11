const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/.pnpm/**'],
    threshold: {
      statements: 100,
      branches: 91,
      functions: 100,
      lines: 100
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './mixins/browser-utils/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
