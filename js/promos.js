var data = [
    {
        lugar:"San Luis",
     estadia:"4 Noches", 
     traslado:"Aereo",
     pension:"Media pensión",
     precio:59988
    },
    {
        lugar:"Bariloche",
     estadia:"5 Noches", 
     traslado: "Aereo",
     pension: "Pensión completa",
     precio:99988
    },
    {
        lugar:"Chilecito",
     estadia:"3 Noches", 
     traslado:"Aereo",
     pension:"Pensión completa",
     precio:75999
    },
    {
        lugar:"Cataratas",
     estadia:"3 Noches", 
     traslado:"Aereo",
     pension:"Media pensión",
     precio:65988
    },
    {
        lugar:"Mendoza",
     estadia:"4 Noches", 
     traslado:"Aereo",
     pension:"Media pensión",
     precio:89999
    }, 
    {
        lugar:"Jujuy",
     estadia:"6 Noches", 
     traslado:"Aereo",
     pension:"Pension completa",
     precio:159788
    },
   ]
   

var promo=[];
if (document.getElementById("container_promos")) {
    for (let i = 0; i < data.length; i++) {
     promo += `<div>
        <p class="lugar">${data[i].lugar}</p> 
        <p class="estadia">${data[i].estadia}</p> 
        <p class="traslado">${data[i].traslado}</p> 
        <p class="pension">${data[i].pension}</p> 
        <p class="precio">$ ${data[i].precio}</p>
         </div>`;
    }
    document.getElementById("container_promos").innerHTML=promo;
    
}
