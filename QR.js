let input=document.querySelector(".input");
let imgBox=document.querySelector(".imgBox");
let imgTxt=document.querySelector("#imgTxt");
let btn=document.querySelector(".btn");


function generateQR(){
    if (input.value.length>0){
        imgTxt.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
        imgBox.classList.add("showQR");
    }
    else{
        input.classList.add("error");
        setTimeout(()=>{
            input.classList.remove("error");
        },1000);
    }
}

btn.addEventListener("click",()=>{
    generateQR();
    // imgBox.classList.add("showQR");
}); 