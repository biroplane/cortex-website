module.exports = {
  env: {
    browser: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },

  parserOptions: {
    ecmaVersion: 12,
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    sourceType: "module",
  },
  extends: [
    "plugin:vue/base",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/require-default-prop": "off",
    "vue/script-setup-uses-vars": "error",
    "vue/no-unused-vars": [
      "error",
      {
        ignorePattern: "^_",
      },
    ],
  },
};
