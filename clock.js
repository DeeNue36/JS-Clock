// class Car {
//     constructor(brand, color, ) {
//         this.brand = brand;
//         this.color = color
//     }
//     move() {
//         console.log(`vroom ${this.brand} ${this.color}`)
//     }
// }
// var newCar = new Car(brand = 'Toyota', 'green')
// var car2 = new Car(brand = 'audi', color = 'black')
// console.log(newCar)
// car2.move()

function autoTimeUpdate() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var am_or_pm = document.getElementById('am_or_pm');
    // console.log(hours)
    if (hours >= 12) {
        am_or_pm.innerHTML = "PM";
    } else {
        am_or_pm.innerHTML = "AM";
    }

    // if (hours > 12) {
    //     hours = hours - 12;
    // }

    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

}
//1000 signifying 1 second
setInterval(autoTimeUpdate, 1000);