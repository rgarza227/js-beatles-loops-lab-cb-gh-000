// add solution here
function theBeatlesPlay(musiciansArray,instrumentsArray){
  var array = musiciansArray
  for(let i = 0; i < musiciansArray.length; i++){
      var myString = musiciansArray[i] + " plays "+ instrumentsArray[i]
      array[i] = myString
  }
  return array
}
