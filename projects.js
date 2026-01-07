

// 1️⃣ Products Array
var products = [
  { id: 1, name: "Denim Damage Jeans", price: 500, image: "accesories.jpg", pageURL: "page9.html" },
  { id: 2, name: "Mens Jackets", price: 1050, image: "photo6.jpg", pageURL: "page7.html" },
  { id: 3, name: "Denim Damage Jeans", price: 600, image: "men2.jpg", pageURL: "page10.html" },
  { id: 4, name: "Stylish Wonderful Hoddie", price: 250, image: "photo6.jpg", pageURL: "page6.html" },
  { id: 5, name: "Stylish Flowline Sweater", price: 280, image: "photo4.jpg", pageURL: "page5.html" },
  { id: 6, name: "Stylish Red T Shirt", price: 150, image: "photo2.jpg", pageURL: "page3.html" },
  { id: 7, name: "Stylish Red T Shirt", price: 250, image: "photo1.jpg", pageURL: "page2.html" },
  { id: 8, name: "Stylish White T Shirt", price: 150, image: "photo3.jpg", pageURL: "page1.html" },
  { id: 9, name: "Full sleves T Shirt", price: 250, image: "men.jpg", pageURL: "page8.html" }
];

// 2️⃣ Cart initialization - Local storage se data fetch karein
// Agar storage khali hai to empty array [] assign hoga
var cart = JSON.parse(localStorage.getItem("userCart")) || [];

// Page load hote hi cart dikhane ke liye
window.onload = function() {
  showCartItems();
};

function pushitemcart(productId) {
  var product = products.find(p => p.id === productId);
  if (!product) return;

  var item = {
    name: product.name,
    price: product.price,
    link: product.image,
    pageURL: product.pageURL
  };

  cart.push(item);
  
  // LocalStorage mein save karein
  saveToLocalStorage();
  
  // UI update karein
  showCartItems();
}

function showCartItems() {
  var cartBox = document.getElementById("cartItems");
  var totalBox = document.getElementById("totalPrice");
  var cartCount = document.getElementById("cartCount");

  if (cartCount) cartCount.innerText = cart.length;
  if (!cartBox) return;

  cartBox.innerHTML = "";
  var total = 0;

  cart.forEach(function(item, index) {
    total += item.price;
    cartBox.innerHTML += `
<div class="cart-item d-flex align-items-center justify-content-between mb-3 p-3 border rounded w-100" style="max-width: 500px; margin: 0 auto;">
  <div class="d-flex align-items-center">
    <a href="${item.pageURL}" class="d-flex align-items-center text-decoration-none text-dark">
      <img src="${item.link}" class="rounded" style="width:70px; height:70px; object-fit:cover;">
      <div class="ms-4">
        <p class="mb-1 fw-bold">${item.name}</p>
        <div class="d-flex align-items-center gap-2">
          <span class="text-muted">Price:</span>
          <span class="fw-semibold text-success">₹${item.price}</span>
        </div>
      </div>
    </a>
  </div>
  <button class="btn btn-sm btn-outline-danger" onclick="removeItem(${index})">
    <i class="fa-solid fa-trash"></i>
  </button>
</div>`;
  });

  if (totalBox) totalBox.innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  
  // Delete ke baad storage update karein
  saveToLocalStorage();
  
  showCartItems();
}

// Helper function to save data
function saveToLocalStorage() {
  localStorage.setItem("userCart", JSON.stringify(cart));
}







// offertimerstart//
// offertime//
let totalSeconds = (2*24*60*60) + (12*60*60) + (55*60) + 33;

function updateCountdown() {
  let day = Math.floor(totalSeconds / (24*60*60));
  let hours = Math.floor((totalSeconds % (24*60*60)) / 3600);
  let min = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  document.getElementById("days").textContent = day;
  
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = min;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("sec").style.color = "white";

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    clearInterval(timer);
  }
}

let timer = setInterval(updateCountdown, 1000);
updateCountdown();




// offertimer end//