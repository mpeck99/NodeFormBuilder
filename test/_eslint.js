const eslint = require('mocha-eslint');

const filePaths = [
    'src/FormBuilder.js',
    'index.js'
];

const rules = {
    formatter: 'stylish',

    alwaysWarn:false,

    timeout: 5000,

    slow: 300,

    strict: true,

    contextName:'eslint'
};

eslint(filePaths,rules);