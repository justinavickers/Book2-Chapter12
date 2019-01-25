// Write a function named flightHandlerFunction that will remove the
// disabled class on the corresponding <section id="flight"> (section, not button)
// and replace it with a class of enabled.
function activate (powerName){
  const powerEl = document.getElementById(powerName)
  powerEl.classList.add("enabled")
  powerEl.classList.remove("disabled")
  console.log(powerName)
}
function initiateActivation(event) {
   // event.target.id = "active-flight"
  // ["active", "flight"]
  const powerName = event.target.id.split("-")[1]
  activate(powerName)
}
document.getElementById("activate-flight").addEventListener("click", initiateActivation)
document.querySelector("#activate-mindreading").addEventListener("click", initiateActivation)
document.querySelector("#activate-xray").addEventListener("click", initiateActivation)

function activatePowersFunction(event) {
 activate("flight")
 activate("mindreading")
 activate("xray")
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