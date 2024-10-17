module.exports = {
    parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
    extends: [
        'eslint:recommended', // 使用推荐的 ESLint 规则
        'plugin:@typescript-eslint/recommended', // 使用 TypeScript 推荐的规则
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020, // 支持最新的 ECMAScript 特性
        sourceType: 'module' // 使用 ES6 模块
    },
    rules: {
        'prettier/prettier': [
            'warn',
            {
                semi: false,
                singleQuote: true,
                printWidth: 100,
                proseWrap: 'preserve',
                bracketSameLine: false,
                endOfLine: 'lf',
                tabWidth: 4,
                useTabs: false,
                trailingComma: 'none'
            }
        ]
    },
    env: {
        node: true, // Node.js 环境
        es6: true // 启用 ES6 特性
    }
}
