function vowel(string){
  if(typeof(string) != "string") return -1
    var split =string.split('')
    var count = 0;
    for (var i = 0; i < split.length; i++) {
      if (split[i] == 'a' | split[i] == 'e' | split[i] == 'i' | split[i] == 'o' | split[i] == 'u'){
        count++
      }
    }
    return count
}


module.exports = vowel
