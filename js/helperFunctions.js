'use strict';

// Global Variables ***********************************************************


// DOM Windows ****************************************************************


// Object Literals ************************************************************


// Functions ******************************************************************
function ConstructorExample() {
  // Capitalize constructor function name
  this.name;
  this.score = 0;
}

ConstructorExample.prototype.examplePrototype = function () {
  console.log(this);
};

let object = new ConstructorExample;
object.examplePrototype();


function storeLocalStorage(array, storageName) {
  // Convert scores to string, then save to localStorage
  let tempString = JSON.stringify(array);
  localStorage.setItem(storageName, tempString);
}

function getLocalStorage(array, storageName) {
  // Get table from localStorage, then parse into array

  let tempString = localStorage.getItem(storageName);
  let tempArray = [];
  tempArray = JSON.parse(tempString);

  array = [];
  array = tempArray;
}

function shuffleArray(array) {
  // Takes an array in and shuffles the order
  let tempNum;
  let tempArray = [];

  for (let i = 0; i < array.length; i++) {
    tempNum = Math.floor(Math.random() * (array.length));
    while (tempArray.includes(array[tempNum])) {
      tempNum = Math.floor(Math.random() * (array.length));
    }
    tempArray[i] = array[tempNum];
  }

  array = [];
  array = tempArray;
}

function randomNumber(min, max, isWholeNumber) {
  // returns random integer between min and max, inclusive, or
  // returns random number between min (inclusive) and max (exclusive)
  let tempNum = 0;

  if (isWholeNumber === true) {
    tempNum = Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    tempNum = Math.random() * (max - min) + min;
  }

  return tempNum;
}

function renderTable(tableElement, data) {
  // Creates table rows and cells
  // tableElement: HTML table element ID
  // data: array
  let tableDOM = document.getElementById(tableElement);
  tableDOM.innerHTML = ''; // clears table
  let numColumns = data[0].length;
  let numRows = data.length;
  let rowElem;
  let headerElem;
  let cellElem;

  // Create header row
  rowElem = document.createElement('tr');
  tableDOM.appendChild(rowElem);

  // Create header cells
  for (let i = 0; i < numColumns; i++) {
    headerElem = document.createElement('th');
    headerElem.textContent = data[0][i];
    rowElem.appendChild(headerElem);
  }

  // Create data rows
  // i = row, j = column
  for (let i = 1; i < numRows; i++) {
    rowElem = document.createElement('tr');
    tableDOM.appendChild(rowElem);
    // create data cells
    for (let j = 0; j < numColumns; j++) {
      cellElem = document.createElement('td');
      cellElem.textContent = data[i][j];
      rowElem.appendChild(cellElem);
    }
  }
}


function renderChart(chartElement, xData, yData) {
  // Uses Chart.js library <script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1/dist/chart.umd.min.js"></script>
  // Creates chart with random bar colors
  // chartElement: HTML 'canvas' element ID
  // xData and yData: arrays with chart data

  // Create random colors for bar chart.  Got this from https://css-tricks.com/snippets/javascript/random-hex-color/
  let barColors = [];
  for (let i = 0; i < xData.length; i++) {
    barColors[i] = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  // create chart data object
  let chartObj = {
    type: 'bar',

    data: {
      labels: xData,
      datasets: [{
        backgroundColor: barColors,
        data: yData,
      }]
    },

    options: {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Chart Title'
        },
        legend: {
          display: false,

        }
      }
    },

  };

  // Create chart
  new Chart(chartElement, chartObj); // eslint-disable-line
}

// DOM Manipulation ***********************************************************
let domWindow = document.getElementById('domWindow');

// Create element.  Must use correct HTML element name
let imgElem = document.createElement('img');

// Set info on element
imgElem.src = './img/Darth_Vader.jpg';
imgElem.id = 'imgID';
imgElem.alt = 'alt text for image';
imgElem.title = 'title for image';

// Add html element to DOM window
domWindow.appendChild(imgElem);

// Executable Code ************************************************************
