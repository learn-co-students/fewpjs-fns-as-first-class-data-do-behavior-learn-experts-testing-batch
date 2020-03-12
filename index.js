/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(input) {
  const arrayOfTime = input.split(":")
  if (arrayOfTime[0]<12) {
    return "Good Morning"
  }
  if (arrayOfTime[0]>=15) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }

}

function displayMessage(message){
  document.getElementById("greeting").innerText = message
}
