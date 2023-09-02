
 let result1 = document.getElementById("result");
 let lastOp = document.getElementById("lastOperation");
 let equalButton = document.getElementById("equal"); 
 let clearButton = document.getElementById("clear"); 
 let eror1 
 
function evaltions(){

   eror1= false; 
   if (result1.innerHTML === ""){
      eror1 =true; 
      
   }else{
       
      try {
      
 
         let resutl2 =  eval(result1.innerHTML)
         lastOp.innerHTML =  result1.innerHTML
         result1.innerHTML = resutl2; 
      } catch (error) {
         eror1 =true; 
         result1.innerText =  "syntax error"; 
         // result1.innerHTML += "";  
      }
      
   }

    
    console.log(eror1)
}
function clear(){
   lastOp.innerHTML =  "last operation";
   result1.innerHTML = "";  
}


 for(let i = 0 ; i< 15 ; i++){
         
         document.querySelectorAll("button")[i].addEventListener("click" , function(){
             if(eror1){
               result1.innerHTML = "";
               eror1 =false;  
               result1.innerHTML += this.innerHTML; 
             

             }else{
              
               result1.innerHTML += this.innerHTML; 
                

             }
             
         })
 }

 equalButton.addEventListener("click" ,evaltions )
 clearButton.addEventListener("click" ,clear )
