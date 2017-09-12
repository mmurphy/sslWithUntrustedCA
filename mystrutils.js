exports.firstChars = firstChars;
exports.getBodyDetails = getBodyDetails;

function getBodyDetails(str) {
  var ret;
  if (str) {
    ret = `${str.length} bytes, beginning with: \"${firstChars(str,50)}\"`;
  }
  return ret;
}

function firstChars(str, num) {
  return str.substring(0, Math.min(50, str.length));
}