// add solution here
function theBeatlesPlay(musiciansArray,instrumentsArray){
  var array = musiciansArray
  for(let i = 0; i < musiciansArray.length; i++){
      myString = '${musiciansArray} plays ${instrumentsArray}'
      array[i] = myString
  }
  return array
}
