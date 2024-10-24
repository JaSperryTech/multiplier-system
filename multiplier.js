export const multiplierSystem = (() => {
  let multipliers = []; // Array to store all multipliers

  // Class for the multiplier
  class Multiplier {
    constructor(name, multiplier) {
      this.name = name;
      this.multiplier = multiplier;
    }

    // Method to apply the multiplier to a value
    apply(value) {
      return value * this.multiplier;
    }

    // Method to display information about the multiplier
    displayInfo() {
      return `${this.name} multiplier is set to ${this.multiplier}`;
    }
  }

  // Function to add a new multiplier
  const addMultiplier = (name, multiplier) => {
    const existingMultiplier = multipliers.find(mod => mod.name === name);
    if (existingMultiplier) {
      existingMultiplier.multiplier = multiplier; // Update if it already exists
    } else {
      const newMultiplier = new Multiplier(name, multiplier);
      multipliers.push(newMultiplier); // Add new multiplier
    }
  };

  // Function to remove a multiplier by its name
  const removeMultiplier = (name) => {
    multipliers = multipliers.filter(mod => mod.name !== name);
  };

  // Function to apply all active multipliers to a value
  const applyAllMultipliers = (value) => {
    let finalValue = value;
    multipliers.forEach(mult => {
      finalValue = mult.apply(finalValue);
    });
    return finalValue;
  };

  // Display all multipliers
  const listMultipliers = () => {
    return multipliers.map(mod => mod.displayInfo());
  };

  // Public API
  return {
    addMultiplier,
    removeMultiplier,
    applyAllMultipliers,
    listMultipliers,
  };
})();