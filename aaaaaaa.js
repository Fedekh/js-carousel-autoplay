let autoPlay = 0;
let reverseAutoPlay = 0;
let sensoMarciaAvanti = true;
let contatore = 0;

document.querySelector(".actual-image").addEventListener("mouseover", () => {
    clearInterval(reverseAutoPlay);
    clearInterval(autoPlay);
});


document.querySelector(".actual-image").addEventListener("mouseout", () => {

    if (sensoMarciaAvanti === true) {
        contatore = 0;
        clearInterval(reverseAutoPlay);
        clearInterval(autoPlay);
        autoPlay = setInterval(() => {                                       
            rowItem[index].classList.remove("active");
            index++;
            if (index === arrayItems.length) {
                index = 0;
            }
            actualImage.innerHTML = rowItem[index].innerHTML;
            rowItem[index].classList.add("active");
            contatore++;
            console.log(contatore, "lo slider continua a girare in avanti dato che la variabile sensoDiMarcia inizialmente impostato era : ", sensoMarciaAvanti);
        }, 3000);
    } else {
        contatore = 0;
        clearInterval(autoPlay);
        clearInterval(reverseAutoPlay);
        reverseAutoPlay = setInterval(() => {
            // tolgo lo stato di non opacità all'img attuale
            rowItem[index].classList.remove("active");
            index--;
            if (index < 0) {
                index = arrayItems.length - 1;
            }
            rowItem[index].classList.add("active");
            actualImage.innerHTML = rowItem[index].innerHTML;
            contatore++;
            console.log(contatore, "lo slider continua a girare all'indietro dato che la variabile sensoDiMarcia era impostato inizialmente in : ", sensoMarciaAvanti);
        }, 3000);
    }

});
let firstAutoPlay = setInterval(() => {         
                                                  
    rowItem[index].classList.remove("active");
    // incremento l'indice
    index++;
    // Controllo per cominciare da capo
    if (index === arrayItems.length) {
        index = 0;
    }
    actualImage.innerHTML = rowItem[index].innerHTML;
    rowItem[index].classList.add("active");
    contatore++;
    console.log(contatore, "lo slider gira in avanti dato che la variabile senso di marcia è: ", sensoMarciaAvanti);

}, 3000); 
next.addEventListener("click", function () {
    clearInterval(firstAutoPlay);
    contatore = 0;
    sensoMarciaAvanti = true;
    clearInterval(reverseAutoPlay);
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {                                             
        rowItem[index].classList.remove("active");
        index++;
        if (index === arrayItems.length) {
            index = 0;
        }
        actualImage.innerHTML = rowItem[index].innerHTML;
        rowItem[index].classList.add("active");
        contatore++;
        console.log(contatore, "lo slider gira in avanti dato che la variabile senso di marcia è: ", sensoMarciaAvanti);

    }, 3000);
})

prev.addEventListener("click", function () {
    clearInterval(firstAutoPlay);
    contatore = 0;
    sensoMarciaAvanti = false;
    clearInterval(autoPlay);
    clearInterval(reverseAutoPlay);
    reverseAutoPlay = setInterval(() => {
        rowItem[index].classList.remove("active");
        // decremento l'indice
        index--;
        if (index < 0) {
            index = arrayItems.length - 1;
        }
        rowItem[index].classList.add("active");
        actualImage.innerHTML = rowItem[index].innerHTML;
        contatore++;
        console.log(contatore, "lo slider gira all'indietro dato che la variabile senso di marcia è: ", sensoMarciaAvanti);

    }, 3000);
})