import * as fruit from './data_buah';

const andiFruits: string[] = fruit.fruits.map(fruit => fruit.fruitName);
const uniqueAndiFruits: string[] = [...new Set(andiFruits)];

console.log("Buah yang dimiliki Andi:", uniqueAndiFruits);