function hello(name) {

  name = name || 'Tom';
  console.log('hello' + name);
}
hello()

let name;

name && hello(name);
