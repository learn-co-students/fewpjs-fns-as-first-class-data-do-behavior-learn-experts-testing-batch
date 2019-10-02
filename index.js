/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string){
  const hour = parseInt(string)

  if (hour < 12){
    return "Good Morning"
  } else if (hour >= 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(string){
  document.getElementById('greeting').innerText = string
}
