var arr = [1, 2, 3, 4, 45];
var sum = function (array) {
    return array.reduce(function (acc, it) { return acc + it; }, 0);
};
console.log(sum(arr));
