let numbers = 0;

do {
    numbers++;
    console.log(numbers);
} while (numbers < 1000);

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
};

const objKeys = () => {

    console.log(Object.keys(person));
}
objKeys();

const objEntries = () => {

    console.log(Object.entries(person));
}
objEntries();

let person2 = {
    "firstName": "John",
    "lastName": "Doe",
    "birthDate": "Jan 15, 2000",
    "gender": "male",
};

let person3 = {
firstName: "Anna",
lastName: "Wolfe",
birthDate: "Jan 5, 1986",
gender: "female",
};

let person4 = {
firstName: "Kayleigh",
lastName: "McDougall",
birthDate: "Jan 12, 1975",
gender: "female",
};

let arrayOfPersons = [person, person2, person3, person4];

const birthday = () => {

    for(let date of arrayOfPersons) {
        var year = date.birthDate.slice(-4);
        if (year % 2 !== 0) {
            console.log(date);
        }
    }
}
birthday();

const map1 = arrayOfPersons.map(people => {
    console.log(people)
})

const filter1 = arrayOfPersons.filter(gender => {
    if(gender.gender === 'male') {
        console.log(gender);
    }
})

const birthBefore = () => {
    for(let date of arrayOfPersons) {
        var year = date.birthDate.slice(-4);
        if (year < 1990) {
            console.log(date)
        }
    }
}
birthBefore();