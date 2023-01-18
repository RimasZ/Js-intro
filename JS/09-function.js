console.clear();

function sudetis(pirmas, antras){
    return pirmas + antras;
}

const s1 = sudetis(7, 5);
console.log(s1);

function arLyginis(a){
    if(a % 2 === 0){
        return 'lyginis';
    }
    else{
        return 'Nelyginis';
    }
}

console.log(arLyginis(4));

const maryte = [5, 7, 4, 3, 8, 9];
const petras = [5, 5, 5, 5, 5, 5, 5, 5];

function avg(marks){
    let a = 0
    for(let i = 0; i < marks.length; i++){
        a += marks[i];
    }
    return a / marks.length;
}

console.log(avg(maryte));
console.log(avg(petras));

function skaitmenys(num){
    let k = 0
    for(let i = num; i > 1; i /= 10){
        k++
    }
    return k;
}

console.log(skaitmenys(132456789));