const a = {
  prop: 0
}

const b = {
  prop: 0
}
console.log(a == b);

//参照先が違うためfalse

console.log(a.prop === b.prop);

//これは参照先の値を比較しているので、true

const c = a;
console.log(a === c);

//これはtrueオブジェクトの参照先が一緒のため


