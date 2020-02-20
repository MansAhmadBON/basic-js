module.exports = function countCats(arr) {
  let sumCats = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentArray = arr[i];
    for (let j = 0; j < currentArray.length; j++) {
      if (currentArray[j] === "^^") sumCats = sumCats + 1;
    };
  };
  return sumCats;
};
