/**
 * 
 * @param {[number, number]} c - Center point of the circle. 
 * @param {number} r - Radius of the circle.
 * @param {number} s - Number of sampels (points to spread on the circle).
 * @param {number} a - Angle in radians to work on, allowing to create partial circles.
 * @param {number} o - Offset to start the partial circle on.
 * @returns {[number, number][]} An array of points.
 */
Circle.pts = (c, r, s = 32, a = Math.PI * 2, o = 0) => [...Array(s)]
  .map((_, i) => Circle.pt(c, r, o + a / s * i))
