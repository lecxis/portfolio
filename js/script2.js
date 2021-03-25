console.log("hello world");
(function(){
    console.log("We are ready");   
    window.onscroll=function(){
        
        if(document.body.scrollTop || document.documentElement.scrollTop > 20){
            console.log("scrolling above 20");
            document.querySelector('header').classList.add("sticky");
            
        }
        else {
            document.querySelector('header').classList.remove("sticky");
        }
    }
    //togole menu/navigator 
    document.querySelector('.menu-btn').addEventListener("click",
    function(){
        console.log("button active");
        document.querySelector('header .menu').classList.toggle("active");
        document.querySelector('.bars').classList.toggle("show");
        document.querySelector('.bar-close').classList.toggle("show");
    });

    document.querySelector('.nav-menu .menu').addEventListener("click",
    function(){
        document.querySelector('header .menu').classList.toggle("active");
        document.querySelector('.bars').classList.toggle("show");
        document.querySelector('.bar-close').classList.toggle("show");
        
    });
}

)();