

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
   
/* <a id="link1covid" onclick="window.open('http://ead.esp.mg.gov.br/mod/resource/view.php?id=2208', '',
'width=870,height=715,toolbar=no,location=no,menubar=no,copyhistory=no,status=no,directories=no,scrollbars=yes,resizable=yes'); return false;"
onmouseover="document.getElementById('link1covid').style='position: absolute; left: 1.75%; top: 67.05%; width: 47.75%; height: 5.58%;border-bottom: 4px solid #00CED1;'" 
onmouseout="document.getElementById('link1covid').style='position: absolute;left: 1.75%; top: 67.05%; width: 47.75%; height: 5.58%;border: none; '"
href="" style="position: absolute; left: 1.75%; top: 67.05%; width: 47.75%; height: 5.58%; border: none;"></a>
    */


 /*   

 function makeSum4(){
        let num0 = parseInt(document.getElementById("num0").value)
        let num00 = parseInt(document.getElementById("num00").value)

        let resultSum0 = (num0) - (num00);

        document.getElementById("resultSum0").innerHTML = resultSum0;
    }
    
function makeClear4(){
        let num0 = document.getElementById("num0").value = " "
        let num00 = document.getElementById("num00").value = " "
       
       let resultSum0 = (num0) - (num00)

        document.getElementById("resultSum0").innerHTML = " "
     }
    

function makeSum(){
        let num1 = parseInt(document.getElementById("num1").value)
        let num2 = parseInt(document.getElementById("num2").value)

        let resultSum = (num1) + (num2);

        document.getElementById("resultSum").innerHTML = resultSum;
        
    }
    
function makeClear(){
        let num1 = document.getElementById("num1").value = " "
        let num2 = document.getElementById("num2").value = " "
       
       let resultSum = (num1) + (num2)

        document.getElementById("resultSum").innerHTML = " "
     }
function makeSum2(){
        let num3 = parseInt(document.getElementById("num3").value)
        let num4 = parseInt(document.getElementById("num4").value)

        let resultSum2 = (num3) * (num4);

        document.getElementById("resultSum2").innerHTML = resultSum2;
    }
    
function makeClear2(){
        let num3 = document.getElementById("num3").value = " "
        let num4 = document.getElementById("num4").value = " "
       
       let resultSum2 = (num3) * (num4)

        document.getElementById("resultSum2").innerHTML = " "
     }
function makeSum3(){
        let num5 = document.getElementById("num5").value
        let num6 = document.getElementById("num6").value

        let resultSum3 = String(num5) / String(num6);
        
        document.getElementById("resultSum3").innerHTML = resultSum3.toFixed([2]).replace(".", ",")
    }
    
function makeClear3(){
        let num5 = document.getElementById("num5").value = " "
        let num6 = document.getElementById("num6").value = " "
       
       let resultSum3 = (num5) / (num6)

        document.getElementById("resultSum3").innerHTML = " "
     }
   */