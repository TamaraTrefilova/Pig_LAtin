var string;
var wordsArray =[];
var vow = ["a","e","i", "o", "u"];
var temp;

var addToEnd = function(word, characters){
    return word.concat(characters);
}


var pigLatin = function(array){

  for(var index = 0; index<array.length; index++){
        temp = array[index];
        // alert(array[index] + "  element at "+ index);
       if(temp.length === 1 && vow.includes(temp)){
         array[index] = addToEnd(temp,"ay");
         alert(temp);
       } else if(vow.includes(array[index].charAt(0))){
         alert(array[index].charAt(0) +"  is a first vow");
         array[index] = addToEnd(array[index],"way");
       }

  }
  return array;
};

$(function(){
 $("form").submit(function(event){
   event.preventDefault();
   // debugger;
   string = $("input#stringInput").val();
   alert(string);
   wordsArray = string.split(" ");
   alert(wordsArray);
   pigLatin(wordsArray);
   string = wordsArray.join(' ');
   alert(string);
   $("#output").show();


 });

});
