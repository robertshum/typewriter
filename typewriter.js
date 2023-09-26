let sentence = "hello there from lighthouse labs";

let waitTime = 0;
sentence += "\n";
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, waitTime);

  //after starting a async call, we can increment the time to wait
  waitTime += 50;
}