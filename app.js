'use strict';

var FirstAndPike = {
  // set total hour for store
  totalHours: 14,
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
      this.custPerHour[index] = Math.round(Math.random() * 100 + 1);
      this.totalCustomer += this.custPerHour[index];
      this.averageCookiesPerCustomerPerHour[index] = Math.round(Math.random() * 20 + 1);
      this.cookiesPurchasedPerHour[index] = this.custPerHour[index] * this.averageCookiesPerCustomerPerHour[index];
    };
  }
};

FirstAndPike.randomCustomerPerHour();
console.log(FirstAndPike.maxCustomerPerHour() + 'max');
console.log(FirstAndPike.minCustomerPerHour() + 'min');
console.log(FirstAndPike.totalCustomer + ' total customer');
console.log(FirstAndPike.custPerHour + ' customer per hour');
console.log(FirstAndPike.averageCookiesPerCustomerPerHour + ' ave cookie per cust per hour');
console.log(FirstAndPike.cookiesPurchasedPerHour + ' cookies purchased per hour');


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
