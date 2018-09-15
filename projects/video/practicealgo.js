var shuffle = ["a", "b", "c"];

function random(shuffle){
    for(var i = 0; i < shuffle.length; i++){
        var rand = Math.round(Math.random() * 3);
        rand = shuffle[i];
        shuffle.splice(i, 1, rand)
        break;
    }
    return shuffle;
}

console.log(random(shuffle))