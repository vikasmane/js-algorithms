//sieves of eratosthenes
module.exports = function getPrimeNumbers(n){
    let primeBool = (new Array(n)).fill(true);
    primeBool[0] = false;
    primeBool[1] = false;
    for(let i=2; i*i<n; i++){
        if(primeBool[i]){
            for(let j=2, k=i*j; k<n; ++j, k=i*j){
                primeBool[k] = false;
            }
        }
    }
    return primeBool.map((x, i)=> x && i).filter(Boolean);
}