// https://medium.com/@brygrill/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97

module.exports = {
    plugins: ['import'],
    rules: {
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'import/no-unresolved': 'error',
        'no-param-reassign': 'off',
        'default-case': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        'prettier/prettier': [1],
        'semi': ['error', 'never'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['off'],
        'react/prop-types': 'off',
        'no-underscore-dangle': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'no-case-declarations': 'off',
        'consistent-return': 'off',
    },
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    env: {
        jasmine: true,
        jest: true,
        node: true,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
            "typescript": {
                "alwaysTryTypes": true
            },
        },
    },
    parserOptions: {
        ecmaVersion: 2018,
        project: './tsconfig.json',
    },
}