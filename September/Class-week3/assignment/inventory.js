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


console.log("-------- Adding products to cart ---------");
console.log(" ");


const addProducts = (id, name, price, quantity) => {
  let product = inventory.find(function (item) {
    return item.name === name;
  });
  if (product) {
    product.quantity += quantity;
    console.log(quantity, "unit of quantity added to", product.name);
  } else {
     const newProduct = { id: id, name: name, price: price, quantity: quantity }
    inventory.push(newProduct);
    console.log(name + " has been added to inventory,  quantity of: " + quantity + " , and at a price of: " + price);
  }
}

addProducts(16, "External Power Supply", 290, 50)
addProducts(17, "Web Hosting Plan", 20, 300)
addProducts(18, "64GB RAM", 90, 30)
addProducts(3, "keyboard", 75, 250)
addProducts(6, "Headphones", 90, 100)
console.log(inventory, 'After Additions')
console.log(" ");
console.log(" ");




console.log("-------- Removing products from cart ------");
console.log(" ");
 
const removeProducts = (productName) => {
  const product = inventory.find(item => item.name === productName);
 
  if (!product) {
    console.log(`Product with name ${productName} not found.`);
    return;
  }
  let newInventory = [];
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name !== productName) {
      newInventory.push(inventory[i]);
    }
  }
 
  inventory = newInventory;
  console.log(`Product ${productName} removed successfully.`);
};
 
 
 
console.log("Initial Inventory:", inventory);
removeProducts("Speaker");
removeProducts("Router", 20);
removeProducts("Laptop", 30);
removeProducts("Dress");
removeProducts("Monitor", 60);
console.log("Inventory after removing products:", inventory);
 
console.log(" ");
console.log(" ");



console.log("------- Updating Stock --------");
console.log(" ");


const updateStock = (name, changeInQuantity) => {
  for (let i = 0; i < inventory.length; i++) {
    let allInventory = inventory[i]
    if (allInventory.name === name) {
      // preventing negative stock
      if (allInventory.quantity + changeInQuantity < 1) {
        console.log(`Error: Not enough stock to remove that amount from ${name}. Current quantity is: ${allInventory.quantity}`);
        return;
      }
      // updating quantity
      inventory[i].quantity += changeInQuantity;
      console.log(`Stock updated: ${inventory[i].name} added ${changeInQuantity} units and now has ${inventory[i].quantity} units in total.`);
      return allInventory; // return the updated product object
    }
  }
  console.log("Error: Product not found.");
  return ; 
};


updateStock("Microphone", 50);
updateStock("Dress", 100);
updateStock("Webcam", -30);
updateStock("Printer", -140);
updateStock("CPU", 20);
console.log("Inventory after updating product", inventory);
console.log(" ");
console.log(" ");



console.log("------- Generating Inventory report --------");
console.log(" ");

const generateReport = () => {
  let totalValue = 0;
  let lowStock = [];

  function getStatus(item) {
    if (item.quantity === 0) {
      return "OUT OF STOCK";
    } else if (item.quantity <= 20) {
      return "LOW";
    } else if (item.quantity <= 50) {
      return "MEDIUM";
    } else {
      return "HIGH";
    }
  }

  // Grouping all products
  let grouped = {
    HIGH: [],
    MEDIUM: [],
    LOW: [],
    "OUT OF STOCK": []
  };

  inventory.forEach(product => {
    let status = getStatus(product);
    product.status = status; 
    totalValue += product.price * product.quantity;

    if (product.quantity < 10) {
      lowStock.push(product.name);
    }

    grouped[status].push(product.name);
  });

  
  console.log(`- Total Products: ${inventory.length}`);
  console.log(`- Total Inventory Value: $${totalValue}`);
  console.log(`- Low Stock Items (<10): ${lowStock.length > 0 ? lowStock.join(", ") : "None"}`);
  console.log("\n- Breakdown by Stock Status:");
  for (let status in grouped) {
    console.log(`   ${status}: ${grouped[status].length} items -> ${grouped[status].join(", ") || "None"}`);
  }
};

// Run it
generateReport();

console.log("\n🔎 Only LOW stock items:", inventory.filter(item => item.status === "LOW"));
console.log("🔎 Only HIGH stock items:", inventory.filter(item => item.status === "HIGH"));
