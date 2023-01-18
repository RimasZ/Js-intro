console.clear();

const marks = [2, 4, 8, 9, 11, 35, 56, 78];
let sum = 0;

for(let i = 0; i < marks.length; i++)
{
    sum += marks[i];
}

console.log(sum);
const avg = sum / marks.length;
console.log(avg);