//this is my first commit
var fs = require("fs");
const path = require("path");

//First attempt at solving the problem
class FindModulesSize {
  constructor(num, dir) {
    this.num = num;
    this.dir = dir;
  }

  add(numToAdd) {
    // this.throwOnBadDatatype(numToAdd);
    this.num = this.num + numToAdd;
    return this;
  }

  readDir() {
    const fileSize = fs.readdirSync(this.dir);
    const size = fileSize.map(file => {
      if (file === "node_modules") {
        const stats = fs.statSync(file);
        return stats.size;
      }
    });
    return size[1].toString();
  }

  readFiles() {
    const fileSize = fs.readdirSync(this.dir);
  }
}

// const result = new FindModulesSize(1, "./testDirectory");
// console.log(result.readDir());

// Below is second attempt at solving the problem

var results = [];

const walk = function(dir, target) {
  var list = fs.readdirSync(dir);
  if (list.includes(target)) {
    let path = dir + "/" + target;
    const stat = fs.statSync(path);
    results.push(stat.size);
  } else {
    list.forEach(function(file) {
      let stat = fs.statSync(dir + "/" + file);
      let newPath = dir + "/" + file;
      if (stat.isDirectory()) {
        walk(newPath, target);
      }
    });
  }
  return results;
};

// initiating the file to run you put the path below of the file you would like to search
walk("/Users/claudiotocco/Documents/code/javascript2018/react", "node_modules");

//Function that output the user message to check file size
function nodeStats(resultsArray) {
  let length = resultsArray.length;
  const tally = resultsArray.reduce((acc, currentValue) => acc + currentValue);
  return console.log(
    `you have ${length} projects with node_modules with a total size of ${tally}`
  );
}

nodeStats(results);

module.exports = FindModulesSize;
