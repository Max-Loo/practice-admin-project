module.exports = {
  'extends': [
    'plugin:vue/vue3-recommended',
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  rules: {
    // 组件命名必须是双单词
    'vue/multi-word-component-names': ['error', {
      'ignores': ['Index', 'index', 'default'],
    }],
    // 多行参数的时候必须要尾部逗号
    'comma-dangle': ['warn', 'always-multiline'],
    // 禁止尾部
    'no-trailing-spaces': 'error',
    // 单引号
    'quotes': ['warn', 'single'],
    // 缩进为两个空格
    'indent': ['error', 2],
    // 函数声明参数括号前要有空格
    'space-before-function-paren': ['error', 'always'],
    // 不允许多个空格
    'no-multi-spaces': ['error'],
    // 限制只能逗号后面接空格
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    // 调用函数不允许有空格
    'func-call-spacing': ['error', 'never'],
    // 不允许尾部分号
    'semi': ['error', 'never'],
    // 对象前后要有空格
    'object-curly-spacing': ['error', 'always'],
    // 箭头函数的前后要有空格
    'arrow-spacing': ['error', { before: true, after: true }],
    // 对象声明的冒号后面要有空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 等于号前后要有空格
    'space-infix-ops': ['error', { 'int32Hint': false }],
  },
}