// Assuming you have an object named `cloneObj` representing the cloned object
// and `this.debugName` represents the debugName of the original object

cloneObj.debugName = "clone_" + this.debugName;

// Example usage:
const originalObj = { debugName: "original" };
const cloneObj = Object.assign({}, originalObj);
cloneObj.debugName = "clone_".concat(originalObj.debugName);

console.log(cloneObj.debugName); // "clone_original"
