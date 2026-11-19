const getTheTitles = function(arr) {
  /**uses object key to take excalty what the function wants */
  let results = [];
  for (var i = 0; i < arr.length; ++i) {
    results.push(arr[i].title);
  }
  return results;
};

// Do not edit below this line
module.exports = getTheTitles;
