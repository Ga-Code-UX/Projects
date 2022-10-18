// active navbar of the header
let navbar = document.querySelector(".navigation-wrap"); // navigation-wrap é uma classe
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        navbar.classList.add("scroll-on"); // scroll-on é uma classe que está no css, quando o texto rola para baix dar um efeito legal no texto
    }
    else{
        navbar.classList.remove("scroll-on");
    }
}







// counter design

document.addEventListener("DOMContentLoaded",function(){
    function counter (id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end -start,
        increment = end > start ? 1: -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(function(){
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",0,1287,3000);
    counter("count2",100,5786,2500);
    counter("count3",0,1440,3000);
    counter("count4",0,7110,3000);
})