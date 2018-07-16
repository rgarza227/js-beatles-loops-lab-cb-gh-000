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
  var i = 0
  while (i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  var myArray
  var love = "I love the Beatles!"
  do{
    myArray.unshift(love)
    number++
  } while (number <= 15);
  return myArray
}
