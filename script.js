let str = " ";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
   button.addEventListener('click', (e) => {
      try {

         if (e.target.innerHTML == '=') {

            str = eval(str)
            document.querySelector('.display').value = str;
         }

         else if (e.target.innerHTML == "AC") {
            str = " ";
            document.querySelector('.display').value = str;
         }

         else {
            str = str + e.target.innerHTML;
            document.querySelector('.display').value = str;
         }
      }

      catch (err) {
         str = " ";
         document.querySelector('.display').value = str;
      }
   })
})




