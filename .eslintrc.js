const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
    root: true,

    env: {
        node: true,
    },

    extends: [
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
        'eslint:recommended'
        // 'eslint:standard'
    ],

    parserOptions: {
        parser: 'babel-eslint',
    },

    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/require-default-prop': 'off',
        'no-console': IS_PROD ? 'warn' : 'off',
        'no-debugger': IS_PROD ? 'warn' : 'off',
    },
}
