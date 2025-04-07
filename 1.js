// Write code here
const myObject = {
    name: 'ObjectsAreCool!',
    lesson: 'learned',
    calculate: function(num1, num2){
        return num1 * num2;
    }
}
console.log(myObject.name);
console.log(myObject['lesson']);
console.log(myObject.calculate(2, 3));
