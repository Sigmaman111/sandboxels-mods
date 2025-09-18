// Whipped Milk Mod for Sandboxels

// Make sure base elements exist, otherwise define placeholders
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

// Define whipped milk
elements.whipped_milk = {
    color: "#fffdd0",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1020,

    tempHigh: 100,
    stateHigh: "milk_gas",

    tempLow: 0,
    stateLow: "solid_milk",
};

// Reaction: holding 1 while mixing with milk makes whipped milk
elements.milk.reactions = elements.milk.reactions || {};
elements.milk.reactions.whipped_milk = {
    "elem1": "whipped_milk",
    "elem2": "whipped_milk",
    "chance": 0.5,
    "condition": function(pixel, otherPixel) {
        // Only trigger if the player is holding the "1" key
        return keys[49]; // 49 = keycode for "1"
    }
};
