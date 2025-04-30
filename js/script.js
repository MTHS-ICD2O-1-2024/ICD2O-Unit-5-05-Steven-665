// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: Apr 2025
// This file contains the JS functions for index.html
/**
 * * This function checks if the user has selected the random number from above
*/
// eslint-disable-next-line no-unused-vars
function identifyTriangleType() {
  // input
  const lengthA = parseInt(document.getElementById('length-A').value)
  const lengthB = parseInt(document.getElementById('length-B').value)
  const lengthC = parseInt(document.getElementById('length-C').value)

  // process
  
  if (lengthA == lengthB && lengthB ==lengthC && lengthA ==lengthC) {
    document.getElementById('triangleType').innerHTML =
      '<p>It is Equilateral triangle. </p>'
  } else if (lengthA == lengthB || lengthB == lengthC || lengthA == lengthC)  {
    document.getElementById('triangleType').innerHTML =
      '<p>It is isosceles triangle. </p>'
  } else if ((lengthA < lengthB || lengthA > lengthB) || (lengthB < lengthC || lengthB > lengthC) || (lengthA < lengthC || lengthA > lengthC))  {
    document.getElementById('triangleType').innerHTML =
      '<p>It is Scalene triangle. </p>'
  } else if (lengthA + lengthB < lengthC) {
    document.getElementById('triangleType').innerHTML =
      '<p>It does not form a triangle. </p>'
  }
}