'use strict';

var FirstAndPike = {
  // ID string assigned to be used by external for loop
  IDstring: 'FirstAndPike',
  // set total hour for store
  totalHours: 15,
  // this would contain the random customer per hour result
  custPerHour: [],
  // contains the random average of purchased cookies per hour
  averageCookiesPerCustomerPerHour: [],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [],
  // contains the max number of customer
  totalCustomer: 0,
  cookieTotal: 0,
  // calculate minimum customer per hour
  minCustomerPerHour: function() {
    var low = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] < low) {
        low = this.custPerHour[index];
      };
    };
    return low;
  },
  // calculate maximum customer per hour
  maxCustomerPerHour: function() {
    var max = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] > max) {
        max = this.custPerHour[index];
      };
    };
    return max;
  },
  // calculate random customer per hour
  randomCustomerPerHour: function() {
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * 50 + 1);
      this.totalCustomer += this.custPerHour[index];
      this.averageCookiesPerCustomerPerHour[index] = Math.round(Math.random() * 5 + 1);
      this.cookiesPurchasedPerHour[index] = this.custPerHour[index] * this.averageCookiesPerCustomerPerHour[index];
      this.cookieTotal += this.cookiesPurchasedPerHour[index];
    };
  }
};

var Seatac = {
  // ID string assigned to be used by external for loop
  IDstring: 'Seatac',
  // set total hour for store
  totalHours: 15,
  // this would contain the random customer per hour result
  custPerHour: [],
  // contains the random average of purchased cookies per hour
  averageCookiesPerCustomerPerHour: [],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [],
  // contains the max number of customer
  totalCustomer: 0,
  // calculate minimum customer per hour
  minCustomerPerHour: function() {
    var low = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] < low) {
        low = this.custPerHour[index];
      };
    };
    return low;
  },
  // calculate maximum customer per hour
  maxCustomerPerHour: function() {
    var max = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] > max) {
        max = this.custPerHour[index];
      };
    };
    return max;
  },
  // calculate random customer per hour
  randomCustomerPerHour: function() {
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * 50 + 1);
      this.totalCustomer += this.custPerHour[index];
      this.averageCookiesPerCustomerPerHour[index] = Math.round(Math.random() * 5 + 1);
      this.cookiesPurchasedPerHour[index] = this.custPerHour[index] * this.averageCookiesPerCustomerPerHour[index];
      this.cookieTotal += this.cookiesPurchasedPerHour[index];
    };
  }
};

var Capitol = {
  // ID string assigned to be used by external for loop
  IDstring: 'Capitol',
  // set total hour for store
  totalHours: 15,
  // this would contain the random customer per hour result
  custPerHour: [],
  // contains the random average of purchased cookies per hour
  averageCookiesPerCustomerPerHour: [],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [],
  // contains the max number of customer
  totalCustomer: 0,
  // calculate minimum customer per hour
  minCustomerPerHour: function() {
    var low = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] < low) {
        low = this.custPerHour[index];
      };
    };
    return low;
  },
  // calculate maximum customer per hour
  maxCustomerPerHour: function() {
    var max = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] > max) {
        max = this.custPerHour[index];
      };
    };
    return max;
  },
  // calculate random customer per hour
  randomCustomerPerHour: function() {
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * 50 + 1);
      this.totalCustomer += this.custPerHour[index];
      this.averageCookiesPerCustomerPerHour[index] = Math.round(Math.random() * 5 + 1);
      this.cookiesPurchasedPerHour[index] = this.custPerHour[index] * this.averageCookiesPerCustomerPerHour[index];
      this.cookieTotal += this.cookiesPurchasedPerHour[index];
    };
  }
};

var Alki = {
  // ID string assigned to be used by external for loop
  IDstring: 'Alki',
  // set total hour for store
  totalHours: 15,
  // this would contain the random customer per hour result
  custPerHour: [],
  // contains the random average of purchased cookies per hour
  averageCookiesPerCustomerPerHour: [],
  // cookies purchased per hour
  cookiesPurchasedPerHour: [],
  // contains the max number of customer
  totalCustomer: 0,
  // calculate minimum customer per hour
  minCustomerPerHour: function() {
    var low = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] < low) {
        low = this.custPerHour[index];
      };
    };
    return low;
  },
  // calculate maximum customer per hour
  maxCustomerPerHour: function() {
    var max = this.custPerHour[0];
    for (var index = 0; index < this.totalHours; index++ ) {
      if (this.custPerHour[index] > max) {
        max = this.custPerHour[index];
      };
    };
    return max;
  },
  // calculate random customer per hour
  randomCustomerPerHour: function() {
    for (var index = 0; index < this.totalHours; index++ ) {
      this.custPerHour[index] = Math.round(Math.random() * 50 + 1);
      this.totalCustomer += this.custPerHour[index];
      this.averageCookiesPerCustomerPerHour[index] = Math.round(Math.random() * 5 + 1);
      this.cookiesPurchasedPerHour[index] = this.custPerHour[index] * this.averageCookiesPerCustomerPerHour[index];
      this.cookieTotal += this.cookiesPurchasedPerHour[index];
    };
  }
};

var storeList = [FirstAndPike, Seatac, Capitol, Alki];

function displayStore(store) {
  // Initialize current store variables by calling their methods.
  store.minCustomerPerHour();
  store.maxCustomerPerHour();
  store.randomCustomerPerHour();
  var myList = document.getElementById(store.IDstring);
  var timeModes = ['AM', 'PM'];
  var currentTimeMode;
  for (var index = 0; index < store.totalHours; index++) {
    var listEl = document.createElement('li');
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

for (var index = 0; index < storeList.length; index++) {
  displayStore(storeList[index]);
};

// Ignore everything below this line ==============================================
//generate cookies for each location

/*var myList = document.getElementById('my-list');
var stuff = ['first','second','third'];
for (var i = 0; i < stuff.length; i++) {
  var listEl = document.createElement('li');
  listEl.textContent = stuff[i] + ' is the content at index ' + i;
  // listEl.setAttribute('class', 'food-list-item');
  myList.appendChild(listEl);
}
*/

/*
FirstAndPike.randomCustomerPerHour();
console.log(FirstAndPike.maxCustomerPerHour() + 'max');
console.log(FirstAndPike.minCustomerPerHour() + 'min');
console.log(FirstAndPike.totalCustomer + ' total customer');
console.log(FirstAndPike.custPerHour + ' customer per hour');
console.log(FirstAndPike.averageCookiesPerCustomerPerHour + ' ave cookie per cust per hour');
console.log(FirstAndPike.cookiesPurchasedPerHour + ' cookies purchased per hour');
*/
