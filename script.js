const dogs = [{
        name: 'Snickers',
        age: 2
    },
    {
        name: 'hugo',
        age: 8
    }
]


function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}


// Regular
console.log(`
_____1._____
`);
console.log('Hello');


// Interpolated
console.log(`
_____2._____
`);
console.log('Hello I am a %s string!', '🔥');


// Styled
console.log(`
_____3._____
`);
console.log('%c I am some great text', 'font-size : 50px; background-color : red; text-shadow : 10px 10px 0 blue');


// Warning!
console.log(`
_____4._____
`);
console.warn('OH NOOO');


// Info
console.log(`
_____5._____
`);
console.error('Shit!');


// Testing
console.log(`
_____6._____
`);
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');


// clearing
console.log(`
_____7._____
`);
// console.clear();


// Viewing DOM Elements
console.log(`
_____8._____
`);
console.log(p);
console.dir();


// Grouping Together
console.log(`
_____9._____
`);
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
})


// counting
console.log(`
_____10._____
`);
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');


// timing
console.log(`
_____11._____
`);
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });


// table
console.log(`
_____12._____
`);
console.table(dogs);