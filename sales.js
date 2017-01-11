'use strict';

function StoreConstruct(minCustomer, maxCustomer, averageCookiesPerCustomer, totalHours, IDstring) {
  // minimum customer per hour for the day
  this.minCustomer = minCustomer;
  // maximum customer per hour for the day
  this.maxCustomer = maxCustomer;
  // contains the average of purchased cookies per hour
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  // set total hour for store
  this.totalHours = totalHours;
  // ID string assigned to be used by external for loop
  this.IDstring = IDstring;
};
// all the methods below are for calculating random customer and cookies per customer.
// calculate random customer per hour, and also add it to total cookies.
StoreConstruct.prototype.randomCustomerPerHour = function() {
  this.cookieTotal = 0;
  this.totalCustomer = 0;
  this.custPerHour = [];
  this.cookiesPurchasedPerHour = [];
  for (var i = 0; i < this.totalHours; i++ ) {
    this.custPerHour[i] = Math.round(Math.random() * (this.maxCustomer - this.minCustomer)) + (this.minCustomer + 1);
    this.cookiesPurchasedPerHour[i] = Math.round(this.custPerHour[i] * this.averageCookiesPerCustomer);
    this.cookieTotal += this.cookiesPurchasedPerHour[i];
  };
};

// function method to call to display daily quantities for store
StoreConstruct.prototype.render = function() {
  // Show row title in the first element of the row
  var myList = document.getElementById(this.IDstring);
  var listEl = document.createElement('td');
  listEl.textContent = (this.IDstring);
  myList.appendChild(listEl);
  // append cookiesPurchasedPerHour for eash row data element
  // also keep track of column totals while we're at it.
  for (var index = 0; index < this.totalHours; index++) {
    var listEl = document.createElement('td');
    listEl.textContent = this.cookiesPurchasedPerHour[index];
    myList.appendChild(listEl);
    columnTotals[index] += this.cookiesPurchasedPerHour[index];
  };
  // create last column to show total cookies for the day
  var listEl = document.createElement('td');
  listEl.textContent = this.cookieTotal;
  myList.appendChild(listEl);
  columnTotals[15] += this.cookieTotal; // add store total to last row column value
};

// Stretch goal
function displayColumnTotals() {
  // create last row to show colum totals
  var myList = document.getElementById('SumVertical'); // point to last row title
  var listEl = document.createElement('td');
  listEl.textContent = 'Total: ';
  myList.appendChild(listEl);
  for (var i = 0; i < 16; i++) {
    var listEl = document.createElement('td');
    listEl.textContent = columnTotals[i];
    myList.appendChild(listEl);
  }
}

// clears the display list for a specific store
function clearListDisplay(store) {
  var myList = document.getElementById(store.IDstring);
  for (var index = 0; index < store.totalHours; index++) {
    myList.innerHTML = '';
  };
}

// reset last row values and clear graphics
function clearTotalColumnDisplay() {
  columnTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var myList = document.getElementById('SumVertical');
  for (var index = 0; index < 16; index++) {
    myList.innerHTML = '';
  };
}

// main body of program, and call methods and functions

// declare global variables/arrays
var storeList = [FirstAndPike, Seatac, SeattleCenter, Capitol, Alki];
// create an array that contain initial data (minCustomer, maxCustomer, averageCookiesPerCustomer)
var initialData = [[23, 65, 6.3],[3, 24, 1.2],[11,38,3.7],[20,38,2.3],[2,16,4.6]];
// create an array that contain the ID string that will be used to locate specific ID on html
var stringAnchor = ['FirstAndPike', 'Seatac', 'SeattleCenter', 'Capitol', 'Alki'];
// create an array to store columnTotals
var columnTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// create the stores with initial data
for (var i =  0; i < storeList.length; i++) {
  storeList[i] = new StoreConstruct(initialData[i][0], initialData[i][1], initialData[i][2], 15, stringAnchor[i]);
  storeList[i].randomCustomerPerHour();
};

// display initial data
for (var i =  0; i < storeList.length; i++) {
  storeList[i].render();
};
displayColumnTotals();

// if button is clicked, random data will be produced for next day
// and will update the window
document.getElementById('button').onclick = function() {
  clearTotalColumnDisplay();
  for (var i =  0; i < storeList.length; i++) {
    clearListDisplay(storeList[i]);
    storeList[i].randomCustomerPerHour();
    storeList[i].render();
  };
  displayColumnTotals();
};
