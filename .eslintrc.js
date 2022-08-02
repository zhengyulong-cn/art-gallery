module.exports = {
  // ESLint被限制到根目标下
  root: true,
  // ESLint检测的环境
  env: {
    // 浏览器环境
    browser: true,
    // node环境
    node: true,
    // ES6+环境
    es2021: true,
  },
  // 需要继承的配置
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
  // 解析器选项
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 解析的ES版本
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    // parser: "babel-eslint",
  },
  // 需要修改的启用规则及错误级别
  /**
   * 错误级别分为三种：
   * off或0 --- 关闭规则
   * warn或1 --- 开启规则，使用警告级别的错误（不会导致程序退出）
   * error或2 --- 开启规则，使用错误级别的错误（当触发时，程序会退出）
   */
  rules: {
    'quotes': [1, 'single'],
    'semi': [1, 'always'],
    'no-console': [1],
    'no-debugger': [1],
    'no-var': [1],
    // 禁止对null使用==或!=
    'no-eq-null': [2],
    // 禁止eval
    'no-eval': [2],
    'no-implied-eval': [2],
    // 禁止隐式转换
    'no-implicit-coercion': [1],
    // 禁止行内注释
    'no-inline-comments': [1],
    // 强制驼峰命名法
    'camelcase': [2],
    // 缩进风格
    'indent': [2, 2],
    // 关闭多单词驼峰命名限制
    'vue/multi-word-component-names': [0],
  }
};