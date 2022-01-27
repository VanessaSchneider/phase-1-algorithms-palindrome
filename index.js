function isPalindrome(word) {

  const newArray =Array.from(word) 
  const reversedArray= newArray.reverse()
  const reversedWord = reversedArray.join("")
  if (word === reversedWord) {return true}
  else {return false}
  
  
  
  }
  

module.exports = isPalindrome;


