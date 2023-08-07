import * as fruit from './data_buah';
import * as fcontainer from './soal-2';


const stockByContainer = fcontainer.fruitContainers.map(container => {
    const totalStock = fruit.fruits
      .filter(fruit => fruit.fruitType === container.containerType)
      .reduce((total, fruit) => total + fruit.stock, 0);
    return {
      containerType: container.containerType,
      totalStock: totalStock
    };
  });
  
  console.log("Total stock buah di masing-masing wadah:", stockByContainer);