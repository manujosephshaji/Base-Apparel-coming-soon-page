var email_validation = document.querySelector(".email-btn")
var button_click = document.querySelector(".btn")
var error_msg = document.getElementById("error-msg");
var icon_error= document.getElementById("error-icon")


button_click.addEventListener("click",()=>{

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email_validation.value.match(pattern)){
        error_msg.style.display = "none";
          icon_error.style.display = "none";
    }else{
          error_msg.style.display = "block";
          icon_error.style.display = "block";
    }
})
