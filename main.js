let inputWallet = document.getElementById("input-wallet"); //get the @input wallet address
let charsCount = document.getElementById("chars-count"); // get 0 of @characters
let uppcaseCount = document.getElementById("uppercase-count"); // get number of @uppercase
let inputWallet2 = document.getElementById("input-wallet-2");
let charsCount2 = document.getElementById("chars-count-2"); 
let uppcaseCount2 = document.getElementById("uppercase-count-2");

let newDiv = document.getElementById("new-div");

let buttonCompare = document.getElementById("button-compare");

buttonCompare.addEventListener('click',() => {

    ButtonCompare(uppercaseCount(inputWallet.value),uppercaseCount(inputWallet2.value))

    function ButtonCompare(inputVal,inputVal2){

    
      inputVal = inputWallet.value;
      inputVal2 = inputWallet2.value
  
      if(inputVal === inputVal2){
        newDiv.innerHTML+=`
        <div class="new-div">
        <h3>Iguais</h3>
        </div>
        `;
      }
  
      else{
        newDiv.innerHTML+=`
        <div class="new-div">
        <h3>Diferentes</h3>
        </div>
        `;
      }
  }


  function uppercaseCount(str){
    let count = 0;
    let uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    
    for (let i = 0; i < str.length; i++){

        if (uppercaseAlphabet.indexOf(str[i]) > -1 ){ //filter lowercase alphabet
            count++;
        }
    }
    
        uppcaseCount.innerHTML = `${count}`; // write the number of uppercase

    }



})


inputWallet.addEventListener("input", () => { //add event write on input
  charsCount.textContent = inputWallet.value.length; // get the length of input text

  function uppercaseCount(str){
    let count = 0;
    let uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (let i = 0; i < str.length; i++){

        if (uppercaseAlphabet.indexOf(str[i]) > -1 ){ //filter lowercase alphabet
            count++;
        }
    }
    
        uppcaseCount.innerHTML = `${count}`; // write the number of uppercase

    }

});


inputWallet2.addEventListener("input", () => {
    charsCount2.textContent = inputWallet2.value.length; // get the length of input text



    function uppercaseCount(str){
      let count = 0;
      let uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      for (let i = 0; i < str.length; i++){
  
          if (uppercaseAlphabet.indexOf(str[i]) > -1 ){ //filter lowercase alphabet
              count++;
          }
      }
      
          uppcaseCount2.innerHTML = `${count}`; // write the number of uppercase
  
      }


});


