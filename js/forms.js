'use strict';

// Text Input Form ****************************************************************
let textInputForm = document.getElementById('textInputForm');
textInputForm.addEventListener('submit', handleTextInputFormSubmit);

function handleTextInputFormSubmit(event){
  event.preventDefault();
  textInputFormFirst.textContent = event.target.elements.firstNameOutput.value;
  textInputFormLast.textContent = event.target.elements.lastNameOutput.value;
}

let textInputFormFirst = document.getElementById('textInputFormFirst');
let textInputFormLast = document.getElementById('textInputFormLast');


// Radio Button Form ****************************************************************
let radioButtonForm = document.getElementById('radioButtonForm');
radioButtonForm.addEventListener('submit', handleRadioButtonFormSubmit);

function handleRadioButtonFormSubmit(event){
  event.preventDefault();
  radioButtonFormOutput.textContent = event.target.elements.options.value;
}

let radioButtonFormOutput = document.getElementById('radioButtonFormOutput');


// Checkbox Form ****************************************************************
let checkboxForm = document.getElementById('checkboxForm');
checkboxForm.addEventListener('submit', handleCheckboxFormSubmit);

function handleCheckboxFormSubmit(event){
  event.preventDefault();
  checkboxFormOutput1.textContent = 'Option 1 checked: ' + event.target.elements.name1.checked;
  checkboxFormOutput2.textContent = 'Option 2 checked: ' + event.target.elements.name2.checked;
}

let checkboxFormOutput1 = document.getElementById('checkboxFormOutput1');
let checkboxFormOutput2 = document.getElementById('checkboxFormOutput2');



// Select Form ****************************************************************
let selectForm = document.getElementById('selectForm');
selectForm.addEventListener('submit', handleSelectFormSubmit);

function handleSelectFormSubmit(event){
  event.preventDefault();
  selectOutput.textContent = event.target.elements.optionValue.value;
  console.dir(event.target.elements.optionValue);
}

let selectOutput = document.getElementById('selectOutput');




// Multi-Select Form ****************************************************************
let multiSelectForm = document.getElementById('multiSelectForm');
multiSelectForm.addEventListener('submit', handleMultiSelectFormSubmit);

function handleMultiSelectFormSubmit(event){
  event.preventDefault();
  console.dir(event.target.elements);
  multiSelectOutput0.textContent = event.target.elements.multiSelectName[0].selected;
  multiSelectOutput1.textContent = event.target.elements.multiSelectName[1].selected;
  multiSelectOutput2.textContent = event.target.elements.multiSelectName[2].selected;
  multiSelectOutput3.textContent = event.target.elements.multiSelectName[3].selected;
}

let multiSelectOutput0 = document.getElementById('multiSelectOutput0');
let multiSelectOutput1 = document.getElementById('multiSelectOutput1');
let multiSelectOutput2 = document.getElementById('multiSelectOutput2');
let multiSelectOutput3 = document.getElementById('multiSelectOutput3');




// Datalist Form ****************************************************************
let datalistForm = document.getElementById('datalistForm');
datalistForm.addEventListener('submit', handleDatalistFormSubmit);

function handleDatalistFormSubmit(event){
  event.preventDefault();
  console.dir(event.target.elements);
  datalistOutput.textContent = event.target.elements.dataListName.value;
}

let datalistOutput = document.getElementById('datalistOutput');
