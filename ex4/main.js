const networks = document.querySelectorAll('.network');


networks.forEach(item => {
    item.addEventListener('click', function(){
        myFunction(item);
        
})})


function myFunction(network){
    console.log(network.dataset.color)
    network.classList.toggle("newNetwork");

    const wrapper= document.querySelector("#wrapper");
    const networkStyle = window.getComputedStyle(network);
    networkColor= networkStyle.getPropertyValue("background-color");


    if(network.classList.contains("newNetwork")) {
        wrapper.style.backgroundColor = network.dataset.color; //en lien avec data-color du html ; toujours avoir data-qqchose puis ici dataset.qqchose
    } else {
        wrapper.style.backgroundColor = "gray";
    }



}



