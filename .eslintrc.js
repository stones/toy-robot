const path = require('path');

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: 'tsconfig.json'
    },
    rules: {
        'padding-line-between-statements': [
            'error',
            { 'blankLine': 'always', 'prev': 'class', 'next': '*' }
        ],
        'arrow-parens': 'error',
        'comma-dangle': 'error',
        'curly': ['error', 'multi-line', 'consistent'],
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'eol-last': 'error',
        'eqeqeq': 'error',
        'generator-star-spacing': 'error',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'max-len': ['error', { code: 180, ignorePattern: '^import \\{.*\\} from.*$', ignoreStrings: true, ignoreTemplateLiterals: true }],
        'no-bitwise': 'error',
        'no-constant-condition': 'warn',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-return-await': 'error',
        'no-shadow': 'error',
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'no-unneeded-ternary': 'error',
        'no-useless-computed-key': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'quotes': ['error', 'single'],
        'rest-spread-spacing': 'error',
        'semi': 'error',
        'space-before-function-paren': ['error', { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
        'space-in-parens': 'error',
        '@typescript-eslint/indent': ['error', 'tab'],
        '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
        '@typescript-eslint/no-extra-parens': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/array-type': ['error', { type: 'array' }],
        '@typescript-eslint/explicit-function-return-type': ['error', {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true
        }],
        '@typescript-eslint/no-parameter-properties': ['error', {
            allows: [
                'private readonly',
                'protected readonly',
                'public readonly'
            ]
        }],
        '@typescript-eslint/no-unused-vars': ['error', {
            'args': 'none',
            'ignoreRestSiblings': true
        }],
        '@typescript-eslint/member-ordering': ['error', {
            default: [
                'public-static-field',
                'protected-static-field',
                'private-static-field',
                'public-instance-field',
                'protected-instance-field',
                'private-instance-field',
                'constructor',
                'public-static-method',
                'public-instance-method',
                'protected-static-method',
                'protected-instance-method',
                'private-static-method',
                'private-instance-method'
            ]
        }],

        // Requiers parser
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
        '@typescript-eslint/require-array-sort-compare': 'error',

        // Off
        'no-extra-parens': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        'indent': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off'
    }
};
