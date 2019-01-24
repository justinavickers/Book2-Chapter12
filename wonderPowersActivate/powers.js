// Write a function named flightHandlerFunction that will remove the
// disabled class on the corresponding <section id="flight"> (section, not button)
// and replace it with a class of enabled.

function flightHandlerFunction (event) {
  const flightSection = document.getElementById("flight")
  flightSection.classList.add("enabled");
  flightSection.classList.remove("disabled")
   console.log("flight")
}
document.getElementById("activate-flight").addEventListener("click", flightHandlerFunction)

function mindReadingFunction (event) {
  const mindSection = document.getElementById("mindreading")
  mindSection.classList.add("enabled");
  mindSection.classList.remove("disabled")
  console.log("mind")
}
document.querySelector("#activate-mindreading").addEventListener("click", mindReadingFunction)


function xrayFunction (event) {
  const xraySection = document.getElementById("xray")
  xraySection.classList.add("enabled");
  xraySection.classList.remove("disabled")
  console.log("xray")
}
document.querySelector("#activate-xray").addEventListener("click", xrayFunction)

function activatePowersFunction(event) {
  flightHandlerFunction()
  mindReadingFunction()
  xrayFunction()
}
document.querySelector("#activate-all").addEventListener("click", activatePowersFunction)

function deactivatePowersFunction(event) {
  document.getElementById("xray").classList.add("disabled")
  document.getElementById("xray").classList.remove("enabled");
  document.getElementById("mindreading").classList.remove("enabled");
  document.getElementById("mindreading").classList.add("disabled")
  document.getElementById("flight").classList.remove("enabled");
  document.getElementById("flight").classList.add("disabled")
}
document.querySelector("#deactivate-all").addEventListener("click", deactivatePowersFunction)