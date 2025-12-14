/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['**/dist/**', '**/node_modules/**',],
  rules: {
    "declaration-empty-line-before": null, "value-keyword-case": null,
  },
}