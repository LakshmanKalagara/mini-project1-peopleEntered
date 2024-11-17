let count =0
let countElement = document.getElementById("count")
let previousEntries =document.getElementById("pe")
console.log(2 + 4)

function increment(){
    count += 1;
    countElement.textContent =count
}

function decrement(){
    count -= 1
    countElement.textContent =count
}

function save(){
    let valueEl =count + "-"
    previousEntries.innerText += valueEl 
    count =0
    countElement.textContent = count
}






