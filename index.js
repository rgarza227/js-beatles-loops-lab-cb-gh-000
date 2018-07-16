// add solution here
function theBeatlesPlay(musiciansArray,instrumentsArray){
  var array
  for(let i = 0; i < musiciansArray.length; i++){
    if(i == 0){
      array[i] = "John Lennon plays guitar"
    }
    else {
      array[i] ="${musiciansArray} plays ${instrumentsArray}"
    }
  }
  return array
}
