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
You will also need to make sure that you have the dependencies needed to run this project
```
npm install
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

### Examples
#### Input Object
```
{
    type:'checkbox',
    name:'checkbox',
    value:'Understand the terms',
}
```
### HTML Output
```
<input type=checkbox value=Understand the terms></input>
```
#### Input Object
```
{
  type:'submit',
  value:'Submit',
}
```
### HTML Output
```
<input type=submit value=Submit>Submit</input>
```
#### Input Object
```
{
   type: 'radio',
   name: 'radio button',
   value: 'Yes',
}
```
### HTML Output
```
<input type=radio name=radio button value=Yes></input>
```
#### Input Object
```
{
   type: 'select',
   value: 'Choose:',
   options: ['Red','Blue','Green'],
}
```
### HTML Output
```
<select value="Choose:">Choose:
<option value=Red></option>
<option value=Blue></option>
<option value=Green></option>
</select>
