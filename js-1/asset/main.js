let container = document.getElementById("stamp")
let bici = [
    {
        'nome' : 'prima bicicletta',
        'peso' : 7  
    },
    {
        'nome' : 'seconda bicicletta',
        'peso' : 12 
    },
    {
        'nome' : 'terza bicicletta',
        'peso' : 20   
    },
    {
        'nome' : 'quarta bicicletta',
        'peso' : 25  
    }
];

let biciLeggera = bici[0]


for(let i = 0; i < bici.length; i++){
    let x = bici[i]
    if(biciLeggera['peso'] > x['peso']){
        biciLeggera = x;
    }
}
console.log(bici)
console.log(biciLeggera)
const {nome, peso} = biciLeggera;
container.innerHTML= `
<div> ${nome} è la più leggera! e pesa ${peso}</div>
`;