module.exports = function check(str, bracketsConfig) {

  let arrayJoinBrackets = [];
  for (i = 0; i < bracketsConfig.length; i++) {
    arrayJoinBrackets.push(bracketsConfig[i].join(''));
  }
  console.log(arrayJoinBrackets);

  let newStr = str;
  for (i = 0; i < arrayJoinBrackets.length; i++) {
    if (newStr.includes(arrayJoinBrackets[i])) {
      newStr = newStr.replace(arrayJoinBrackets[i], '')

      i = -1
    }
  }

  if(newStr == ''){
    return true;
  } else{
    return false;
  }
 
}
