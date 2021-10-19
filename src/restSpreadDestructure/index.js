//rest
let showProducts = function (id, ...products) {
    console.log(id);
    console.log(products[0]);
}

//console.log(typeof showProducts)
//showProducts(11,["Elma","Armut","Karpuz"]);

//Spread =>Ayrıştırma demektir.
let points = [3, 5, 7, 17, 11, 9, 23, 39, 13, 93, 1, 4];
console.log(...points);
console.log(Math.max(...points));
console.log("ABC", "D", ..."EFG", "H");

//Destructuring =>Parçalamak demektir.
let populations = [5000, 20000, 30000, [40000, 100000]];
let [small, medium, high, [veryHigh, maximum]] = populations;
console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximum);

function someFunction([small0], num) {
    console.log(small0);
}
someFunction(populations);

let category = { id: 1, name1: "İçeçekler" }
console.log(category.id);
console.log(category["name1"]);

let { id, name1 } = category;
console.log(id);
console.log(name1);
