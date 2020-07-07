/******************
 * YOUR CODE HERE *
 ******************/
const onlyOdds= function(num){
let newArray= []

for(const odd of num){
  if (odd % 2 ===1){
    newArray.push(odd)
  }
}return newArray
}


const onlyEvens= function(num){
  let newArray= []
  
  for(const even of num){
    if (even % 2 ===0){
      newArray.push(even)
    }
  }return newArray
  }



  const shortNamesOnly = function(name){
    let num= []
    for(const short of name){
      if(short.length < 7){
        num.push(short)
      }
    }return num
  }


  const dNames= function(name){
    let newArray=[]
    for(const d of name){
      if (d.startsWith('D')){
        newArray.push(d)
      }
    }return newArray
  }

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
