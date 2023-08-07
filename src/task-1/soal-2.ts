import * as fruit from './data_buah';

const fruitTypes: string[] = [...new Set(fruit.fruits.map(fruit => fruit.fruitType))];

export const fruitContainers = fruitTypes.map(type => {
  const fruitsOfType = fruit.fruits.filter(fruit => fruit.fruitType === type);
  const fruitNames = fruitsOfType.map(fruit => fruit.fruitName);
  return {
    containerType: type,
    fruits: fruitNames
  };
});

console.log("Jumlah wadah yang dibutuhkan:", fruitContainers.length);
console.log("Buah di masing-masing wadah:", fruitContainers);