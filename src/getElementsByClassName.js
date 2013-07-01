// A recursive function to return an array of elements that match a given class in the DOM

var getElementsByClassName = function (className) {
    var result = [];
    function inspect(element) {
        var children = element.children;
        for (var i = 0; i < children.length; i++) {
            if (children[i].classList.contains(className)) {
                result.push(children[i]);
            }
            if (children[i].hasChildNodes) {
                inspect(children[i]);
            }
        }
    }
    inspect (document.body);
    return result;
};
