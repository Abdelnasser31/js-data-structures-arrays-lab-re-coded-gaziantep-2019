// Write your solution here!
// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

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
   
  return [...drivers , name];
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