document.addEventListener("DOMContentLoaded",  function() {
    let divs = document.getElementById('miDiv');
    console.log(divs);
    
    divs.addEventListener("click", () => {
        alert('Hola! Soy el div');
    });

})