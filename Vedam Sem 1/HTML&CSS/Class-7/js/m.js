function calculatePrice(quantity) {
    const pricePerItem = 500;
    let total = quantity * pricePerItem;

    if (quantity >= 10) {
        total = total * 0.9; 
    }

    total = total * 1.18; 
    return total;
}

console.log(calculatePrice(12));