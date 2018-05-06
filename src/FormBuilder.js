// This is to allow me to export my from in the index js file
module.exports = {
  buildForm: (formItems) => {
    // string to hold my form items
    let formInput = '';
    // looping through all of the items in the array to create the form
    formItems.forEach((items) => {
      // verifying that there is a type for each of the items if not an error will be thrown
      if (items.type) {
        // checking the types
        switch (items.type) {
          case 'select':
            formInput += `<select value=${items.value}> ${items.value} \n`;
            if (items.options) {
              for (let i = 0; i < items.options.length; i + 1) {
                formInput += `<option value=${items.options[i]}>${items.options[i]}</option>\n`;
              }
              formInput += '</select>\n';
            } else {
              formInput += '</select>\n';
            }
            break;
          case 'text':
            formInput += `<input type=${items.type} name=${items.name}></input>\n`;
            break;
          case 'radio':
            formInput += `<input type=${items.type} name=${items.name} value=${items.value}></input>\n`;
            break;
          case 'password':
            formInput += `<input type=${items.type} name=${items.name}></input>\n`;
            break;
          case 'submit':
            formInput += `<input type=${items.type} value=${items.value}>${items.value}</input>\n`;
            break;
          case 'checkbox':
            formInput += `<input type=${items.type} value=${items.value}></input>\n`;
            break;
          case 'button':
            formInput += `<input type=${items.type} value=${items.value}>'+items.value+'</input>\n`;
            break;
          case 'email':
            formInput += `<input type=${items.type} name=${items.name}></input>\n`;
            break;
          case 'label':
            formInput += `<label for=${items.value}></label>`;
            break;
          default:
        }
      } else {
        /* eslint-disable no-console */
        console.log('Oops! It looks like you did not enter the correct information double check your array to make sure it follows the correct syntax.');
        /* eslint-disable no-console */
      }
    });
    /* eslint-disable no-console */
    console.log(`<form>\n'${formInput}'\n</form>`);
    /* eslint-disable no-console */
  },
};
