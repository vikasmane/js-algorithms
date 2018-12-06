module.exports = class UnionFind{
    constructor(){
        this.sets = (new Array(9)).fill(-1);
    }
    find(v1, rank=0){
        if(this.sets[v1] == -1){
            return [v1, rank];
        }
        return this.find(this.sets[v1], ++rank);
    }
    union(v1, v2){
        let [parentA, rankA] = this.find(v1);
        let [parentB, rankB] = this.find(v2);
        
        if(parentA === parentB){
            return true;
        }
        if(rankA > rankB){
            this.sets[v2] = v1;
        }else{
            this.sets[v1] = v2;
        }
        
        return false;
    }
}