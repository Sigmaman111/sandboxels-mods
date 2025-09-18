// Whipped Milk Inventory Mod for Sandboxels

// Base elements (in case they don’t exist)
if(!elements.milk) {
    elements.milk = {
        color: "#ffffff",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 1030,
    };
}

if(!elements.milk_gas) {
    elements.milk_gas = {
        color: "#eeeeee",
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        density: 1,
    };
}

if(!elements.solid_milk) {
    elements.solid_milk = {
        color: "#ccccff",
        behavior: behaviors.SOLID,
        category: "solids",
        state: "solid",
        density: 1100,
    };
}

// Define Whipped Milk as a selectable item in inventory
elements.whipped_milk = {
    color: "#fffdd0",
    behavior: behaviors.LIQUID,
    category: "liquids",  // shows up in the Liquids tab
    state: "liquid",
    density: 1020,

    tempHigh: 100,
    stateHigh: "milk_gas",

    tempLow: 0,
    stateLow: "solid_milk",

    hidden: false, // explicitly ensure it is visible in inventory
};
