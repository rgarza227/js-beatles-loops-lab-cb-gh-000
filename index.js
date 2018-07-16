// add solution here
function theBeatlesPlay(musiciansArray,instrumentsArray){
  var array = musiciansArray
  for(let i = 0; i < musiciansArray.length; i++){
      var myString = musiciansArray[i] + " plays "+ instrumentsArray[i]
      array[i] = myString
  }
  return array
}

function johnLennonFacts(facts){

  while (var i < facts.length){
    var myString = facts[i] + "!!!"
    facts[i] = myString
    i++
  }
  return facts
}
