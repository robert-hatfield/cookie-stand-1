'use strict';

var FirstAndPike = {
  // minimum customer per hour for the day
  minCustomer: 23,
  // maximum customer per hour for the day
  maxCustomer: 65,
  // contains  the average of purchased cookies per hour
  averageCookiesPerCustomer: 6.3,
  // set total hour for store
  totalHours: 15,
  // ID string assigned to be used by external for loop
  IDstring: 'FirstAndPike',
  // this would contain customer per hour for 15 hours.
  custPerHour: [],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [],
  // contains the total number of customer
  totalCustomer: 0,
  // total cookies sold
  cookieTotal: 0,
  // all the methods below are for calculating random customer and cookies per customer.
  // calculate random customer per hour, and also add total cookies.
  randomCustomerPerHour: function() {
    this.cookieTotal = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * (this.maxCustomer - this.minCustomer) + (this.minCustomer + 1));
      this.cookiesPurchasedPerHour[index] = Math.round(this.custPerHour[index] * this.averageCookiesPerCustomer);
      this.cookieTotal += this.cookiesPurchasedPerHour[index];
    };
  },
  // find total customer for the day
  findTotalCustomer: function() {
    this.totalCustomer = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.totalCustomer += this.custPerHour[index];
    };
  }
};

var Seatac = {
  // minimum customer per hour for the day
  minCustomer: 3,
  // maximum customer per hour for the day
  maxCustomer: 24,
  // contains the average of purchased cookies per hour
  averageCookiesPerCustomer: 1.2,
  // set total hour for store
  totalHours: 15,
  // ID string assigned to be used by external for loop
  IDstring: 'Seatac',
  // this would contain customer per hour for 15 hours.
  custPerHour: [],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [],
  // contains the total number of customer
  totalCustomer: 0,
  // total cookies sold
  cookieTotal: 0,
  // all the methods below are for calculating random customer and cookies per customer.
  // calculate random customer per hour, and also add total cookies.
  randomCustomerPerHour: function() {
    this.cookieTotal = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * (this.maxCustomer - this.minCustomer) + (this.minCustomer + 1));
      this.cookiesPurchasedPerHour[index] = Math.round(this.custPerHour[index] * this.averageCookiesPerCustomer);
      this.cookieTotal += this.cookiesPurchasedPerHour[index];
    };
  },
  // find total customer for the day
  findTotalCustomer: function() {
    this.totalCustomer = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.totalCustomer += this.custPerHour[index];
    };
  },
};

var SeattleCenter = {
  // minimum customer per hour for the day
  minCustomer: 11,
  // maximum customer per hour for the day
  maxCustomer: 38,
  // contains the average of purchased cookies per hour
  averageCookiesPerCustomer: 3.7,
  // set total hour for store
  totalHours: 15,
  // ID string assigned to be used by external for loop
  IDstring: 'SeattleCenter',
  // this would contain customer per hour for 15 hours.
  custPerHour: [],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [],
  // contains the total number of customer
  totalCustomer: 0,
  // total cookies sold
  cookieTotal: 0,
  // all the methods below are for calculating random customer and cookies per customer.
  // calculate random customer per hour, and also add total cookies.
  randomCustomerPerHour: function() {
    this.cookieTotal = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * (this.maxCustomer - this.minCustomer) + (this.minCustomer + 1));
      this.cookiesPurchasedPerHour[index] = Math.round(this.custPerHour[index] * this.averageCookiesPerCustomer);
      this.cookieTotal += this.cookiesPurchasedPerHour[index];
    };
  },
  // find total customer for the day
  findTotalCustomer: function() {
    this.totalCustomer = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.totalCustomer += this.custPerHour[index];
    };
  },
};

var Capitol = {
  // minimum customer per hour for the day
  minCustomer: 20,
  // maximum customer per hour for the day
  maxCustomer: 38,
  // contains the average of purchased cookies per hour
  averageCookiesPerCustomer: 2.3,
  // set total hour for store
  totalHours: 15,
  // ID string assigned to be used by external for loop
  IDstring: 'Capitol',
  // this would contain customer per hour for 15 hours.
  custPerHour: [],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [],
  // contains the total number of customer
  totalCustomer: 0,
  // total cookies sold
  cookieTotal: 0,
  // all the methods below are for calculating random customer and cookies per customer.
  // calculate random customer per hour, and also add total cookies.
  randomCustomerPerHour: function() {
    this.cookieTotal = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * (this.maxCustomer - this.minCustomer) + (this.minCustomer + 1));
      this.cookiesPurchasedPerHour[index] = Math.round(this.custPerHour[index] * this.averageCookiesPerCustomer);
      this.cookieTotal += this.cookiesPurchasedPerHour[index];
    };
  },
  // find total customer for the day
  findTotalCustomer: function() {
    this.totalCustomer = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.totalCustomer += this.custPerHour[index];
    };
  }
};

var Alki = {
  // minimum customer per hour for the day
  minCustomer: 2,
  // maximum customer per hour for the day
  maxCustomer: 16,
  // contains the average of purchased cookies per hour
  averageCookiesPerCustomer: 4.6,
  // set total hour for store
  totalHours: 15,
  // ID string assigned to be used by external for loop
  IDstring: 'Alki',
  // this would contain customer per hour for 15 hours.
  custPerHour: [],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [],
  // contains the total number of customer
  totalCustomer: 0,
  // total cookies sold
  cookieTotal: 0,
  // all the methods below are for calculating random customer and cookies per customer.
  // calculate random customer per hour, and also add total cookies.
  randomCustomerPerHour: function() {
    this.cookieTotal = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * (this.maxCustomer - this.minCustomer) + (this.minCustomer + 1));
      this.cookiesPurchasedPerHour[index] = Math.round(this.custPerHour[index] * this.averageCookiesPerCustomer);
      this.cookieTotal += this.cookiesPurchasedPerHour[index];
    };
  },
  // find total customer for the day
  findTotalCustomer: function() {
    this.totalCustomer = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.totalCustomer += this.custPerHour[index];
    };
  }
};

// creates an array of object that includes all stores
var storeList = [FirstAndPike, Seatac, SeattleCenter, Capitol, Alki];

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
for (var index = 0; index < storeList.length; index++) {
  storeList[index].randomCustomerPerHour();
  storeList[index].findTotalCustomer();
  displayStore(storeList[index]);
};

// if button is clicked, random data will be produced for next day
// and will update the window
document.getElementById('button').onclick = function() {
  for (var index = 0; index < storeList.length; index++) {
    clearListDisplay(storeList[index]);
    // initialize with random data
    storeList[index].randomCustomerPerHour();
    storeList[index].findTotalCustomer();
    displayStore(storeList[index]);
  };
};
