export default [
    {
        files: ['**/*.js'],
        lenguajeOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single']

        }
    }
];