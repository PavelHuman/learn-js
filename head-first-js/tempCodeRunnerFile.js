const word = 'bottles';
const count1 = 99;
while (count1 > 0) {
  console.log(`${count1} ${word} of beer on the wall`);
  console.log(`${count1} ${word} of beer,`);
  console.log('Take one down, pass it around,');
  count = count1 - 1;
  if (count1 > 0) {
    console.log(`${count} ${word} of beer on the wall.`);
  } else {
    console.log(`No more ${word} of beer on the wall.`);
  }
}
