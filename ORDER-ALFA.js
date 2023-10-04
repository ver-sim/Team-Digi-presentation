team_3.sort(function(a, b) {
    let cognomeA = a.surname.toLowerCase(); // Cognome del primo elemento
    let cognomeB = b.surname.toLowerCase(); // Cognome del secondo elemento

    let result = cognomeA.localeCompare(cognomeB); // Confronto tra cognomi

    if (result === 0) {
        // Se i cognomi sono uguali, ordina per nome
        let nomeA = a.name.toLowerCase(); // Nome del primo elemento
        let nomeB = b.name.toLowerCase(); // Nome del secondo elemento
        result = nomeA.localeCompare(nomeB); // Confronto tra nomi
    }

    return result;
});

// Stampa l'array ordinato
team_3.forEach(function(team_3) {
    console.log(team_3.surname + " " + team_3.name);
});



