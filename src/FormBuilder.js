// This is to allow me to export my from in the index js file
module.exports ={
buildForm: function(formItems){
  //letting you know that your successfully calling this build form function
  console.log('Lets build a form');
  //string to hold my form items
  let formInput='';
  //looping through all of the items in the array to create the form
  formItems.forEach((items)=>{
    //verifying that there is a type for each of the items if not an error will be thrown
    if(items.type){
      //checking the types
      switch (items.type){
        case 'select':
          formInput+= '<select value='+items.value+'>'+items.value+'\n';
          if(items.options){
            for(var i=0; i<items.options.length;i++){
              formInput+='<option value='+items.options[i]+'></option>\n'
            }
            formInput+='</select>\n';
          }
          else{
            formInput+='</select>\n'
          }
          break;
        case 'text':
          formInput+= '<input type='+items.type+' name='+items.name+'></input>\n';
          break;
        case 'radio':
          formInput+= '<input type='+items.type+' name='+items.name+' value='+items.value+'></input>\n';
          break;
        case 'password':
          formInput += '<input type='+items.type+' name='+items.name+'></input>\n';
          break;
        case 'submit':
          formInput += '<input type='+items.type+' value='+items.value+'>'+items.value+'</input>\n';
          break;
        case 'checkbox':
          formInput += '<input type='+items.type+' value='+items.value+'></input>\n';
          break;
        case 'button':
          formInput += '<input type='+items.type+' value='+items.value+'>'+items.value+'</input>\n';
          break;
        case 'email':
          formInput += '<input type='+items.type+' name='+items.name+'></input>\n';
          break;
        case 'label':
          formInput += '<label for='+items.value+'></label> ';
          break;
      }
    }
    //if the type is not included in the array an error is thrown
    else{
      console.log("Oops! It looks like you didn't enter the correct information double check your array to make sure it follows the correct syntax.")
    }
  })
  console.log('<form>\n'+formInput+'\n</form>');
}
}
