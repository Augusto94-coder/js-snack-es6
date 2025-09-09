const bikes = [
    {
        nome: "Bici 1",
        peso: 6.8
    },
    {
        nome: "Bici 2",
        peso: 6.6
    },
    {
        nome: "Bici 3",
        peso: 7.2
    },
    {
        nome: "Bici 4",
        peso: 6.5
    },
    {
        nome: "Bici 5",
        peso: 8.0
    }
];

let biciPiuLeggera = bikes[0];

for (i = 0; i < bikes.length; i++) {
    if (bikes[i].peso < biciPiuLeggera.peso) {
        biciPiuLeggera = bikes[i];
    }
    console.log(bikes[i])
}


console.log(`La bici più leggera è "${biciPiuLeggera.nome}" che pesa ${biciPiuLeggera.peso} kg `);