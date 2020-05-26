"use strict";
const $ = require('jquery');


const sayHello = name => {
    console.log("hello how are you " + name + "?");
};

sayHello('armando');

$('body').css({
    'background-color': 'purple'
});