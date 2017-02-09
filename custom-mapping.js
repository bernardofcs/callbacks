var words = ["ground", "control", "to", "major", "tom"];

function map(arr, count){
  var letterCount = [];
  for(var word in arr){
    letterCount.push(count(arr[word]))

  }
  return letterCount;
}

console.log(map(words, function(word) {
  return word.length;
}));





