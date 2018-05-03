# Node Form Builder

This is a Dynamic form builder built in node to help you create forms easily for any project! With the form builder you can add the following elements: 
'text', 'select', 'password', 'email', 'checkbox', 'button', 'submit', 'label' and 'radio'

## Getting Started

To use this Form Builder tool you will need to make sure that you have the following downloaded: <br>
```
Node
```
```
NPM
```
### Installation
Clone a copy of this repo by running the following command: 
```
git clone git@github.com:mpeck99/NodeFormBuilder.git
```

### Creating Form Elements

You can create the following type of input elements in an array: 

* Text
* Select
* Checkbox
* Button
* Submit
* Label
* Radio
* Password
* Email

### Example
####  Text Input
```
{
type:'text,
name:'This is a text input"
}
```
#### HTML Output
```
 <input type=text name=name></input>
 ```
 ####  Button Input
```
{
type:'button,
value:'Click Me"
}
```
#### HTML Output
```
 <input type=button value=Click Here>Click Here</input>
 ```
#### Select Input
```
{
    type: 'select',
    value: 'Choose:',
    options: ['Red','Blue','Green'],
}
```
#### HTML Output
```
<select value=Choose:> Choose:
<option value=Red></option>
<option value=Blue></option>
<option value=Green></option>
</select>
 ```
 #### Email Input
```
{
    type: 'email',
    name:'name',
}
```
#### HTML Output
```
<input type=email name=email></input>
 ```
  #### Radio Input
```
{
    type: 'radio',
    name:'radio button'
    value:'value',
}
```
#### HTML Output
```
<input type=radio name=radio button value=Yes></input>
 ```
#### Password Input
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
