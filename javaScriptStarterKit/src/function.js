function addToCart(productName = "Telefon", quantity) {
  console.log(productName + " Sepete eklendi" + " adet :" + quantity);
}
//addToCart();
addToCart("Bilgisayar", 10);
//addToCart("Kamera");

//arrow function
let sayHello = () => {
  console.log("Hello World");
};
sayHello();

let sayHello2 = function () {
  console.log("Hello World2");
};
sayHello2();

function addToCart2(product) {
  console.log("Ürün : " + product.productName);
  console.log("Adet : " + product.unitPrice);
  console.log("Fiyat : " + product.quantity);
}
let product1 = { productName: "Elma", unitPrice: 11, quantity: 5 };
addToCart2(product1);

let product2 = { productName: "Elma", unitPrice: 11, quantity: 5 };
let product3 = { productName: "Elma", unitPrice: 11, quantity: 5 };
product2 = product3;
product2.productName = "KARPUZ";
console.log(product3.productName); //referans tip

let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
console.log(sayi1); //değer tip

function addToCart4(products) {
  console.log(products);
}
let products = [
  { productName: "Bilgisayar", unitPrice: 11, quantity: 5 },
  { productName: "Telefon", unitPrice: 17, quantity: 7 },
  { productName: "Tripot", unitPrice: 19, quantity: 9 },
];
addToCart4(products);

//rest =>toparlar spread=>ayrıştırır
function add(birsey,...numbers) {//rest
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log(total);
  console.log(birsey);
}
add(20, 30);
//add(20,30,40);
//add(20,30,40,50);

let numbers = [30,10,50,600,150,250];
console.log(Math.max(...numbers));//spread

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
















