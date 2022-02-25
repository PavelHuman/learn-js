function chapter11() {
  console.log('chapter11');

  const migrating = true;
  const fly = function (num) {
    const sound = 'Flying';
    function wingFlapper() {
      console.log(sound);
    }
    for (let i = 0; i < num; i++) {
      wingFlapper();
    }
  };
  function quack(num) {
    const sound = 'Quack';
    const quacker = function () {
      console.log(sound);
    };
    for (let i = 0; i < num; i++) {
      quacker();
    }
  }
  if (migrating) {
    quack(4);
    fly(4);
  }
  const secret = '007';
  function getSecret() {
    const secret = '008';
    function getValue() {
      return secret;
    }
    return getValue;
  }
  const getValueFun = getSecret();
  getValueFun();

  const justAVar = "Oh, don't you worry about it, I'm GLOBAL";

  function whereAreYou() {
    const justAVar = 'Just an every day LOCAL';
    function inner() {
      return justAVar;
    }
    return inner;
  }
  const innerFunction = whereAreYou();
  const result = innerFunction();
  console.log(result);

  function makeCounter() {
    let count = 0;
    return {
      increment() {
        count++;
        return count;
      },
    };
  }
  const counter = makeCounter();
  console.log(counter.increment());
  console.log(counter.increment());

  function makePassword(password) {
    return function guess(passwordGuess) {
      return (passwordGuess === password);
    };
  }
  const tryGuess = makePassword('secret');
  console.log(`Guessing 'nope': ${tryGuess('nope')}`);
  console.log(`Guessing 'secret': ${tryGuess('secret')}`);

  function multN(n) {
    return function multM(m) {
      return (m * n);
    };
  }
  const mult = multN(3);
  console.log(`Multiplying 2: ${mult(2)}`);
  console.log(`Multiplying 2: ${mult(3)}`);

  function makeTimer(doneMessage, n) {
    setTimeout(() => {
      alert(doneMessage);
    }, n);
    doneMessage = 'OUCH!';
  }
  makeTimer('Cookies are done!', 1000);
}
export default chapter11;
