/* eslint-disable no-unused-vars */

/**
 * @brief initialize the canvas
 */
const canvas = document.getElementById('fieldCanvas');
const canvasQuery = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'images/Top View Render.png';

/**
 * @brief dev settings
 */
const imgTrueWidth = 147.8377757;

/**
 * @brief calculate the scale of the canvas
 * To be used in future versions
 */
const imgActualWidth = Number(canvas.attributes.width.value);
const imgHalfActualWidth = imgActualWidth / 2;
const imgPixelsPerInch = imgActualWidth / imgTrueWidth;


/**
 * @brief Point that can be used to store coordinates
 */
class Point {
  /**
   * Constructor for Point
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


/**
 * @brief convert the mouse position to position in coordinate system
 * @param {Point} point - the mouse position
 * @return {Point} - the position in the coordinate system
 */
function pxToCoord(point) {
  const newPoint = new Point(point.x, point.y);
  newPoint.x = newPoint.x - imgHalfActualWidth;
  newPoint.y = imgActualWidth - newPoint.y - imgHalfActualWidth;
  newPoint.x = newPoint.x / imgPixelsPerInch;
  newPoint.y = newPoint.y / imgPixelsPerInch;
  return newPoint;
};


/**
 * @brief convert a point in the coordinate system to the position on the canvas
 * @param {Point} point - the point on the coordinate system
 * @return {Point} - the position on the canvas
 */
function coordToPx(point) {
  const newPoint = new Point(point.x, point.y);
  newPoint.x = newPoint.x * imgPixelsPerInch;
  newPoint.y = newPoint.y * imgPixelsPerInch;
  newPoint.x = newPoint.x + imgHalfActualWidth;
  newPoint.y = imgActualWidth - newPoint.y - imgHalfActualWidth;
  return newPoint;
};
