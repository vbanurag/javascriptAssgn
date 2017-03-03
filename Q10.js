(function() {
    var string = prompt("Enter a string", "");
    var hash = {};
    for (var i = 0; i < string.length; i++) {
        if (hash[string.charAt(i)] != 1) {
            hash[string.charAt(i)] = 1;
        }
    }
    var retVal = " ";
    for (var key in hash) {
        retVal = retVal + "" + key;
    }
    alert("String of unique char is  : " + retVal);
})();
