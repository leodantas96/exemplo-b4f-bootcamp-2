function clone(matriz){
    //Transposição
    // O Objetivo da transposição é transformar linhas em colunas e colunas em linhas
    let nm = [];
    for (let i = 0; i < matriz.length; i++){
        let nl = [];
        for (let j = 0; j < matriz[i].length; j++) {
            nl.push(matriz[i][j])
        }
        nm.push(nl)
    }
    return nm
}

function transpor(matriz) {
    // trocar linhas para colunas e colunas para linhas
    let nm = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (nm[j] === undefined) {
                nm[j] = [];
            }
            nm[j][i] = matriz[i][j]
            //console.log(nm, i, j)
            // nl.push(matriz[i][j])
        }
    }
    return nm;
}

console.log(
    clone([
    [1, 2, 3],
    [4, 5, 6]
]))

console.log(
    transpor([
    [1, 2, 3],
    [4, 5, 6]
]))