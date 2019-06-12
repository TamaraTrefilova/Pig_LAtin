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
       if(temp.length === 1){
         array[index] = addToEnd(temp,"ay");
      } else if(vow.includes(array[index].charAt(0))){
         array[index] = addToEnd(array[index],"way");
       } else {
         var idx = 1;
         while((!vow.includes(temp.charAt(idx))&&idx<temp.length)){
           if(temp.charAt(idx) == 'q' && temp.charAt(idx+1) == 'u' ){
              idx+=2;
              break;
           }
           idx++;
         }
         var add = temp.substr(0,idx);
         var rest = temp.substr(idx, temp.length -1);
         array[index] = addToEnd(rest + add,"ay");
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
   // alert(wordsArray);
   pigLatin(wordsArray);
   var newString = wordsArray.join(' ');
   // alert(string);
    $("#outputA").text(string);
    $("#outputB").text(newString);

   $("#output").show();


 });

});
