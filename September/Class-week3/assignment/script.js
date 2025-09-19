let inventory = [
  { id: 1, name: "Laptop", price: 1200, quantity: 50 },
  { id: 2, name: "Mouse", price: 25, quantity: 200 },
  { id: 3, name: "Keyboard", price: 75, quantity: 150 },
  { id: 4, name: "Monitor", price: 300, quantity: 80 },
  { id: 5, name: "Webcam", price: 50, quantity: 120 },
  { id: 6, name: "Headphones", price: 100, quantity: 90 },
  { id: 7, name: "Microphone", price: 85, quantity: 60 },
  { id: 8, name: "External Hard Drive", price: 95, quantity: 70 },
  { id: 9, name: "USB Hub", price: 20, quantity: 250 },
  { id: 10, name: "Laptop Stand", price: 35, quantity: 110 },
  { id: 11, name: "Gaming Chair", price: 250, quantity: 30 },
  { id: 12, name: "Printer", price: 150, quantity: 45 },
  { id: 13, name: "Router", price: 60, quantity: 100 },
  { id: 14, name: "Graphics Card", price: 500, quantity: 25 },
  { id: 15, name: "CPU", price: 400, quantity: 40 }
];



console.log("Adding products to cart");
console.log(" ");

// 1.

const addProduct = (id, product, amt, qty) => {
  const productExists = inventory.find(product => product.id === id || product.name === name);
  if (productExists) {
    console.log("Product " + product + " already exists, and we have " + qty + " left now!");
    return;
  }
  const newProduct = {id:id, name:product, price:amt, quantity:qty};
  inventory.push(newProduct);
  console.log("Added:", newProduct);
}


addProduct(16, "External Power Supply", 290, 50)
addProduct(3, "keyboard", 75, 250)
addProduct(17, "Web Hosting Plan", 20, 300)
addProduct(18, "64GB RAM", 90, 30)
console.log(inventory, 'After Additions')
console.log(" ");
console.log(" ");
console.log(" ");




console.log("Removing products from the cart");
console.log(" ");

// 2.

const removeProduct = ( productName) => {
  const removed = inventory.filter(product => product.name === productName);
  if (removed.length === 0) {
    console.log("Product not found in Inventory!!! Try a correct Product name!!!")
    return inventory;
  }
  const newInventory = inventory.filter(product => product.name !== productName);

  console.log("Removed:", removed);
  // console.log("New list:", newInventory);
  return newInventory;
};



removeProduct("Laptop");
removeProduct("Dress");
removeProduct("Monitor");



console.log(" ");
console.log(" ");
console.log(" ");



// 3. 
console.log("Updating Stock");
console.log(" ");


const updateStock = (productName, qty) => {
  for (let i = 0; i < inventory.length; i++) {
    let allInventory = inventory[i];
    if (allInventory.name === productName) {
      allInventory.quantity += qty;
      console.log("Updated " + productName + ": new quantity = " + allInventory.quantity);
      console.log(allInventory);
      console.log(inventory);
      return;
    }
  }
  console.log("Product " + productName + " not found.");
};


updateStock("Laptop", -5);
updateStock("Dress", +40);
updateStock("Keyboard", +20);





console.log(" ");
console.log(" ");
console.log(" ");


// 4.
console.log("Generating Report");
console.log(" ");


const generateReport = () => {
  let totalValue = 0;
  let lowStock = [];

  for (let i = 0; i < inventory.length; i++) {
    let product = inventory[i];
    totalValue += product.price * product.quantity;

    if (product.quantity < 10) {
      lowStock.push(product.name);
    }
  }

  console.log("📊 Inventory Report:");
  console.log(`- Total Products: ${inventory.length}`);
  console.log(`- Total Inventory Value: $${totalValue}`);
  console.log(`- Low Stock Items (<10): ${lowStock.length > 0 ? lowStock.join(", ") : "None"}`);
};


generateReport();

console.log("📦 Current Inventory:", inventory);
