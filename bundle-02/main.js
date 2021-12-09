/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 17;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    console.log(myAge, message);
}
checkAge();

/*******************************************************************************
​
    1- Che cosa fa questo codice?
    è una funzione che Inserendo l'età, ti dice se hai più o meno di 18 anni

    2- Sono presenti errori di sintassi?
    No

    3- Sono presenti errori logici?
    Si
​
​
*******************************************************************************/


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

/*******************************************************************************
​
    1- Che cosa fa questo codice?
    Conta i numeri di colori all'interno dell'array

    2- Sono presenti errori di sintassi?
    Si

    3- Sono presenti errori logici?
    No
​
​
*******************************************************************************/



// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

/*******************************************************************************
​
    1- Che cosa fa questo codice?
    è una funzione che dato un numero gli somma 12

    2- Sono presenti errori di sintassi?
    no

    3- Sono presenti errori logici?
    si
​
​
*******************************************************************************/


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');
    console.log(userEmail);

    let grantAccess = 'false';
    console.log(grantAccess);

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
        console.log(grantAccess);
    }

    if (grantAccess === 'true' ) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/*******************************************************************************
​
    1- Che cosa fa questo codice?
    è una funzione che controlla se l'email inserita è allinterno dell'array

    2- Sono presenti errori di sintassi?
    no

    3- Sono presenti errori logici?
    si
​
​
*******************************************************************************/


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = 'true';            
            
      }
        
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
}
checkAccessImproved();

/*******************************************************************************
​
    1- Che cosa fa questo codice?
    è una funzione che controlla se l'email inserita è all'interno dell'array e controlla anche la lunghezza

    2- Sono presenti errori di sintassi?
    si

    3- Sono presenti errori logici?
    no
​
​
*******************************************************************************/





























