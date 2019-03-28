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

const folderFinder = testDir => {
  const targetFolder = "node_modules";
  const targeted = fs.readdirSync(testDir).forEach(function(file) {
    if (file === targetFolder) return console.log(file);
  });
};

folderFinder("./testDirectory");

// const result = new FindModulesSize(1, "./testDirectory");
// console.log(result.readFiles());

module.exports = FindModulesSize;

// const stats = fs.statSync(file);
// return stats.size;
