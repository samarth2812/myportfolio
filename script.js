$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
          $('.navigationbar').addClass("sticky");
        }else{
            $('.navigationbar').removeClass("sticky");
        }
    })
});

const scrollup = document.querySelector("#scrollup");

scrollup.addEventListener("click" , function () {
    window.scrollTo(0 , 0);
});