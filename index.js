// Write your solution here!
// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];
const copyDrivers = drivers.slice();
function destructivelyAppendDriver (name){
  drivers.push(name);
}

 function destructivelyPrependDriver(name){
   drivers.unshift(name);
 }
 
 function destructivelyRemoveLastDriver(){
   drivers.pop();
 }
  function destructivelyRemoveFirstDriver(){
   drivers.shift();
 }


function appendDriver(name){
   
  copyDrivers.push(name);
}

function prependDriver(name){
 
  copyDrivers.unshift(name);
}

function removeLastDriver(){
   copyDrivers.pop();
}
function removeFirstDriver(){
   copyDrivers.shift();
}