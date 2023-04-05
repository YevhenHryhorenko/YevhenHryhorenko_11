const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, value) {
  return array.filter(item => item != value)
}

console.log(removeElement(array, 5));