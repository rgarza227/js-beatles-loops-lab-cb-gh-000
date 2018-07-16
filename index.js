// add solution here
function theBeatlesPlay(musiciansArray,instrumentsArray){
  var array = musiciansArray
  for(let i = 0; i < musiciansArray.length; i++){
      array[i] = '${musiciansArray[i]} plays ${instrumentsArray[i]}'
  }
  return array
}
