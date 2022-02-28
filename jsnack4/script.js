/**
 *
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */

const guest = ["giovanni", "giuseppe", "francesco", "carolina", "ilaria", "francesca"];

const partecipant = prompt("dimmi il nome dei partecipanti").toLowerCase().trim();

let isRegister = false;

for (let i = 0; i < guest.lenght; i++) {
    if (partecipant == guest[i]) {
        isRegister = true;
    }
}

if (isRegister) {
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