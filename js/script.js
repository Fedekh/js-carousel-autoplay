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

const itemCont = document.querySelector (".slider-items");
// console.log(itemCont);

// tramite ciclo for, stampero in console log tutti questi elementi, che scorrerà ogni l'etichetta di arrayItems e da 0 a 4, cosi da creare image
// formato dai 5 elementi (da 0 a 4) dell'array di partenza arrayItems

for (let i = 0; i < arrayItems.length ; i++) {
    // creo una variabile d'appoggio "items"
    const image = arrayItems[i];
    // creo quindi ogni singolo elemento [] che comporrà l'array sfruttando un contatore
    const sliderItem = `<div class="item"><img src="${image}" alt=""></div>`;
    // console.log(sliderItem); 

    // ora aggiungo in maniera dinamica all'interno di questa variabile contenitore precedenemnte dichiarata come aggancio a un elemento html, ogni
    // elemento array
    itemCont.innerHTML += sliderItem; 
    console.log (itemCont)    
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

// di default il tasto prev deve essere nascosto, ORA NEL BONUS 1 NO NON DEVE ESSERE NASCOSTO DI DEFAULT ALLA PRIMA IMG
// prev.classList.add("hidden");



// creo 2 variabili essenziali, a cui successivamente inseriro il valore delle funzioni setInterval
let autoPlay = 0;
let reverseAutoPlay = 0;


// Alla pressione del tasto next........

next.addEventListener ("click", function(){     
    // resetto l'eventuale presenza del reverse autoplay    
    clearInterval(reverseAutoPlay);
    

    // setto l'autoplay
    autoPlay = setInterval(() => {        
        // tolgo lo stato di opacita 1 all'img attuale sulla dx
        rowItem[index].classList.remove("active");    
        // incremento l'indice
        index++;    
        // Controllo per cominciare da capo
        if (index === arrayItems.length){
            // rowItem[index].classList.remove("active");
            index = 0;
            // rowItem[index].classList.add("active");        
        }    
        // ingrandisco a sx l'immagine selezionata
        actualImage.innerHTML = rowItem[index].innerHTML;
        // aggiungo lo stato di opacità 1 all img successiva sulla dx
        rowItem[index].classList.add("active");    
    }, 3000);
})


// Alla pressione del tasto prev........
prev.addEventListener ("click", function(){   
    // resetto l'eventuale presenza dell autoplay    
    clearInterval(autoPlay);

    // setto il reverse autoplay
    reverseAutoPlay = setInterval(() => {               
        // tolgo lo stato di non opacità all'img attuale
        rowItem[index].classList.remove("active");        
        // decremento l'indice
        index--;        
        // eseguo un HTMLFormControlsCollection, se l'indice diventa negativo, lo resetto alla max lunghezza
        if (index < 0){
            index = arrayItems.length-1;       
        }        
        // aggiungo lo stato di opacità all img successiva, o quella retro per meglio dire
        rowItem[index].classList.add("active");        
        actualImage.innerHTML = rowItem[index].innerHTML;        
    }, 3000); 
})





