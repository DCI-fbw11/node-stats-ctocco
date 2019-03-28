//this is my first commit
var fs = require("fs");
const path = require("path");

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
  // list.forEach(function(file) {
  //   // console.log(file);
  //   file = dir + "/" + file + target;
  //   console.log(file);
  //   var stat = fs.statSync(file);
  //   results.push(file);
  // });
  return results;
};

console.log(
  walk(
    "/Users/claudiotocco/Documents/code/javascript2018/react",
    "node_modules"
  )
);

module.exports = FindModulesSize;

// const stats = fs.statSync(file);
// return stats.size;
