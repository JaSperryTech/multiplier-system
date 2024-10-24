import { multiplierSystem } from "./multiplier.js";

let gold = 0;
const click =1

multiplierSystem.addMultiplier("Red", 1);
multiplierSystem.addMultiplier("Yellow", 1);
multiplierSystem.addMultiplier("Green", 1);
multiplierSystem.addMultiplier("Blue", 1);
multiplierSystem.addMultiplier("Purple", 1);

document.getElementById("click").addEventListener("click", () => {
  gold += Math.round(multiplierSystem.applyAllMultipliers(click))
  document.getElementById("gold").innerText = gold
})