"use strict";
const $ = require('jquery');


const sayHello = name => {
    console.log("hello how are you " + name + "?");
};

sayHello('armando');

$('body').css({
    'background-color': 'yellow'
});

//===== import method=====//

// import {sayHi, hello, bye} from './say-hello';
//
// console.log(bye);
// console.log(hello);
// console.log(sayHi());

//=====require method=====//

const helloWorld = require('./hello-world');
console.log(helloWorld.hello);
console.log(helloWorld.bye);
console.log(helloWorld.sayHi());