"use strict";

// Defined 2 sample rectangles to test the collision.
// Now, on the branch "collision".
let Rectangle1 = {
    x: 5,
    y: 5,
    width: 50,
    height: 50
};
let Rectangle2 = {
    x: 20,
    y: 10,
    width: 10,
    height: 10
};

// Collision checking logic
if (
    Rectangle1.x < Rectangle2.x + Rectangle2.width &&
    Rectangle1.x + Rectangle1.width > Rectangle2.width &&
    Rectangle1.y < Rectangle2.y + Rectangle2.height &&
    Rectangle1.y + Rectangle1.height > Rectangle2.height
) {
    console.log("Collision confirmed.");
} else {
    console.log("Collision not detected.");
}
