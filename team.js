let team_3 = [
	{
	    name: "Giacomo", 
	    surname: "Tremulo", 
	    age: 30, 
	    city: "Sinnai", 
	    hobby: "referee", 
	    favoriteFood: "sushi", 
	    favoriteVideoGame: "HoI4", 
	    favoriteFilm: "limitless", 
	    favoriteBook: "Il giocatore", 
	    petName: ""
	},
  
	{
		name: "Roberto",
		surname: "Chiriac",
		age: 20,
		city: "Padova",
		hobby: "Football Referee",
		favoriteFood: "pizza",
		favoriteVideoGame: "The Witcher",
		favoriteFilm: "Interstellar",
		favoriteBook: "After",
		petName: "Puff"
	},
	{
		name: "Verdiana", 
		surname: "Simonetti", 
		age: 29, 
		city: "Chiusdino", 
		hobby: "leggere", 
		favoriteFood: "lasagna", 
		favoriteVideoGame: "AoM", 
		favoriteFilm: "guardiani della galassia", 
		favoriteBook: "honzuki", 
		petName: "kyuubu"
	  },
  
	  {
		name:"Marco", 
	    	surname:"Fonti", 
	    	age: 24, 
	    	city: "Bologna", 
	    	hobby: "Calcio", 
	    	favoriteFood: "Pizza", 
	    	favoriteVideoGame:"Fifa24", 
	    	favoriteFilm: "Troy", 
	    	favoriteBook: "Sherlock Holmes", 
	    	petName: "Zoe"
	  },
	{
		name: "Luca",
		surname: "Piantadosi",
		age: 27,
		city: "Napoli",
		hobby: "Calcio a 5",
		favoriteFood: "parmigiana di melanzane",
		favoriteVideoGame: "Valorant",
		favoriteFilm: "Pulp Fiction",
		favoriteBook: "L'incubo di Hill House",
		petName: "nn",
	}  
];


/* funzioni della tasck */

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

function fromYtoO(array) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 1; j < array.length; j++) {
			if (array[i].age > array[j].age) {
				let tmp = array[j];
				array[j] = array[i];
				array[i] = tmp;
			}
		}
	}
	for (let i = 0; i < array.length; i++) {
		console.log(array[i].surname + " " + array[i].age);
	}
}

function middleAge(array) 
{
    let sum = 0;     
    for (let i = 0; i < array.length; i++) 
    {
        sum += array[i].age;     
    }    
    console.log(sum / array.length); 
}

function pet(array){
    for(let i=0; i< Array.length;i++){
        if(array[i].petName == "")
        console.log(array[i].name + "");
    }
}

function lol(array) {
    for(let i=0; i < Array.length;i++){
        if (array[i].favoriteVideoGame == "LOL")
        console.log(array[i].name + "'s favorite game is LOL" );
    }
}