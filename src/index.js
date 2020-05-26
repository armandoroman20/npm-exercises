"use strict";
const $ = require('jquery');


const sayHello = name => {
    console.log("hello, " + name);
};

sayHello('armando');

$('body').css({
    'background-color': 'yellow'
});