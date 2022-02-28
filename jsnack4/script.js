/**
 *
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */


//inizializzare un array
const guests = ["Giovanni", "Giuseppe", "Francesco", "Carolina", "Ilaria", "Francesca"];
//aprire un dialogo che scriviamo i nomi 
//(lowercase serve per i nomi con la maiuscola)
//(trim per eliminare lo spazio daventi e dietro la parola)
const partecipant = prompt("dimmi il nome dei partecipanti").toLowerCase().trim();

// ! verifica manuale con ciclo for
let isGuest = false;

//scorro tutta la lista degli invitati
for (let i = 0; i < guests.lenght; i++) {
    if (guests[i].toLowerCase() === partecipant) {
        isGuest = true;
    }
}

// verificare se nella lista ci sta quel nome
if (isGuest) {
    console.log("il nome inserito è tra gli invitati");
} else {
    console.log("il nome inserito non è tra gli invitati");
}

/* 
 //senza ciclo for 
if (guest.indexOf(partecipant) > -1){
    console.log("il nome inserito è tra gli invitati");
}else{
    console.log("il nome inserito non è tra gli invitati");
} */