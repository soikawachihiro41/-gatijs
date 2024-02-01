window.name = 'John';
const a = () => console.log('Bey ' + this.name);
const person = {
    name: 'Tom',
    hello() {
        console.log('Hello ' + this.name);
        a();
    }
}
person.hello();
