function chapter1() {
  console.log('chapter1');
  const price = 28.99;
  const discount = 10;
  const total = price - (price * (discount / 100));
  if (total > 25) {
    freeShipping();
  }

  let count = 10;
  while (count > 0) {
    juggle();
    count -= 1;
  }

  const dog = { name: 'Rover', weight: 35 };
  if (dog.weight > 30) {
    alert('WOOF WOOF');
  } else {
    alert('woof woof');
  }

  const circleRadius = 20;
  const circleArea = Math.PI * (circleRadius * circleRadius);
  console.log(circleArea);
}
export default chapter1;
