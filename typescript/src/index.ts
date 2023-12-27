import { newRenderer } from "./renderer.js"
import { Shape } from "./shapes/shape.js";
import { newRectangle } from "./shapes/rectangle.js";

const rectangle_var: Shape = newRectangle(2, 3)
let renderer = newRenderer(rectangle_var)
renderer.draw();
