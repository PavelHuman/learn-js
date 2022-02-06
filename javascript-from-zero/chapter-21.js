function chapter21() {
  console.log('chapter-21');

  let bool;

  bool = Boolean(true);
  bool = Boolean('hello');
  bool = Boolean(new Boolean()); // Внедрение!
  bool = Boolean('false'); // строка
  bool = Boolean({});
  bool = Boolean(3.14);
  bool = Boolean(['a', 'b', 'c']);

  const boolObject = new Boolean(false);

  if (boolObject) {
    console.log('Bool, you so crazy!!!');
  }

  function theSoiution(answer) {
    if (answer === 42) {
      console.log('You have nothing more to learn!');
    }
  }

  theSoiution('42');

  console.log(new String('A') == new String('A')); // false
  console.log([1, 2, 3] == [1, 2, 3]); // false
  console.log({ a: 1 } == { a: 1 }); // false
  let num;
  console.log('num', num == num);
}
export default chapter21;
