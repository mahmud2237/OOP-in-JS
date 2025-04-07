function createHuman(name, age, numberOfToes) {
    // Write code here
    return {
        name: name,
        age: age,
        numberOfToes: numberOfToes
    }
}
const jack = createHuman('Jack', 51, 10);

console.log(jack.name);
console.log(jack.age);
console.log(jack.numberOfToes);