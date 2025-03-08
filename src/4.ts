
function getRandomNumber(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const max = 20;
const min = 10;

console.log(getRandomNumber(max, min));
 