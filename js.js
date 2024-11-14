// sting: metinsel ifadeler 
// int:rakamsal ifadeler
// bool mantıksal ifadeler ya true ya da false 
alert("merhabalar ben java yeni başlıyorum")

let isim = "Ali";
let yas = 25;
console.log("Adım " + " isim " + "ve" + yas + "yaşındayım")

let sayi1 = 4;
let sayi2 = 6;
let toplam = sayi1 + sayi2;
let fark = sayi1 - sayi2;
let caprim = sayi1 * sayi2;
let bolum = sayi1 / sayi2; //bunları böyle yazdıktan sonra çalıştırman lazım yoksa kalır böyle valla .
console.log("toplam: " + toplam);
console.log("fark: " + fark);
console.log("caprim: " + caprim);
console.log("bolum: " + bolum); //kodlarda isimler ve conseollar hep aynı olmalı yazı hatası yapmamalısın çünkü kabul etmez.


let yaş = 19;
if (yaş >= 19);//bu işi çok sevdim baya iyiymiş ya.
console.log("Yetişkinsin artık!");
console.log("Henüz yetişkin değilim ben.");

//if else ilgili daha fazla örnek yapıyorum :
let puan = 75;//burdaki puana göre yazılan yazı çıkıyor. not yüksekse ikteki düşükse alttaki çıkıyor.
if (puan >= 90) {
    console.log("Tebrikler harika bir iş vallahi");
}
else if (puan >= 70) {
    console.log("iyi bir not aldın.");
}
else {
    console.log("Daha çok çallışman gerekyor.");
}


let sayi = -5;//burdaki sayıyı negatif ve pozitif olarak değitirerek yazılan yazıyıda değiştirebilirsin çok iyi abi ya:)
if (sayi > 0) {
    console.log("sayı pozitiftir.")
}
else if (sayi < 0) {
    console.log("sayı negatiftir.");
}
else {
    console.log("sayı sıfırdır.");
}


let a = 10;
let b = 20;
let c = 30;
if (a > b) {
    console.log("a , b den büyüktür.");
}
else if (a > b) {
    console.log("a ,b den küçüktür");
}
else if (c > b) {
    console.log("c, b den büyüktür.")
}

let dil = "javaScript";
if (dil === "javaScript") {
    console.log("javaScript öğreniyorum");
}
else {
    console.log("Başka bir dil öğreniyorum.")
}

let havadurumu = "hava güneşli";
let sicaklik = 40;
if (havadurumu === "güneşli") {
    if (sicaklik > 25) {
        console.log("hava çok güzel dışarıya çık");
    }
}
else {
    console.log("hava güzel ama biraz serin dikatli olun ")
}

let yagmuryagiyormu = true;//true yazdığı zaman şemşiyeyi unutma çıkıyor . false yazdığı zaman da şemiyeye gerrek yok çıkıyor.
if (yagmuryagiyormu) {
    console.log("şemsiyeni almayı unutma ");

} else {
    console.log("şemşiyeye ne gerek yok.");
}


let yasında = 15;
let uyruk = "Türk";
if (yas >= 18 && uyruk === "Türk") {
    console.log("oy kullanabilirsin yazıcak")
}
else {
    console.log("oy kullanamazsın beybisi");
}


let yası = 16; // Koşulu yanlış yapmak için yaşı değiştir
let uyrukum = "Amerikan"; // Koşulu yanlış yapmak için uyruğu değiştir

if (yas >= 18 && uyruk === "Türk") {
    console.log("Oy kullanabilirsin.");
} else {
    console.log("Oy kullanamazsın.");
}

let havadurumum = "güneşli";
let sicakligi = 28;
if (havadurumum === "güneşli") {
    if (sicakligi > 25) {
        console.log("hava çok güzel ve gğneşli");
    }
    else {
        console.log("güzel ama dikkatli ol");
    }

}
else {
    console.log("hava soğuk kalın giyin beybisi");
}

//if else yapısı örnekler aylar:
let month = 3;//ocak ayı oluyor .ve burda yazan 1 olduğu için ocak ayı çalışıyor if değerler böyle olması gerekiyor aslında.burdaki rakamları değiştirirsek eğer isismler de değişirler.eğer else if yapısı yazıcaksan diğerleri çalıştırmaz. söyleneni yapar ve durur.
let monthname;
if (month == 1) {
    monthname = "Ocak";
}
if (month == 2) {
    monthname = "Şubat";
}
if (month == 3) {
    monthname = "Mart";
}
if (month == 4) {
    monthname = "Nisan";
}
console.log(monthname);


let monthh = 4;
let monthnames;
if (monthh == 1) {
    monthname = "Ocak";
}
else if (monthh == 2) {
    monthname = "Şubat";
}

else if (monthh == 3) {
    monthname = "mart";
}
else if (monthh == 4) {
    monthname = "Nisan";
}
console.log(monthnames);


//vucut kitle endeksini yapalım şimdi:
let weight = 100;
let height = 1.81;

let bmi = weight / (height * height);
let result;

if (bmi < 18.5) {
    result = "Düşük kilo";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    result = "Sağlıklı";
} else if (bmi >= 25 && bmi <= 29.9); {
    result = "Fazla kilo demek bu "
}//else {
//result = "Obezite";
//bunun gib mesela bu da endeksi hesaplıyor.

//let insan =["mehmet","ahmet","yıldız" 30];
//console.log(insan[0];


let insan = {
    firstname: "mehmet",
    lastname: "ibrahim",
    age: 30,
    greet: function () {
        console.log("merhabalar beybisi");
    },
    getfullname: function () {
        return this.firstname + " " + this.lastname;
        //this bu demektir .
    }


};
console.log(insan.age);
console.log(insan.firstname);
insan.greet();
console.log(insan.getfullname());
//bu object yapısı oluyor beybisi.

function greet(isim) {
    console.log("hello", + isim + "!");

}
greet("yıldız");
//isimi yazdırmayı sağlar bu uygulama da 

function greet(isim2) {
    const hour = new Date().getHours();//const değitimeyen degerlere verilir ve değiştiremezsin.
    let greeting;


    if (hour < 12) {
        greeting = "good morning ";
    }
    if else (hour < 18){

        greeting = "good afternoon";
    }
    else {
        greeting = "good evening";
    }
    console.log(`${greeting}, ${name}!`);

}

function greet() {
    const name = prompt("What is your name?");//promp sting yapıdır ve sıkça kullanılmaz.
    if (name) {
        console.log("Hello, " + name + "!");
    } else {
        console.log("Hello, Guest!");
    }
}

greet();



