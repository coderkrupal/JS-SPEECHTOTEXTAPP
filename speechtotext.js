const  startBtn = document.querySelector('#start_record');
const stopBtn =  document.querySelector('#stop');
const result_box = document.querySelector('.text_box')

startBtn.addEventListener('click',startreconding);    
stopBtn.addEventListener('click',stoprecording);


  let recon = window.SpeechRecognition || window.webkitSpeechRecognition
  console.log(recon)

   if(recon){
   recon = new recon();
   recon.continuous  = true;
   recon.interimresult  = true;
   recon.lang = "en-US"
   console.log(recon)

     recon.onstart = function(){
       startBtn.disabled = true;
       stopBtn.disabled = false;
       console.log("start recording")
     } 



     let fullText = "";

    
     recon.onresult = (event) => {
       const newText = event.results[event.results.length - 1][0].transcript;
       
      
       fullText += newText + " ";
       
      
       result_box.textContent = fullText.trim();
     };
   


     recon.error = function(){
        startBtn.disabled = false;
        stopBtn.disabled = true;
        console.log('Speech recognition ended');
     }


    recon.onend = function(){
       startBtn.disabled = false;
       stopBtn.disabled = true;
       console.log("stop the recoding")
    }

}

else{
   console.log("recordign is nor support in your system")
}

 function startreconding() {
    recon.start();
} 

function stoprecording(){
   if (recon) {
       recon.stop();
     }
}