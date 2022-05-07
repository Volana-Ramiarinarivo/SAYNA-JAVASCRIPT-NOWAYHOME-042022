var datefin = new Date("05/04/2022 20:00:00"). getTime();

function comptarebours(){
    let maintenant = new Date().getTime();
    let difftempsrestant = dateFin - maintenant;

    let jours = Math.floor(difftempsrestant/(1000*60*60*24));
    let heures = Math.floor((difftempsrestant % (1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((difftempsrestant % (1000*60*60*24))/(1000*60));
    let secondes = Math.floor((difftempsrestant % (1000*60*60*24))/(1000));
}

let minuteur = document.getElementById('miniteur');
minuteur.innerHTML = '$(jours)j -$(heures)h -$(minutes)mn - $(secondes)s';