//**Descrizione:**
//Al carousel fatto precedentemente aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

//Bonus 1:
//Gestire il tempo di autoplay dopo il click dell'utente, rimettendo il timer di 3 secondi dopo il click per avere autoplay sempre regolare.

//Bonus2:
//Stoppare autoplay all'hover sullo slider e farlo ripartire al togliere del hover. Qui potrebbe servire un po di ricerca per trovare l'evento giusto



// #############################################################################################################################



// MILESTONE 2

// Da consegna ho un array con all'iterno 5 elementi
const arrayItems = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const itemCont = document.querySelector(".slider-items");
// console.log(itemCont);

// tramite ciclo for, stampero in console log tutti questi elementi, che scorrerà ogni l'etichetta di arrayItems e da 0 a 4, cosi da creare image
// formato dai 5 elementi (da 0 a 4) dell'array di partenza arrayItems

for (let i = 0; i < arrayItems.length; i++) {
    // creo una variabile d'appoggio "items"
    const image = arrayItems[i];
    // creo quindi ogni singolo elemento [] che comporrà l'array sfruttando un contatore
    const sliderItem = `<div class="item"><img src="${image}" alt=""></div>`;
    // console.log(sliderItem); 

    // ora aggiungo in maniera dinamica all'interno di questa variabile contenitore precedenemnte dichiarata come aggancio a un elemento html, ogni
    // elemento array
    itemCont.innerHTML += sliderItem;
    console.log(itemCont)
}


//Creo un ulteriore variabile che lego all'elemento o elementi html, in questo caso i div che conterranno le img, specificando
// con l'etichetta 0 in questo caso, che il primo elemento, oltre la classe di defaul .item gli si debba aggiungere anche
//la classe .active che nello specifico la faccia apparire anziche restare hidden come le altre

// IMPOSTO PRIMO SLIDE OPACITA' 1

let rowItem = document.getElementsByClassName("item");
let index = 0;

rowItem[index].classList.add("active");


// MILESTONE 3

// BONUS 2 

// creazione variabili legate ai 2 button

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
console.log(prev, next);

// creo variabile in cui nell'html conterrà l'immagine attuale grande
let actualImage = document.querySelector(".actual-image");
console.log(actualImage, typeof actualImage);



// !#############################################################################


let autoPlay = 0;
let reverseAutoPlay = 0;
let sensoMarciaAvanti = true;
let contatore = 0;

// RICHIAMO IL PRIMO AUTOPLAY
generalAutoPlay();

// QUESTA E' LA FUNZIONE DI DEFAUL CHE ATTIVA L'AUTOPLAY IN AVANTI AL SEMPLICE CARICAMENTO DELLA PAGINA COMPRENDENDO ANCHE I CLICK E GLI HOVER
function generalAutoPlay() {
    firstAutoPlay = setInterval(() => {
        resetMouse();
        if (sensoMarciaAvanti === true) {
            // tolgo lo stato di opacita 1 all'img attuale sulla dx                 
            rowItem[index].classList.remove("active");
            // incremento l'indice
            index++;
            // Controllo per cominciare da capo
            if (index === arrayItems.length) {
                // rowItem[index].classList.remove("active");
                index = 0;
                // rowItem[index].classList.add("active");        
            }
            // ingrandisco a sx l'immagine selezionata
            actualImage.innerHTML = rowItem[index].innerHTML;
            // aggiungo lo stato di opacità 1 all img successiva sulla dx
            rowItem[index].classList.add("active");
            contatore++;
            console.log(contatore, "lo slider gira in avanti dato che la variabile senso di marcia è: ", sensoMarciaAvanti);
        } else {
            // tolgo lo stato di non opacità all'img attuale
            rowItem[index].classList.remove("active");
            // decremento l'indice
            index--;
            // eseguo un HTMLFormControlsCollection, se l'indice diventa negativo, lo resetto alla max lunghezza
            if (index < 0) {
                index = arrayItems.length - 1;
            }
            // aggiungo lo stato di opacità all img successiva, o quella retro per meglio dire
            rowItem[index].classList.add("active");
            actualImage.innerHTML = rowItem[index].innerHTML;

            contatore++;
            console.log(contatore, "lo slider gira all'indietro dato che la variabile senso di marcia è: ", sensoMarciaAvanti);
        }


        // Alla pressione del tasto next........
        next.addEventListener("click", nextBtn);

        // Alla pressione del tasto prev........
        prev.addEventListener("click", prevBtn);   

        // BONUS 2

        // al passaggio dell'hover....
        document.querySelector(".actual-image").addEventListener("mouseover", () => {
            clearInterval(firstAutoPlay);
            resetMouse();
        });

        //al togliere dell'hover
        document.querySelector(".actual-image").addEventListener("mouseout", () => {
            clearInterval(firstAutoPlay);
            result();

        });

    }, 3000);
}


// Function del primo autoplay

function result() {
    generalAutoPlay();
}


// Function btns
function nextBtn() {
    contatore = 0;
    sensoMarciaAvanti = true;
    // BONUS 1 , SI TIENE CONTO DEL CLICK DEL MOUSE RESETTANDO I TIMER
    // resetto l'eventuale presenza del reverse autoplay    
    // clearInterval(reverseAutoPlay);
    // e resetto anche l'intervallo dell'autoplay affinche ad ogni click dell utente non si sovrapponi o si crei intervalli paralleli che creino caos
    // clearInterval(autoPlay);
    clearInterval(firstAutoPlay);
    generalAutoPlay();
}

// Function btns
function prevBtn() {
    contatore = 0;
    sensoMarciaAvanti = false;
    // BONUS 1 , SI TIENE CONTO DEL CLICK DEL MOUSE RESETTANDO I TIMER
    // resetto l'eventuale presenza dell autoplay standard
    // clearInterval(autoPlay);
    // e resetto anche l'intervallo del reverseautoplay affinche ad ogni click dell utente non si sovrapponi o si crei intervalli paralleli che creino caos
    // clearInterval(reverseAutoPlay);
    clearInterval(firstAutoPlay);
    generalAutoPlay();
}


// RESET DEI CONTATORI DEI TIMER 
function resetMouse() {
    clearInterval(reverseAutoPlay);
    clearInterval(autoPlay);
}


