

function Calculate(oper){

  
    let num0 = Number(document.calcSimple.num0.value);
    let num00 = Number(document.calcSimple.num00.value);
    
   if (oper == "addition") {
         let res = parseInt(num0) + parseInt(num00);
      
   document.getElementById('res').innerHTML = res.toFixed([]).replace(".",",");
    
   } else if(oper == "subtration") {
         let res = num0 - num00;
   
   document.getElementById('res').innerHTML = res.toFixed([]).replace(".",",");
  
   } else if (oper == "multiplication") {
         let res = num0 * num00;
         
   document.getElementById('res').innerHTML = res.toFixed([]).replace(".",",");
      
   } else { (oper == "division") 
         let res = num0 / num00;

   document.getElementById('res').innerHTML = res.toFixed([2]).replace(".",",");
     
   }
   }   


    function Clean(){

        let num0 = document.calcSimple.num0.value = " "
        let num00 = document.calcSimple.num00.value = " "
    
    
        if (oper == "addition") {
            let res = parseInt(num0) + parseInt(num00);
         } else {
            if (oper == "subtration") {
               let res = num0 - num00;
            } else {
               if (oper == "multiplication") {
                  let res = num0 * num00;
               } else {
                  let res = num0 / num00;
               }
            }
         }
          
        
       let res = (num0) - (num00)

       
       document.getElementById('res').innerHTML = " ";

     }
   
