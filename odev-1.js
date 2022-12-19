let nameInput = prompt("Lütfen Adınızı Giriniz");

let userName = document.querySelector('#name');
let time = document.querySelector('#time');
let gun = document.querySelector('#gun');;
// let date = new Date();


userName.innerHTML = nameInput;



setInterval(anlikZaman, 1000);

function anlikZaman() {
    let zaman = new Date();
    time.innerHTML = `${zaman.toLocaleTimeString()}`
    zaman.getDay() == 1 ?  (gun.innerHTML = "Pazartesi"):
    zaman.getDay() == 2 ?  (gun.innerHTML = "Salı"):
    zaman.getDay() == 3 ?  (gun.innerHTML = "Çarşamba"):
    zaman.getDay() == 4 ?  (gun.innerHTML = "Perşembe"):
    zaman.getDay() == 5 ?  (gun.innerHTML = "Cuma"):
    zaman.getDay() == 6 ?  (gun.innerHTML = "Cumartesi"):
    zaman.getDay() == 7 ?  (gun.innerHTML = "Pazar"):
    gun.innerHTML = "Yok";
}

