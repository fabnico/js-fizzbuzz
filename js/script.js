var htmlPrint = document.getElementById('numberHTML');

for (var i = 1; i <= 100; i++){

   if(i % 3 == 0 && i % 5 == 0){
      htmlPrint.innerHTML += "<li>" + "FizzBuzz" + "</li>"
   }else if (i % 5 == 0) {
      htmlPrint.innerHTML += "<li>" + "Buzz" + "</li>"
   } else if (i % 3 == 0){
      htmlPrint.innerHTML += "<li>" + "Fizz" + "</li>"
   }else{
      htmlPrint.innerHTML += "<li>" + i + "</li>"
   }
}
