/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (strTime) => {
  const strHour = strTime.split(":")[0]
  const intTime = parseInt(strHour)
  if(intTime < 12) return "Good Morning"
  if(intTime >= 12 && intTime <= 17) return "Good Afternoon"
  if(intTime > 17) return "Good Evening"
}
/* Write your implementation of displayMessage() */
const displayMessage = (message) => {
  const node = document.getElementById("greeting");
  node.innerText = message;
}