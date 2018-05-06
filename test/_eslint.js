const eslint = require('mocha-eslint');

const filePaths = [
    'src/FormBuilder.js',
    'index.js'
];

const rules = {
    formatter: 'stylish',

    alwaysWarn:true,

    timeout: 5000,

    slow: 300,

    strict: true,

    contextName:'AirBnb Eslint Style Guide Tests'
};

eslint(filePaths,rules);