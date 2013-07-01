// A recursive function to convert JSON objects into strings

var stringifyJSON = function (item) {
  if (typeof item === 'string') {
    return '"' + item + '"' ;
  } else if (Array.isArray(item)) {
    return "[" + _(item).map(stringifyJSON).join(',') + "]";
  } else if (typeof item === 'object' && item !== null) {
    var result = [];
    _(item).each(function(value, key) {
      if (typeof value !== 'function' && typeof value !== 'undefined') {
        result.push(stringifyJSON(key) + ":" + stringifyJSON(value));
      }
    });
    return "{" + result.join(',') +  "}";
  } else {
    return item + '';
  }
};

