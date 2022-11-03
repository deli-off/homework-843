
let cars = [4000, 27000, 16000, 10000, 11000, 17000, 50000, 70000, 60000, 35000, 300, 2000, 8000, 80000]
let cheap = []
cheap = cars.filter(price => price <= 35000)

alert(
    cheap
);

let arr = [4, 1, 2, 5, 4, 46, 11, 9, 27, 8, 33, 09]

let even = [];
let odd = [];


even = arr.filter(number => number % 2 === 0)

alert(even);

odd = arr.filter(number => number % 2 !== 0)

alert(odd)

// let students = ['Azamat', 'Kamron', 'Naufal', 'Parviz', 'Amin', 'Samir', 'Daler', 'Kamron']


// let usName = prompt('Any name')

// usName = students.splice(students)

// console.log(usName);