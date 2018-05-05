// allowing this file to use my FormBuilder
const Form = require('./src/FormBuilder.js');

// array of form objects to build
const inputArray = [
  {
    type: 'label',
    value: 'Full Name',
  },
  {
    type: 'text',
    name: 'name',
  },
  {
    type: 'email',
    name: 'email',

  },
  {
    type: 'radio',
    name: 'radio button',
    value: 'Yes',
  },
  {
    type: 'select',
    value: 'Choose:',
    options: ['Red', 'Blue', 'Green'],
  },
  {
    type: 'checkbox',
    name: 'checkbox',
    value: 'Understand the terms',
  },
  {
    type: 'submit',
    value: 'Submit',
  },
  {
    type: 'password',
    name: 'password',
  },
  {
    type: 'button',
    value: 'Click Here',
  },
];
// calling the buildForm function from the
// FormBuilder.js and passing an array of form items to be built
Form.buildForm(inputArray);
