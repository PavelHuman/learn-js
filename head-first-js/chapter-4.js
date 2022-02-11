function chapter4() {
  console.log('chapter4');
  const products = ['Choo Choo Chocolate', 'Icy Mint', 'Cake Batter', 'Bubblegum'];
  const last = products.length - 1;
  const recent = products[last];
  console.log(recent);

  function makePhrases() {
    const words1 = ['24/7', 'multi-tier', '30,000 foot', 'B-to-B', 'win-win'];
    const words2 = ['empowered', 'value-added', 'oriented', 'focused', 'aligned'];
    const words3 = ['process', 'solution', 'tipping-point', 'strategy', 'vision'];
    const rand1 = Math.floor(Math.random() * words1.length);
    const rand2 = Math.floor(Math.random() * words2.length);
    const rand3 = Math.floor(Math.random() * words3.length);
    const phrase = `${words1[rand1]} ${words2[rand2]} ${words3[rand3]}`;
    alert(phrase);
  }
  makePhrases();

  //  const scores = [60, 50, 60, 58, 54, 54,
  //    58, 50, 52, 54, 48, 69,
  //    34, 55, 51, 52, 44, 51,
  //    69, 64, 66, 55, 52, 61,
  //    46, 31, 57, 52, 44, 18,
  //    41, 53, 55, 61, 51, 44];
  //  let highScore = 0;
  //  let output;
  //  for (i = 0; i < scores.length; i++) {
  //    output = `Bubble solution #${i} score: ${scores[i]}`;
  //    console.log(output);
  //    if (scores[i] > highScore) {
  //      highScore = scores[i];
  //    }
  //  }
  //  console.log(`Bubbles tests: ${scores.length}`);
  //  console.log(`Highest bubble score: ${highScore}`);

  //  const bestSolutions = [];
  //  for (var i = 0; i < scores.length; i++) {
  //    if (scores[i] == highScore) {
  //      bestSolutions.push(i);
  //    }
  //  }
  //  console.log(`Solutions with highest score: ${bestSolutions}`);

  const costs = [0.25, 0.27, 0.25, 0.25, 0.25, 0.25,
    0.33, 0.31, 0.25, 0.29, 0.27, 0.22,
    0.31, 0.25, 0.25, 0.33, 0.21, 0.25,
    0.25, 0.25, 0.28, 0.25, 0.24, 0.22,
    0.20, 0.25, 0.30, 0.25, 0.24, 0.25,
    0.25, 0.25, 0.27, 0.25, 0.26, 0.29];
  const scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

  function printAndGetHighScore(scores) {
    let highScore = 0;
    let output;
    for (let i = 0; i < scores.length; i++) {
      output = `Bubble solution #${i} score: ${scores[i]}`;
      console.log(output);
      if (scores[i] > highScore) {
        highScore = scores[i];
      }
    }
    return highScore;
  }
  function getBestResults(scores, highScore) {
    const bestSolutions = [];
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] == highScore) {
        bestSolutions.push(i);
      }
    }
    return bestSolutions;
  }
  const highScore = printAndGetHighScore(scores);
  console.log(`Bubbles tests: ${scores.length}`);
  console.log(`Highest bubble score: ${highScore}`);

  const bestSolutions = getBestResults(scores, highScore);
  console.log(`Solutions with highest score: ${bestSolutions}`);

  function getMostCostEffectiveSolution(scores, costs, highscore) {
    let cost = 100;
    let index;

    for (let i = 0; i < scores.length; i++) {
      if (scores[i] == highscore) {
        if (cost > costs[i]) {
          index = i;
          cost = costs[i];
        }
      }
    }
    return index;
  }
  const mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
  console.log(`Bubble Solution #${mostCostEffective} is the most cost effective`);

  const products1 = ['Choo Choo Chocolate',
    'Icy Mint', 'Cake Batter',
    'Bubblegum'];
  const hasBubbleGum = [false, false, false, true];
  let y = 0;
  for (y = 0; y < hasBubbleGum.length; y += 1) {
    if (hasBubbleGum[y]) {
      console.log(`${products1[y]} contains bubble gum`);
    }
  }
}
export default chapter4;
