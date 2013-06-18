// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var result = [];
  function inspect(element) {
    var obj = element.childNodes;
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].classList !== undefined && obj[i].classList.contains(className)) {
        result.push(obj[i]);
      }
      if (obj[i].hasChildNodes) { inspect(obj[i]); }
    }
  }
  inspect (document.body);
  return result;
};
