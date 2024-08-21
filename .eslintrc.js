module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    plugins: [],
    extends: ['@nuxtjs/eslint-config'],
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4]
    // 'vue/no-multiple-template-root': 'off',
    // 'vue/require-default-prop': 'off',
    // 'vue/multi-word-component-names': 'off',
    // 'vue/require-prop-types': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
    // 'vue/attribute-hyphenation': 'off',
    // 'vue/v-on-event-hyphenation': 'off',
    }
}
