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
  // calculate random customer per hour, and also add total cookies.
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

// function to call to display daily quantities for store parameter
function displayStore(store) {
  // Initialize current store variables by calling their methods.
  var myList = document.getElementById(store.IDstring);
  var timeModes = ['AM', 'PM'];
  var currentTimeMode;
  for (var index = 0; index < store.totalHours; index++) {
    var listEl = document.createElement('li');
    listEl.setAttribute('class', 'dataClass');
    listEl.setAttribute('font-family', 'Arial, Verdana, Helvetica');
    if (index < 6 ) {
      currentTimeMode = timeModes[0];
    } else {
      currentTimeMode = timeModes[1];
    };
    if (index != 6) {
      listEl.textContent = ((index + 6) % 12) + currentTimeMode + ': ' + store.cookiesPurchasedPerHour[index] + ' cookies';
    } else {
      listEl.textContent = '12' + currentTimeMode + ': ' + store.cookiesPurchasedPerHour[index] + ' cookies';
    };
    myList.appendChild(listEl);
  };
  var listEl = document.createElement('li');
  listEl.textContent = 'Total: ' + store.cookieTotal + ' cookies';
  myList.appendChild(listEl);
}

// clears the display list for a specific store
function clearListDisplay(store) {
  var myList = document.getElementById(store.IDstring);
  for (var index = 0; index < store.totalHours; index++) {
    myList.innerHTML = '';
  };
}

// main body of program
var storeList = [FirstAndPike, Seatac, SeattleCenter, Capitol, Alki];
// create an array that contain initial data (minCustomer, maxCustomer, averageCookiesPerCustomer)
var initialData = [[23, 65, 6.3],[3, 24, 1.2],[11,38,3.7],[20,38,2.3],[2,16,4.6]];
// create an array that contain the ID string that will be used to locate specific ID on html
var stringAnchor = ['FirstAndPike', 'Seatac', 'SeattleCenter', 'Capitol', 'Alki'];
// create the stores with initial data
for (var i =  0; i < storeList.length; i++) {
  storeList[i] = new StoreConstruct(initialData[i][0], initialData[i][1], initialData[i][2], 15, stringAnchor[i]);
  storeList[i].randomCustomerPerHour();
};

// main program, display initial data
for (var i =  0; i < storeList.length; i++) {
  displayStore(storeList[i]);
};

// if button is clicked, random data will be produced for next day
// and will update the window
document.getElementById('button').onclick = function() {
  for (var i =  0; i < storeList.length; i++) {
    clearListDisplay(storeList[i]);
    storeList[i].randomCustomerPerHour();
    displayStore(storeList[i]);
  };
};
