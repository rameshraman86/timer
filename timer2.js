const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Set timer for how many seconds? : ', (answer) => {
  if (answer === 'b' || answer === 'B') {
    process.stdout.write('\x07');  //code that beeps
    rl.close();
  }

  const timerLengthInSeconds = Number(answer);
  if (!isNaN(timerLengthInSeconds) && timerLengthInSeconds >= 0) {
    console.log(`Setting timer for ${timerLengthInSeconds}...`);
    console.log(`${timerLengthInSeconds} seconds timer started...`);

    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`${timerLengthInSeconds} seconds timer over.`);
    }, Number(timerLengthInSeconds) * 1000);
    rl.close();
  }
});

rl.on('SIGINT', () => {
  console.log('\nThanks for using me, ciao!');
  rl.close();
});
