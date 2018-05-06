# Node Form Builder
This repo helps provide you with a simple node tool to create dynamic forms
 ## Requirements
 ```
 Node
 ```
 ```
 NPM
 ```
 
### Installation
To clone this repo to your local machine navigate to your terminal and run this line of code:
```
git clone git@github.com:mpeck99/NodeFormBuilder.git
```
#### You will also need to make sure that you have the dependencies needed to run this project
```
npm install
```
#### You will need to have mocha install globally on your machine run this in your terminal
```
npm i -g mocha
```
#### Install mocha-eslint to your developer dependencies
```
npm install --save-dev mocha-eslint
```
### Testing the AirBnb Style Guide
```
npm run styleguide
```
### Testing the Code
```
npm test
```


### Form Creation
The following form inputs can be created 
* Text
* Select
* Button 
* Submit
* Checkbox
* Radio
* Password
* Email
* Label

To include this in your project you will need to make import the FormBuilder File
```
const FormBuilder = Require('./src/FormBuilder.js);

const formInputs =[
{
type:'text',
name:'Input',
},
{
type:'select',
value:'Choose:',
options:["Red","Blue","Green"]
}
]
Form.buildForm(formInputs);
```
### To run this on your machine and build a form navigate to the product folder and in the terminal run the following line: 
```
node index.js
```

### Examples
#### Checkbox Object
```
{
    type:'checkbox',
    name:'checkbox',
    value:'Understand the terms',
}
```
#### HTML Output
```
<input type=checkbox value=Understand the terms></input>
```
#### Submit Object
```
{
  type:'submit',
  value:'Submit',
}
```
#### HTML Output
```
<input type=submit value=Submit>Submit</input>
```
#### Radio Object
```
{
   type: 'radio',
   name: 'radio button',
   value: 'Yes',
}
```
#### HTML Output
```
<input type=radio name=radio button value=Yes></input>
```
#### Select Object
```
{
   type: 'select',
   value: 'Choose:',
   options: ['Red','Blue','Green'],
}
```
#### HTML Output
```
<select value="Choose:">Choose:
<option value=Red></option>
<option value=Blue></option>
<option value=Green></option>
</select>
```
#### Text Object
```
{
    type:'text',
    name:'name',
}
```
#### HTML Output
```
<input type=text name=name></input>
```
#### Button Object
```
{
  type:'button',
  value:'Click Here',
}
```
#### HTML Output
```
<input type=button value=Click Here>Click Here</input>
```
#### Email Object
```
{
   type: 'email',
   name:'email',
}
```
#### HTML Output
```
<input type=email name=email></input>
```
#### Password Object
```
{
   type:'password',
   name:"password",
}
```
#### HTML Output
```
<input type=password name=password></input>
```
