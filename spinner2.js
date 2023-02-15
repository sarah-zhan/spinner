const animation = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];
let delay = 100;
for (let a of animation) {
  setTimeout(() => process.stdout.write(a), delay += 200);
};
setTimeout(() => console.log(''), 1100);


