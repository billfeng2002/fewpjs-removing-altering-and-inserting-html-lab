// Write your code here!
let main=document.getElementById('main')
main.remove()

var newHeader =document.createElement("h1")

newHeader.id = "victory";

newHeader.innerHTML = "Bill is the champion" 

document.body.appendChild(newHeader)