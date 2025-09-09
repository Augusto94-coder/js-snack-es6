const squadre = [
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 }
];


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3. Con un ciclo for...in assegniamo i valori random
for (let i in squadre) {
    squadre[i].punti = randomNumber(1, 100);
    squadre[i].falliSubiti = randomNumber(1, 100);
}

const nuovoArray = [];
for (let i in squadre) {
    nuovoArray.push({
        nome: squadre[i].nome,
        falliSubiti: squadre[i].falliSubiti
    });

}

console.log("Array completo con tutte le proprietà:", squadre);
console.log("Nuovo array con solo nome e falli subiti:", nuovoArray);



