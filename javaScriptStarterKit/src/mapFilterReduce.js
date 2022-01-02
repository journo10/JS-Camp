let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
  { id: 2, productName: "Bigisyar", quantity: 2, unitPrice: 30 },
  { id: 3, productName: "Javascript", quantity: 1, unitPrice: 20 },
  { id: 4, productName: "Vue", quantity: 2, unitPrice: 100 },
  { id: 5, productName: "Angular", quantity: 3, unitPrice: 30 },
  { id: 6, productName: "React", quantity: 5, unitPrice: 150 },
];

//map
console.log("<ul>");
cart.map((product) => {
  console.log(
    "<li>" +
      product.productName +
      " : " +
      product.unitPrice * product.quantity +
      "</li>"
  );
});
console.log("</ul>");

//reduce
let total = cart.reduce(
  (acc, product) => acc + product.unitPrice * product.quantity,
  0
);

console.log(total);

//filter
let quantityOver2 = cart.filter((product) => product.quantity > 2);

console.log(quantityOver2);

//ÖRNEK1
function addToCart(sepet) {
  sepet.push({ id: 7, productName: "CSS", quantity: 1, unitPrice: 20 });
}

addToCart(cart);

console.log(cart);

//ÖRNEK2
let sayi = 10;

function sayiTopla(number) {
  number += 1;
}
sayiTopla(sayi);
console.log(sayi);
