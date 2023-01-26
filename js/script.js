// devo calcolare il prezzo complessivo del burger tenendo conto dei ceckbox selezionabili

// // creo la variabile per il tasto calculate
const calculateBottom = document.getElementById("calculate");

// metto in ascolto il button calculate
calculateBottom.addEventListener("click" ,function (){

    const nomeBurger = document.getElementById("burger-name").value;  

    if( nomeBurger.length == 0 ) {
        alert(" Inserisci il nome che vuoi dare al tuo Burger");
    }else {
        // assegno con una variabile il prezzo base dell burger
        let prezzoBurger = 50;

        // devo capire quali chekbox sono selezionate e le raggruppo per class
        const ingredientsCheck = document.getElementsByClassName("ingredients");

        for( var i = 0; i < ingredientsCheck.length; i++){
            let addonCheked = ingredientsCheck[i];

            if (addonCheked.checked){
                prezzoBurger += parseInt(addonCheked.value);
            }
        }
        // creo un array con i codici sconto

        const codiciSconto = ["123" , "325", "658"];
        const valueCoupon = document.getElementById("code-offer").value;


        // // alternativa al ciclo for
        if (codiciSconto.includes(valueCoupon)){
            prezzoBurger = prezzoBurger - (prezzoBurger / 100 * 20);
        }

        // devo stampare il prezzo totale del burger
        const prezzoFinale = document.getElementById("name-of-burger");
        prezzoFinale.innerHTML = "Il tuo " + nomeBurger + " costa " + prezzoBurger.toFixed(2) + " €";
    }
}); 
    
    
    


