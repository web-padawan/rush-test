const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  concurrency: 4,
  coverage: true,
  coverageConfig: {
    exclude: ['**/.pnpm/**'],
    threshold: {
      statements: 96,
      branches: 71,
      functions: 100,
      lines: 96
    }
  },
  compatibility: 'none',
  nodeResolve: true,
  rootDir: '../../',
  moduleDirs: ['node_modules', './components/progress-bar/node_modules'],
  plugins: [esbuildPlugin({ ts: true })]
};
