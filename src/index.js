
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newTowelArr = [];
    for(let i in matrix){
        if(i%2){
            newTowelArr  = [...newTowelArr,...matrix[i].reverse()]
        }
        else{
            newTowelArr  = [...newTowelArr,...matrix[i]]
        }

    }

    return newTowelArr;
}
