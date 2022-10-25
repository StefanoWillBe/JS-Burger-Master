// devo calcolare il prezzo complessivo del burger tenendo conto dei ceckbox selezionabili

// // creo la variabile per il tasto calculate
var calculateBotton = document.getElementById("calculate");

// metto in ascolto il button calculate
calculateBotton.addEventListener("click" ,
    function (){

        // assegno con una variabile il prezzo base dell burger
        var prezzoBurger = 50;

// devo capire quali chekbox sono selezionate e le raggruppo per class
        var ingredientsCheck = document.getElementsByClassName("ingredients");

        for( var i = 0; i < ingredientsCheck.length; i++){
            var addonCheked = ingredientsCheck[i];

            if (addonCheked.checked){
                prezzoBurger += parseInt(addonCheked.value);
            }
        }
// creo un array con i codici sconto

        var codiciSconto = ["123" , "325", "658"];
        var valueCoupon = document.getElementById("code-offer").value;

        // for( var j = 0; j < codiciSconto.length; j++) {
        //   var coupon = codiciSconto[j];
        //
        //     if(coupon == valueCoupon) {
        //         prezzoBurger = prezzoBurger - (prezzoBurger /100 *20);
        //     }
        // }

        // // alternativa al ciclo for
        if (codiciSconto.includes(valueCoupon)){
            prezzoBurger = prezzoBurger - (prezzoBurger / 100 * 20);
        }

        // devo stampare il prezzo totale del burger
        document.getElementById("name-of-burger").innerHTML = prezzoBurger.toFixed(2);
})

// var singleAddonNumber = parseInt(singleAddon);
