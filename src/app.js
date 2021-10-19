//JS Değişkenler => var,let,const
let sayi1 = 10;
sayi1 = "Gazetecilik";
let student = { id: 1, name: "Akif" };
//console.log(student);

//JS Fonksiyon
//Default değerleri sona yazılır.
function save(puan = 11, ogrenci) {
  //console.log(ogrenci.name + ":", puan);
}
save(undefined, student);

//Array
let students = ["Akif", "Ceyhun", 99];
//console.log(students);
let students2 = [student, { id: 1, name: "Büşra" }, "İstanbul", { city: "Ankara" }];
//console.log(students2);



