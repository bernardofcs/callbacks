var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(obj){
  var x2 = obj['x'] * obj['x'];
  var y2 = obj['y'] * obj['y'];
  var sq = x2 + y2;
  return Math.sqrt(sq);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);