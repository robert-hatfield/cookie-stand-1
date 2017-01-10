'use strict';

var FirstAndPike = {
  // minimum customer per hour for the day
  minCustomer: 23,
  // maximum customer per hour for the day
  maxCustomer: 65,
  // contains the average of purchased cookies per hour
  averageCookiesPerCustomer: 6.3,
  // set total hour for store
  totalHours: 15,
  // ID string assigned to be used by external for loop
  IDstring: 'FirstAndPike',
  // this would contain customer per hour for 15 hours.
  // it's using the average of min and max, and dividing it by 15
  custPerHour: [2.94,2.94,2.94,2.94,2.94,2.94,2.94,2.94,2.94,2.94,2.94,2.94,2.94,2.94,2.94,],
  // cookies purchased per hour
  // basically, custPerHour * averageCookiesPerCustomer, for each hour
  cookiesPurchasedPerHour: [18.48,18.48,18.48,18.48,18.48,18.48,18.48,18.48,18.48,18.48,18.48,18.48,18.48,18.48,18.48,],
  // contains the total number of customer
  // this is min plus max, divided by 2 to get approximate customer for the day.
  totalCustomer: 44.1,
  // total cookies sold
  // this is totalCustomer * averageCookiesPerCustomer
  cookieTotal: 277.83,
  // all the methods below are for calculating random customer and cookies per customer.
  // calculate random customer per hour, random cookies per customer, and
  // also add total cookies.
  minCustomerPerHour: 0,
  maxCustomerPerHour: 0,
  randomCustomerPerHour: function() {
    var randomCookiesPerCustomer;
    this.cookieTotal = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * 50 + 1);
      randomCookiesPerCustomer = Math.round(Math.random() * 5 + 1);
      this.cookiesPurchasedPerHour[index] = this.custPerHour[index] * randomCookiesPerCustomer;
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
  // average cookies per sales
  findAverageCookiesPerCustomer: function() {
    this.averageCookiesPerCustomer = this.totalCustomer / this.cookieTotal;
  },
  // calculate minimum customer per hour
  findMinCustomerPerHour: function() {
    this.minCustomerPerHour = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] < this.minCustomerPerHour) {
        this.minCustomerPerHour = this.custPerHour[index];
      };
    };
  },
  // calculate maximum customer per hour
  findMaxCustomerPerHour: function() {
    this.maxCustomerPerHour = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] > this.maxCustomerPerHour) {
        this.maxCustomerPerHour = this.custPerHour[index];
      };
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
  custPerHour: [0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [1.08,1.08,1.08,1.08,1.08,1.08,1.08,1.08,1.08,1.08,1.08,1.08,1.08,1.08,1.08,],
  // contains the total number of customer
  totalCustomer: 13.5,
  // total cookies sold
  cookieTotal: 16.2,
  // all the methods below are for calculating random customer and cookies per customer.
  // calculate random customer per hour, random cookies per customer, and
  // also add total cookies.
  minCustomerPerHour: 0,
  maxCustomerPerHour: 0,
  randomCustomerPerHour: function() {
    var randomCookiesPerCustomer;
    this.cookieTotal = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * 50 + 1);
      randomCookiesPerCustomer = Math.round(Math.random() * 5 + 1);
      this.cookiesPurchasedPerHour[index] = this.custPerHour[index] * randomCookiesPerCustomer;
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
  // average cookies per sales
  findAverageCookiesPerCustomer: function() {
    this.averageCookiesPerCustomer = this.totalCustomer / this.cookieTotal;
  },
  // calculate minimum customer per hour
  findMinCustomerPerHour: function() {
    this.minCustomerPerHour = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] < this.minCustomerPerHour) {
        this.minCustomerPerHour = this.custPerHour[index];
      };
    };
  },
  // calculate maximum customer per hour
  findMaxCustomerPerHour: function() {
    this.maxCustomerPerHour = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] > this.maxCustomerPerHour) {
        this.maxCustomerPerHour = this.custPerHour[index];
      };
    };
  }
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
  custPerHour: [1.63,1.63,1.63,1.63,1.63,1.63,1.63,1.63,1.63,1.63,1.63,1.63,1.63,1.63,1.63,],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [6.04,6.04,6.04,6.04,6.04,6.04,6.04,6.04,6.04,6.04,6.04,6.04,6.04,6.04,6.04],
  // contains the total number of customer
  totalCustomer: 24.5,
  // total cookies sold
  cookieTotal: 90.65,
  // all the methods below are for calculating random customer and cookies per customer.
  // calculate random customer per hour, random cookies per customer, and
  // also add total cookies.
  minCustomerPerHour: 0,
  maxCustomerPerHour: 0,
  randomCustomerPerHour: function() {
    var randomCookiesPerCustomer;
    this.cookieTotal = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * 50 + 1);
      randomCookiesPerCustomer = Math.round(Math.random() * 5 + 1);
      this.cookiesPurchasedPerHour[index] = this.custPerHour[index] * randomCookiesPerCustomer;
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
  // average cookies per sales
  findAverageCookiesPerCustomer: function() {
    this.averageCookiesPerCustomer = this.totalCustomer / this.cookieTotal;
  },
  // calculate minimum customer per hour
  findMinCustomerPerHour: function() {
    this.minCustomerPerHour = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] < this.minCustomerPerHour) {
        this.minCustomerPerHour = this.custPerHour[index];
      };
    };
  },
  // calculate maximum customer per hour
  findMaxCustomerPerHour: function() {
    this.maxCustomerPerHour = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] > this.maxCustomerPerHour) {
        this.maxCustomerPerHour = this.custPerHour[index];
      };
    };
  }
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
  custPerHour: [1.93,1.93,1.93,1.93,1.93,1.93,1.93,1.93,1.93,1.93,1.93,1.93,1.93,1.93,1.93,],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [4.44,4.44,4.44,4.44,4.44,4.44,4.44,4.44,4.44,4.44,4.44,4.44,4.44,4.44,4.44,],
  // contains the total number of customer
  totalCustomer: 29,
  // total cookies sold
  cookieTotal: 66.7,
  // all the methods below are for calculating random customer and cookies per customer.
  // calculate random customer per hour, random cookies per customer, and
  // also add total cookies.
  minCustomerPerHour: 0,
  maxCustomerPerHour: 0,
  randomCustomerPerHour: function() {
    var randomCookiesPerCustomer;
    this.cookieTotal = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * 50 + 1);
      randomCookiesPerCustomer = Math.round(Math.random() * 5 + 1);
      this.cookiesPurchasedPerHour[index] = this.custPerHour[index] * randomCookiesPerCustomer;
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
  // average cookies per sales
  findAverageCookiesPerCustomer: function() {
    this.averageCookiesPerCustomer = this.totalCustomer / this.cookieTotal;
  },
  // calculate minimum customer per hour
  findMinCustomerPerHour: function() {
    this.minCustomerPerHour = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] < this.minCustomerPerHour) {
        this.minCustomerPerHour = this.custPerHour[index];
      };
    };
  },
  // calculate maximum customer per hour
  findMaxCustomerPerHour: function() {
    this.maxCustomerPerHour = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] > this.maxCustomerPerHour) {
        this.maxCustomerPerHour = this.custPerHour[index];
      };
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
  custPerHour: [0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [2.76,2.76,2.76,2.76,2.76,2.76,2.76,2.76,2.76,2.76,2.76,2.76,2.76,2.76,2.76,],
  // contains the total number of customer
  totalCustomer: 9,
  // total cookies sold
  cookieTotal: 41.4,
  // all the methods below are for calculating random customer and cookies per customer.
  // calculate random customer per hour, random cookies per customer, and
  // also add total cookies.
  randomCustomerPerHour: function() {
    var randomCookiesPerCustomer;
    this.cookieTotal = 0;
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * 50 + 1);
      randomCookiesPerCustomer = Math.round(Math.random() * 5 + 1);
      this.cookiesPurchasedPerHour[index] = this.custPerHour[index] * randomCookiesPerCustomer;
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
  // average cookies per sales
  findAverageCookiesPerCustomer: function() {
    this.averageCookiesPerCustomer = this.totalCustomer / this.cookieTotal;
  },
  // calculate minimum customer per hour
  findMinCustomerPerHour: function() {
    var low = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] < low) {
        low = this.custPerHour[index];
      };
    };
    this.minCustomer = low;
  },
  // calculate maximum customer per hour
  findMaxCustomerPerHour: function() {
    var max = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] > max) {
        max = this.custPerHour[index];
      };
    };
    this.maxCustomer = max;
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
  displayStore(storeList[index]);
};

// if button is clicked, random data will be produced for next day
// and will update the window
document.getElementById('button').onclick = function() {
  for (var index = 0; index < storeList.length; index++) {
    clearListDisplay(storeList[index]);
    storeList[index].randomCustomerPerHour();
    displayStore(storeList[index]);
  };
};
