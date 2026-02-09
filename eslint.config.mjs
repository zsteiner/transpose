import nextConfig from 'eslint-config-next';

const eslintConfig = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**'],
  },
  ...nextConfig,
];

export default eslintConfig;
