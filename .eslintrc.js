module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    'overrides': [],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    'rules': {
        'react/react-in-jsx-scope': 'off',
        'camelcase': 'error',
        'spaced-comment': 'error',
        'quotes': ['error', 'single'],
        'no-duplicate-imports': 'error',
        'react/jsx-filename-extension': [2, {'extensions': ['.js', '.jsx', '.ts', '.tsx']}],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                'js': 'never',
                'jsx': 'never',
                'ts': 'never',
                'tsx': 'never'
            }
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error']
    },
    'settings': {
        'import/resolver': {
            'typescript': {}
        }
    }
}
