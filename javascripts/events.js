"use strict";

const printToDom = require('./dom.js');
const data = require('./data.js');

const buttonDiv = document.getElementById('filters');

const filterEvent = () => {

buttonDiv.addEventListener('click', (event) => {
  let itemToFilterOn = event.target.id;
  const gifArray = data.getGifs();
  const filteredArray = filterArray(itemToFilterOn, gifArray);
  console.log(filteredArray);
  printToDom(filteredArray);
});
};


const filterArray = (filterOn, originalArray) => {
	const finalArray = [];
	originalArray.forEach((item) => {
		if (item.categoryDataName === filterOn) {
			finalArray.push(item);
		}

	});
	// do stuff
	return finalArray;


};

const activateEvents = {
	filterEvent
	//it's an object using object notation key is filtered in and the value is filter function
};

module.exports = activateEvents;