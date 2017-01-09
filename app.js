'use strict';

var myList = document.getElementById('my-list');
var stuff = ['first','second','third'];
for (var i = 0; i < stuff.length; i++) {
  var listEl = document.createElement('li');
  listEl.textContent = stuff[i] + ' is the content at index ' + i;
  // listEl.setAttribute('class', 'food-list-item');
  myList.appendChild(listEl);
}
