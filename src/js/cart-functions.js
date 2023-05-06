const calculateChange = (total, payment) => {
  const remainder = payment - total;
  if (remainder < 0) {
    return `You still owe $${remainder}`;
  } else {
    return remainder;
  }
};

const isSufficientPayment = (total, payment) => {
  if (payment >= total) {
    return true;
  } else {
    return false;
  }
};

const calculateTotal = (itemsArray) => {
  //   let total = 0;
  //   for (let i = 0; i < itemsArray.length; i++) {
  //     total += itemsArray[i].price;
  //   }
  //   return total;
  return itemsArray.reduce((total, currentObj) => {
    return total + currentObj.price;
  }, 0);
};

const addItem = (itemsArray, name, price) => {
  const newItem = {
    name: name,
    price: price,
  };
  itemsArray.push(newItem);
};

const removeItem = (itemsArray, index) => {
  itemsArray.splice(index, 1);
};

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};
