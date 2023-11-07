var foo = "hello";
(function () { 
   var bar = "World";
   alert( foo + bar); // This will pop up an alert "helloWorld"
})();
alert( foo + bar); //This will throw an error since bar variable is private


if( [] ) console.log("array is true"); // This will log the message since this is not a falsy value
if ([] == true) console.log("array == true");   // This will not log nothing since the left operand will be converted [] -> "" -> 0
                                                // And left operand will be converted true -> 1 therefore 0 == 1 -> 0



for(let i = 0; i < 5; ++i){     
     setTimeout(function(){
          console.log("counter: ", i);      // This function will log all the counter after 100 ms, in order
     }, 100);                               // It will not take 500 ms, it will take 100 ms aproximated
}


var obj = {
   prop: {}
};

delete obj.prop;            // This will return true since it deleted the prop
console.log(obj.prop);      // This will log undefined since the prop has been deleted

