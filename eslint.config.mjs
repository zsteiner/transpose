import nextConfig from 'eslint-config-next';

// Polyfill for structuredClone if not available
if (typeof structuredClone === 'undefined') {
  globalThis.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
}

const eslintConfig = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**'],
  },
  ...nextConfig,
];

export default eslintConfig;
