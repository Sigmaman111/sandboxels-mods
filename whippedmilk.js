// Whipped Milk, Solid Milk, and Milk Gas Mod for Sandboxels
// Template adapted from the official Sandboxels modding example

// Base elements (ensure they exist)
if(!elements.milk) {
    elements.milk = {
        color: "#ffffff",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 1030,
    };
}

// Solid Milk
elements.solid_milk = {
    color: "#ccccff",
    behavior: behaviors.SOLID,
    category: "solids",
    state: "solid",
    density: 1100,
};

// Milk Gas
elements.milk_gas = {
    color: "#eeeeee",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 1,
};

// Whipped Milk
elements.whipped_milk = {
    color: "#fffdd0",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1020,
    tempHigh: 100, // above 100C → milk_gas
    stateHigh: "milk_gas",
    tempLow: 0,    // below 0C → solid_milk
    stateLow: "solid_milk",
    hidden: false, // show in inventory
};

// Optional: add reaction for turning milk into whipped milk when using mix tool for 10 seconds
elements.milk.tick = function(pixel) {
    if(pixel.beingMixed) { // custom property updated by the Mix tool
        pixel.whipTimer = (pixel.whipTimer || 0) + 1;

        if(pixel.whipTimer >= 600) { // ~10 seconds at 60 FPS
            changePixel(pixel, "whipped_milk");
            return;
        }
    } else {
        pixel.whipTimer = 0;
    }

    doDefaults(pixel); // maintain default liquid behavior
};

// Notes:
// - solid_milk appears in the Solids tab
// - milk_gas appears in the Gases tab
// - whipped_milk appears in the Liquids tab and automatically changes based on temperature
