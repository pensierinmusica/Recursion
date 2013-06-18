// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"' ;
  } else if (Array.isArray(obj)) {
    return "[" + _(obj).map(stringifyJSON).join(',') + "]";
  } else if (typeof obj === 'object') {
      if (obj === null) {
        return 'null';
      } else {
        var result = [];
        _(obj).each(function(value, key) {
          if (typeof value !== 'function' && typeof value !== 'undefined') {
             result.push(stringifyJSON(key) + ":" + stringifyJSON(value));
          }
        });
        return "{" + result.join(',') +  "}";
      }
  } else if (obj === 'undefined') {
    return '';
  } else if (typeof obj === 'function') {
    return '';
  } else {
    return obj + '';
  }
};
