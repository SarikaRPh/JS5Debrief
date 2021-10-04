// BASIC SYNTAX
// Selectors: 
// let elementName = document.querySelector("#elementId")
// // Functions
// function functionName() {
//   // do something here
 
// }
// // Call the event with an event listener
// elementName.addEventListener("onclick", functionName);

// 1. DISPLAY NAME
// Click the button to display your name in the box
// (Tip: in this example, you will hard code your name within the JavaScript function, rather than use the input box to grab it).

// Selectors
let btnName = document.querySelector("#btnName");
let myName = document.querySelector("#myName");

btnName.addEventListener("click", displayName);

function displayName() {
  //alert("here");
  let msg = "Laize";
  myName.value = msg;
}
// Function

// Call the event

// 2. LIGHTSWITCH
let imageOff = document.querySelector("#imageOff");
imageOff.addEventListener("mouseover", switchLights);

function switchLights() {
  imageOff.src = "images/lighton.png";
  imageOff.addEventListener("mouseout", lightOff);
  function lightOff() {
    imageOff.src = "images/lightoff.png";
  }
}
// Switch lights on mouseover
// When the mouse cursor is on the lightbulb image, the lighton image should show; and revert back to the lightoff image when the mouse moves off.

// Selectors
let btndbName = document.querySelector('#btndbName');
let displayPara = document.querySelector('#displayPara');
// Function
btndbName.addEventListener ('dblclick',clickTwice);

function clickTwice(){
  displayPara.innerHTML = 'You double clicked me!!'
  let smiley = document.createElement('img');
  smiley.src = 'images/smileyface.png';
  smiley.classList.add("img-fluid");
  displayPara.appendChild(smiley);
}
// Call the event


// 3. Double click button to display content
// Selectors

/* Function {
  //some code here
  //create a new img element
}*/

// Call the event

// 4. Traffic Lights
// Selectors
let btnStop = document.querySelector("#btnStop");
let btnReady = document.querySelector("#btnReady");
let btnGo = document.querySelector("#btnGo");
let stopDiv = document.querySelector("#stopDiv");
let readyDiv = document.querySelector("#readyDiv");
let goDiv = document.querySelector("#goDiv");

// Function 1
function stop(){
  stopDiv.style.backgroundColor = 'red';
  readyDiv.style.backgroundColor = 'black';
  goDiv.style.backgroundColor = 'black';
}
// Function 2
function ready(){
  readyDiv.style.backgroundColor = 'yellow';
  stopDiv.style.backgroundColor = 'black';
  goDiv.style.backgroundColor = 'black';
}

// Function 3
function go(){
  goDiv.style.backgroundColor = 'green';
  readyDiv.style.backgroundColor = 'black';
  stopDiv.style.backgroundColor = 'black';
}
// Call the events
btnStop.addEventListener('click',stop);
btnReady.addEventListener('click',ready);
btnGo.addEventListener('click',go);
// 5. Change textbox border colours
// Selectors
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let btn2Name = document.getElementById('btn2Name');

// Function
function changeColor(){
  firstName.style.borderColor = 'red';
  lastName.style.borderColor = 'green';
}
// Call the event
btn2Name.addEventListener('click',changeColor)
// 6. Validate the input [length should be more than 5 characters]
// Selectors

let errMsg = document.querySelector('#errMsg');
let btnSub2 = document.querySelector('#btnSub2');
let myName2 = document.querySelector('#myName2');


/*Function {
  //if statement
}*/
function checkInput(){
  if (myName2.value < 8 && myName2.value== ''){
    errMsg.innerHTML = 'input more than 8 characters';
    document.querySelector('#errMsg');
  }else{
    errMsg.innerHTML = 'Good input';
  }
}

// Call the event
btnSub2.addEventListener('click',checkInput);
// 7.create a list of hobbies
// Selectors
let btnProfile = document.querySelector('#btnProfile');

/*Function {
  //for loop
}*/
function displayCard(){
  
}
// Call the event

// 8. Display a profile card from an object
//Object

// Selectors

/*Function {
    //for loop
      //if statement
  }*/
