// Whipped Milk Mix Tool Mod for Sandboxels

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

// Add whipping logic to milk
elements.milk.tick = function(pixel) {
    // If pixel is currently selected by Mix tool
    if(pixelBeingMixed(pixel)) {
        if(!pixel.whipTimer) {
            pixel.whipTimer = 0;
        }
        pixel.whipTimer++;

        // After 600 ticks (~10s), turn into whipped milk
        if(pixel.whipTimer >= 600) {
            changePixel(pixel, "whipped_milk");
            return;
        }
    } else {
        // Reset if not mixing
        pixel.whipTimer = 0;
    }

    // Default liquid behavior
    doDefaults(pixel);
};

// Helper: check if Mix tool is being used on this pixel
function pixelBeingMixed(pixel) {
    return currentTool === "mix" && mouseDown &&
           mouseX >= pixel.x && mouseX < pixel.x+1 &&
           mouseY >= pixel.y && mouseY < pixel.y+1;
}
