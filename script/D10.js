/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

console.log("Il risultato della somma è: " + sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);

console.log("Il numero casuale generato è: " + random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Valerio",
  surname: "Di Felice",
  age: 25,
};

console.log("Dettagli dell'oggetto 'me':", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log("Oggetto 'me' DOPO la rimozione di 'age':", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["HTML", "CSS", "JavaScript"];

console.log("Oggetto 'me' con l'array 'skills':", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Game Design");

console.log("Array 'skills' DOPO l'aggiunta:", me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log(
  "Array 'skills' DOPO la rimozione dell'ultimo elemento:",
  me.skills
);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log("Il tuo lancio di dado è:", randomNumber);
  return randomNumber;
}

dice();

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log("Il numero maggiore tra 5 e 10 è:", whoIsBigger(5, 10));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str) {
  return str.split(" ");
}

console.log("L'array delle parole è:", splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, removeFirst) {
  if (removeFirst) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}

console.log("Stringa senza il primo carattere:", deleteOne("Hello", true));
console.log("Stringa senza l'ultimo carattere:", deleteOne("Hello", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(str) {
  return str.replace(/[0-9]/g, "");
}

console.log("Stringa senza numeri:", onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

console.log("È un indirizzo email valido?", isThisAnEmail("email@email.it"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const daysOfWeek = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const today = new Date();
  return daysOfWeek[today.getDay()];
}

console.log("Oggi è:", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numRolls) {
  let sum = 0;
  const values = [];
  for (let i = 0; i < numRolls; i++) {
    const roll = dice();
    sum += roll;
    values.push(roll);
  }
  return {
    sum: sum,
    values: values,
  };
}

console.log("Risultato del lancio dei dadi:", rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(date) {
  const today = new Date();
  const pastDate = new Date(date);
  const timeDifference = today - pastDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

console.log(
  "Giorni trascorsi dalla data 2020-01-01:",
  howManyDays("2020-01-01")
);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const birthdayMonth = 6;
  const birthdayDay = 15;
  if (currentMonth === birthdayMonth && currentDay === birthdayDay) {
    return true; // È il tuo compleanno!
  } else {
    return false; // Non è il tuo compleanno
  }
}

if (isTodayMyBirthday()) {
  console.log("Auguri di buon compleanno!");
} else {
  console.log("Oggi non è il tuo compleanno. Manca poco!");
}

// Arrays & Oggetti

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(obj, propToDelete) {
  if (obj && obj.hasOwnProperty(propToDelete)) {
    delete obj[propToDelete];
  }
  return obj;
}

console.log(" Esempio con un elemento dell'array 'movies' ");
let firstMovie = movies[0];
console.log("Primo film originale:", firstMovie);
let movieWithoutPoster = deleteProp(firstMovie, "Poster");
console.log("Primo film senza 'Poster':", movieWithoutPoster);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(moviesArray) {
  if (!Array.isArray(moviesArray) || moviesArray.length === 0) {
    return null;
  }
  let newest = moviesArray[0];
  for (let i = 1; i < moviesArray.length; i++) {
    const currentMovie = moviesArray[i];
    const currentYear = parseInt(currentMovie.Year);
    const newestYear = parseInt(newest.Year);
    if (currentYear > newestYear) {
      newest = currentMovie;
    }
  }
  return newest;
}

const moviePiuRecente = newestMovie(movies);
console.log("Il film più recente è:", moviePiuRecente);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(moviesArray) {
  if (!Array.isArray(moviesArray)) {
    console.error("Errore: Il parametro fornito non è un array.");
    return 0;
  }
  return moviesArray.length;
}

const numberOfMovies = countMovies(movies);
console.log("Numero totale di film nell'array:", numberOfMovies);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(moviesArray) {
  if (!Array.isArray(moviesArray)) {
    console.error("Errore: Il parametro fornito non è un array.");
    return [];
  }
  const years = moviesArray.map((movie) => parseInt(movie.Year));
  return years;
}

const yearsArray = onlyTheYears(movies);
console.log("Array con solamente gli anni di uscita dei film:", yearsArray);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(moviesArray) {
  if (!Array.isArray(moviesArray)) {
    console.error("Errore: Il parametro fornito non è un array.");
    return [];
  }
  const lastMillenniumMovies = moviesArray.filter((movie) => {
    const movieYear = parseInt(movie.Year);
    return movieYear < 2000;
  });
  return lastMillenniumMovies;
}

const oldMovies = onlyInLastMillennium(movies);
console.log("Film prodotti nel millennio scorso:", oldMovies);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(moviesArray) {
  if (!Array.isArray(moviesArray)) {
    console.error("Errore: Il parametro fornito non è un array.");
    return 0;
  }
  const totalYears = moviesArray.reduce((accumulator, movie) => {
    const movieYear = parseInt(movie.Year);
    return accumulator + movieYear;
  }, 0);
  return totalYears;
}

const yearsSum = sumAllTheYears(movies);
console.log("La somma di tutti gli anni di produzione dei film è:", yearsSum);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(searchString) {
  if (typeof searchString !== "string" || searchString.trim() === "") {
    console.warn("Avviso: La stringa di ricerca non è valida o è vuota.");
    return [];
  }
  const lowerCaseSearchString = searchString.toLowerCase();
  const foundMovies = movies.filter((movie) => {
    const lowerCaseTitle = movie.Title.toLowerCase();
    return lowerCaseTitle.includes(lowerCaseSearchString);
  });
  return foundMovies;
}

// Esempi di utilizzo

console.log("--- Ricerca per 'Lord' ---");
const lordMovies = searchByTitle("Lord");
console.log("Film che contengono 'Lord':", lordMovies);

console.log("\n--- Ricerca per 'Avengers' (case-insensitive) ---");
const avengersMovies = searchByTitle("avengers");
console.log("Film che contengono 'avengers':", avengersMovies);

console.log("\n--- Ricerca per 'xyz' (nessun risultato) ---");
const noMatchMovies = searchByTitle("xyz");
console.log("Film che contengono 'xyz':", noMatchMovies);

console.log("\n--- Ricerca con stringa vuota ---");
const emptySearch = searchByTitle("");
console.log("Risultato ricerca con stringa vuota:", emptySearch); // Dovrebbe stampare [] e un avviso

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(searchString) {
  if (typeof searchString !== "string" || searchString.trim() === "") {
    console.warn("Avviso: La stringa di ricerca non è valida o è vuota.");
    return { match: [], unmatch: movies };
  }
  const lowerCaseSearchString = searchString.toLowerCase();
  const match = [];
  const unmatch = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const lowerCaseTitle = movie.Title.toLowerCase();
    if (lowerCaseTitle.includes(lowerCaseSearchString)) {
      match.push(movie);
    } else {
      unmatch.push(movie);
    }
  }
  return { match, unmatch };
}

// Esempi di utilizzo

console.log("--- Ricerca per 'Lord' ---");
const resultLord = searchAndDivide("Lord");
console.log("Match per 'Lord':", resultLord.match);
console.log("Unmatch per 'Lord':", resultLord.unmatch);

console.log("\n--- Ricerca per 'Avengers' ---");
const resultAvengers = searchAndDivide("Avengers");
console.log("Match per 'Avengers':", resultAvengers.match);
console.log("Unmatch per 'Avengers':", resultAvengers.unmatch);

console.log("\n--- Ricerca per 'FilmInesistente' ---");
const resultNoMatch = searchAndDivide("FilmInesistente");
console.log("Match per 'FilmInesistente':", resultNoMatch.match);
console.log("Unmatch per 'FilmInesistente':", resultNoMatch.unmatch);

console.log("\n--- Ricerca con stringa vuota ---");
const resultEmptySearch = searchAndDivide("");
console.log("Match per stringa vuota:", resultEmptySearch.match);
console.log("Unmatch per stringa vuota:", resultEmptySearch.unmatch);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(indexToRemove) {
  if (
    typeof indexToRemove !== "number" ||
    indexToRemove < 0 ||
    indexToRemove >= movies.length
  ) {
    console.warn(
      `Avviso: Indice non valido (${indexToRemove}). Non è stato rimosso alcun elemento.`
    );
    return [...movies]; // Ritorna una copia dell'array originale senza modifiche
  }
  const newMoviesArray = [...movies];
  newMoviesArray.splice(indexToRemove, 1);
  return newMoviesArray;
}

console.log(
  "\n--- Rimuovi l'elemento all'indice 0 (The Lord of the Rings: The Fellowship of the Ring) ---"
);
const moviesWithoutFirst = removeIndex(0);
console.log(
  "Array dopo rimozione indice 0:",
  moviesWithoutFirst.length,
  "elementi"
);
console.log(moviesWithoutFirst.map((movie) => movie.Title));

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selectContainer() {
  const containerElement = document.getElementById("container");
  return containerElement;
}

console.log("Elemento con id 'container':", selectContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectAllTd() {
  const tdElements = document.querySelectorAll("td");
  return tdElements;
}

console.log("Tutti i tag <td> nella pagina:", selectAllTd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printTdText() {
  const tdElements = selectAllTd();
  tdElements.forEach((td) => {
    console.log("Testo del tag <td>:", td.textContent);
  });
}

printTdText();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function addRedBackgroundToLinks() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.backgroundColor = "red";
  });
}

addRedBackgroundToLinks();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addItemToMyList(itemText) {
  const myList = document.getElementById("myList");
  if (myList) {
    const newItem = document.createElement("li");
    newItem.textContent = itemText;
    myList.appendChild(newItem);
  } else {
    console.warn("La lista con id 'myList' non esiste.");
  }
}

addItemToMyList("Nuovo elemento aggiunto alla lista");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function clearMyList() {
  const myList = document.getElementById("myList");
  if (myList) {
    myList.innerHTML = "";
  } else {
    console.warn("La lista con id 'myList' non esiste.");
  }
}

clearMyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClassToTrs(className) {
  const trElements = document.querySelectorAll("tr");
  trElements.forEach((tr) => {
    tr.classList.add(className);
  });
}

addClassToTrs("test");

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(height) {
  for (let i = 1; i <= height; i++) {
    console.log("*".repeat(i));
  }
}

console.log("Esempio di mezzo albero di asterischi:");

halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree(height) {
  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat(height - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

console.log("Esempio di albero di asterischi:");

tree(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log("Il numero 7 è primo?", isItPrime(7));
console.log("Il numero 10 è primo?", isItPrime(10));
