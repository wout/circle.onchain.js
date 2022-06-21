/**
 * @typedef {[number, number]} Point
 */

export const Circle = {
  /**
   * Calculates the position of a point on a circle at a given angle. 
   *
   * @param {Point} c - Center point of the circle. 
   * @param {number} r - Radius of the circle.
   * @param {number} a - Angle in radians (Math.PI * 2 = 360°) 
   * @returns {Point} Coordinates of the point.
   */
  pt: (c, r, a) => [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)],

  /**
   * Calculates a random point on a circle with the given radius. 
   *
   * @param {Point} c - Center point of the circle. 
   * @param {number} r - Radius of the circle.
   * @param {function} R - Random function (falls back to Math.random). 
   * @returns {Point} Coordinates of the point.
   */
  ptR: (c, r, R = Math.random) => Circle.pt(c, r, R() * Math.PI * 2),

  /**
   * Calculates a random point inside a circle with the given maximum radius,
   * optionally with a minimum radius as well.
   * 
   * @param {Point} c - Center point of the circle. 
   * @param {number} r - Radius of the circle.
   * @param {function} R - Random function (falls back to Math.random). 
   * @param {function} e - Easing function for a non-linear falloff.  
   * @returns {Point} Coordinates of the point.
   */
  ptInR: (c, r, R = Math.random, e = p => p) => Circle.ptR(c, r * e(R()), R),

  /**
   * Converts degress to radians. 
   *
   * @param {number} d - Degrees
   * @returns {number} Radians
   */
  d2r: d => d * Math.PI / 180
}
