// Chiedi all'utente il suo nome
const userName= prompt('inserisci il tuo nome');
// console.log('nome: ', userName );
// chiedi il suo cognome
const userSurname= prompt('inserisci il tuo cognome');
// console.log('cognome: ', userSurname );
// poi chiedi il suo colore preferito
const userColor= prompt('inserisci il tuo colore');
// console.log('colore: ', userColor );
// genera la password con tutti i dati di priama con "21" finale
const generetedPassword= userName+userSurname+userColor+"21";
// console.log('Password: ', generetedPassword );
// stampa la variabile a schermo
document.getElementById('Password').innerHTML= generetedPassword;