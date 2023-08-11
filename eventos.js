document.addEventListener("DOMContentLoaded",  function() {
    let divs = document.getElementById('miDiv');
    let btn = document.getElementById('btn');
    console.log(divs);
    console.log(btn);
    btn.addEventListener('click', (event)=>{
        event.stopPropagation();
        alert('Hola! Soy el btn')
    })
    
    divs.addEventListener("click", () => {
        alert('Hola! Soy el div');
    });

})