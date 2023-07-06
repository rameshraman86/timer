// Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments




const args = process.argv;
const timers = args.slice(2).map((val) => {
  return Number(val);
});

for(let timer of timers) {
  if(!isNaN(timer) && timer >= 0) {
    setTimeout(() => {
      console.log(`${timer} seconds alarm over.`)
      process.stdout.write('\x07');  
    }, Number(timer)*1000);
    break;
  }
  console.log(`${timer} is not a valid number.`);
}


