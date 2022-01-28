export default () => {
  const num = 20;

  function showiirstMessage() {
    console.log('text');
    const num = 10;
    console.log(num);
  }

  showiirstMessage('Hello World!');
  console.log(num);

  // function calc(a, b) {
  // return (a + b);
  // }

  // console.log(calc(4, 3));
  // console.log(calc(5, 6));
  // console.log(calc(10, 6));

  function ret() {
    const num = 50;

    return num;
  }

  const anotherNum = ret();
  console.log(anotherNum);

  const logger = function logger() {
    console.log('Hello');
  };

  logger();

  const calc = (a, b) => {
    console.log('1');
    return a + b;
  };

  calc();
};
