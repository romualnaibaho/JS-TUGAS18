
var str = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

var word_to_found = "long established";

var index_start = str.search(word_to_found);
var index_end = word_to_found.length + index_start;

console.log(str.substring(index_start, index_end));