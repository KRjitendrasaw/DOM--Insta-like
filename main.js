var cont = document.querySelector("#container");
var love = document.querySelector('i');

cont.addEventListener("dblclick", function(){
    love.style.transform = 'translate(-50%, -50%) scale(0.7)';
    love.style.opacity = 0.7;

    setTimeout(() => {
        love.style.opacity = 0; 
    }, 1000);

    setTimeout(() => {
        love.style.transform = "translate(-50%, -50%) scale(0)"
    }, 2000);
})