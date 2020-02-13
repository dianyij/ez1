//
//  File: index.js
//  Project: ez1
//

const fs = require("fs");
const path = require("path");

exports.walk = dir => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + "/" + file;
    let stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(this.walk(file));
    else results.push(file);
  });
  return results;
};

exports.sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

exports.getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

exports.toUTC = time => {
  if (!time) return null;
  return new Date(time).getTime();
};

exports.isNotEmpty = obj => {
  if (!obj || obj == "null" || obj == "false") return false;
  if (typeof obj === "object") {
    let values = obj;
    if (!Array.isArray(obj)) {
      values = Object.values(obj);
    }
    for (let i = 0; i < values.length; i++) {
      if (this.isNotEmpty(values[i])) {
        return true;
      }
    }
  } else if (obj) {
    return true;
  }
  return false;
};
