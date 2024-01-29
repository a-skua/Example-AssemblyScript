import assert from "assert";
import { newPoint, pointToString } from "../build/debug.js";
const p = newPoint(1, 2);
assert.strictEqual(pointToString(p), "P(x=1, y=2)");
console.log("ok");
