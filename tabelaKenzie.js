 
 function TableGenerator() { 
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let x = [];
    for (let i = 0; i <= 10; i++) {
        x[i] = [];
        for( let u = 0; u <= 10; u++){
            x[i][u] = i*u;
        }
    }
    console.table(x)
}
console.log(TableGenerator())





function BonusTable(n){
    let y = [];
    for (let i = 0; i <= n; i++){
        y[i] = [];
        for(let o = 0; o <= n; o++){
            y[i][o] = i*o;
        }
    }
    console.table(y)
}

console.log("Type 'BonusTable' ")
