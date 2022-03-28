let squadre = [
    {
        'nome' : 'Milan',
        'punti' : 0,
        'falliSubiti' : 0
    },

    {
        'nome' : 'Napoli',
        'punti' : 0,
        'falliSubiti' : 0
    },

    {
        'nome' : 'Inter',
        'punti' : 0,
        'falliSubiti' : 0
    },

    {
        'nome' : 'Juventus',
        'punti' : 0,
        'falliSubiti' : 0
    },
];

//numeri random
function getRandomInt (){
    return Math.floor(Math.random() * 100)
}


let newteamarray = [];

for ( i = 0; i < squadre.length; i++){
    let randomNum = getRandomInt()
    let randomNum2 = getRandomInt()
    squadre[i]['punti'] = randomNum
    squadre[i]["falliSubiti"] = randomNum2
    let {nome, falliSubiti} = squadre[i]
    newteamarray.push({nome, falliSubiti})
}


console.log(newteamarray)
console.log(squadre)