const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
    root: true,

    env: {
        node: true,
    },

    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],

    parserOptions: {
        parser: 'babel-eslint',
    },

    rules: {
        indent: ['error', 4],
        'no-console': IS_PROD ? 'warn' : 'off',
        'no-debugger': IS_PROD ? 'warn' : 'off',
    },
}
