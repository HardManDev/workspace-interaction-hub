module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
  ],
  extends: [
    'eslint:recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // General formatting rules
    "eol-last": ["error", "always"],
    "indent": ["error", 4],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],

    // Code style and structure rules
    "arrow-parens": ["error", "always"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "comma-dangle": ["error", "never"],
    "curly": ["error", "all"],
    "func-style": ["error", "expression"],
    "no-shadow": "warn",
    "no-useless-concat": "error",
    "object-curly-spacing": ["error", "always"],
    "space-before-blocks": ["error", "always"],

    // Import and export rules
    "import/order": [
      "warn",
      {
        "groups": [
          ["builtin", "external"],
          "internal"
        ],
        "newlines-between": "always"
      }
    ],
    "import/no-unresolved": "off",

    // TypeScript-specific rules
    "@typescript-eslint/array-type": ["error", { "default": "generic" }],
    "@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "explicit" }],
    "@typescript-eslint/explicit-module-boundary-types": "error",

    // Variable and async handling rules
    "no-unused-vars": ["warn", { "vars": "all", "args": "none" }],
    "prefer-const": "error",
    "require-await": "error",

    // Debugging and logging rules
    "no-console": "error",
    "no-debugger": "error",

    // NestJS
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
