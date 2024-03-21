
let bigReveal = document.querySelector(".bigReveal");
let button = document.querySelector("button")
let evieScore = 0
let tracyScore = 0
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let input3 = document.querySelector(".input3")
let input4 = document.querySelector(".input4")
let input5 = document.querySelector(".input5")
let tracyPic = document.querySelector(".tracyPic")
let bothPic = document.querySelector(".bothPic")
let eviePic = document.querySelector(".eviePic")

button.addEventListener("click", function(){
    console.log("button check")
    tracyPic.style.display = "none"
    bothPic.style.display = "none"
    eviePic.style.display = "none"
if (input1.value === "yes"){
    evieScore = evieScore + 1
} else if (input1.value === "no"){
    tracyScore = tracyScore + 1
}

if (input2.value === "yes"){
    evieScore = evieScore + 1
} else if (input2.value === "no"){
    tracyScore = tracyScore + 1
}

if (input3.value === "yes"){
    evieScore = evieScore + 1
} else if (input3.value === "no"){
    tracyScore = tracyScore + 1
}

if (input4.value === "yes"){
    evieScore = evieScore + 1
} else if (input4.value === "no"){
    tracyScore = tracyScore + 1
}

if (input5.value === "yes"){
    evieScore = evieScore + 1
} else if (input5.value === "no"){
    tracyScore = tracyScore + 1
}
console.log(evieScore, tracyScore)
if (evieScore > tracyScore){
   eviePic.style.display = "block"
    bigReveal.innerHTML = "Your Evie!"
} else if (tracyScore > evieScore){
    tracyPic.style.display = "block"
    bigReveal.innerHTML = "your Tracy!"

}else {
    bothPic.style.display = "block"
    bigReveal.innerHTML = "your Both!"
}
evieScore = 0
tracyScore = 0
})
