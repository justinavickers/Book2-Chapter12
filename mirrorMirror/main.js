let outputEl = document.getElementById("redBox")
let outputE2 = document.getElementById("blueBox")
let box = document.getElementById("message")

box.addEventListener("keyup", function (event) {
    outputEl.innerHTML = event.target.value
})

box.addEventListener("keyup", function (event) {
  outputE2.innerHTML = event.target.value
})
