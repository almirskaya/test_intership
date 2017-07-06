function findUnique(array) {
  var obj = {};

  for (var i = 0; i < array.length; i++) {
    var str = array[i];
    obj[str] = true; 
  }

  return Object.keys(obj); 
}

