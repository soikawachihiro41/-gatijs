window.name = 'John';
const person = {
    name: 'Tom',
    hello() {
        console.log('Hello ' + this.name);
        const a = () => console.log('Bey ' + this.name);
        a();
    }
}
//person.hello();
function b() {
    const a = () => console.log('Bey ' + this.name);
    a();
}

b();
