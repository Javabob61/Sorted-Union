
function uniteUnique(arr) {
  
    var args = Array.from(arguments); // must use Array from to see all the arguments.
                                     // otherwise, only the first Array will be accessable.
    var concatArray = args[0];      // sets the beginning value of concatArray.  
    var finalArray = [];
    var tempArray = [];
 
    for (var i = 1; i < args.length; i++) {
      concatArray = concatArray.concat(args[i]);      
    }
  
    finalArray = concatArray;    
    
    var arrayLength = concatArray.length;      
  
    for (var j = 0; j < arrayLength; j++) { 
      for (var k = j + 1; k < arrayLength; k++) {       
          if (finalArray[j] === finalArray[k]) {
          finalArray[k] = "";
          }     
      }       
    }
  
    for (var l = 0; l < arrayLength; l++) {        
        if (finalArray[l] !== "") {
          tempArray.push(finalArray[l]);
        }     
    } 
  
    console.log(tempArray);  
    return tempArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);