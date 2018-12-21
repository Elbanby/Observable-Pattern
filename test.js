const Subject = require('./subject');
const observer = require('./observer');
const observer2 = require('./observer2');

function main() {
  setTimeout(()=>{
    Subject.setHumedity(11);
  },1000);
}

main();
