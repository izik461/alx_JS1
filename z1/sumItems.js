const products = [
    { name: "Bananas", pricePerUnit: 1.49, quantity: 2 },
    { name: "Bread", pricePerUnit: 3.29, quantity: 1 },
    { name: "Chocolate", pricePerUnit: 5, quantity: 2 },
  ];
  
  function sumItems(items) {
      let totalValue = 0;

      for (const anItem of items) {
          //TODO: check if pricePerUnit/quantity exists - stupid JS nullability
        totalValue += (anItem.pricePerUnit*anItem.quantity);
      }
      return totalValue;
  }
  
  let result = sumItems(products) //powinno zwrócić 16.27
  console.log('The sum is: ' + result);