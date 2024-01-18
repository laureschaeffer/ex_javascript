carres = document.querySelectorAll('.square');
var clickCounter=0;

carres.forEach(item => {
    item.addEventListener('click', function(){
        changeSize(item);
})})


function changeSize(square) {
    clickCounter++;
    if (clickCounter %2==1){
        square.style.height = "180px";
        square.style.width = "180px";
        square.style.backgroundColor="#aa716c";

        //rotation
    }
    else if (clickCounter % 2==0){
        square.style.height = "200px";
        square.style.width = "200px";
        square.style.backgroundColor="#8dae87";

        //rotation
    }

 }

