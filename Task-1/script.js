let string = " ";
let a = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
   button.addEventListener('click', (e) => {

      if (e.target.innerHTML == '=') {
         if (a == 0) {
            string = eval(string);
            document.querySelector('input').value = string;
         }
         else {
            string = Math.sqrt(string.substring(2, string.length));
            document.querySelector('input').value = string;
            a=0;

         }
      }

      else if (e.target.innerHTML == 'Clear') {
         string = " ";
         document.querySelector('input').value = string;
         
      }
      else if (e.target.innerHTML == '√') {
         string = string + e.target.innerHTML;
         document.querySelector('input').value = string;
         a = 1;
         
      }
      else if (e.target.innerHTML == 'π') {
         string = string + 3.14;
         document.querySelector('input').value = string;
      }
      
      
      else if (e.target.innerHTML == 'del') {
         string = string.substring(0, string.length - 1);
         document.querySelector('input').value = string;

      }
      

      
      else {
         string = string + e.target.innerHTML;
         document.querySelector('input').value = string;
      }


   })
})