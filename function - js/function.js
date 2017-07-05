var array = ["abc", "acb", "b^ac", "te   st", "b   ca", "cab ", "cbv  a"]


function findUniq(array, value) {
    array=array.map(function(element){return element.replace(/[\s{2,}]+/g, '')})
    for (var i = 0; i < array.length; i++) {
    if (array[i]===value) return value;
  }
    
    return false;
}

findUniq(array, 'test') // 'test'


// value - значение в кавычках




