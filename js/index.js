
function uniteUnique(arr) {
  
    var args = Array.from(arguments); // must use Array from to see all the arguments.
                                     // otherwise, only the first Array will be accessable.
    var concatArray = args[0];      // sets the beginning value of concatArray.  
    var finalArray = [];
 
    for (var i = 1; i < args.length; i++) {
      concatArray = concatArray.concat(args[i]);      
    }
  
    finalArray = concatArray;
    
    console.log(concatArray);
    var arrayLength = concatArray.length;      
  
    for (var j = 0; j < arrayLength; j++) {      
      //console.log("j = " + j);       
      for (var k = j + 1; k < arrayLength; k++) {
        //console.log("k = " + k);
          if (finalArray[j] === finalArray[k]) {
          finalArray = finalArray.splice(0, k);
          console.log(finalArray);
        }     
      }       
    }      
   //console.log(finalArray);  
  //return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);