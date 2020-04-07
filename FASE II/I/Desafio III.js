/*
const users = [
    { name: "Fulano", techs: ["HTML", "CSS"] },
    { name: "Siclano", techs: ["JavaScript", "CSS"] },
    { name: "Beltrano", techs: ["HTML", "Node.js"] }
  ];

for(user of users) {
    console.log(`${user.name} work with ${user.techs}`)
}

function checkUserUseCSS(user) {
    for(tech of user.techs) {
        if(tech == "CSS") {
            return true;
        }
    }
    return false;
}

for (let i = 0; i < users.length; i++) {
    const userWorkWithCSS = checkUserUseCSS(users[i]);
  
    if (userWorkWithCSS) {
      console.log(`The user ${users[i].name} work with CSS`);
    }else {
        console.log(`The user ${users[i].name} don't work with CSS`);
    }
}
*/
/*
function calculaSaldo(receitas, despesas) {
    let totalr=0, totald=0;
    for(receita of receitas) {
        totalr += receita
    }
    for(despesa of despesas) {
        totald += despesa
    }
    return totalr - totald;
}

function saldo(value) {
    if(value > 0) {
        return "POSITIVO"
    }
    return "NEGATIVO"
}

const users = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

for(user of users) {
    console.log(`${user.nome} possui saldo ${saldo(calculaSaldo(user.receitas, user.despesas))} de ${calculaSaldo(user.receitas, user.despesas).toFixed(2)}`)
}
*/