let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cart-count").innerText = cart.length;
  alert(`${name} تمت إضافته للسلة!`);
}

document.getElementById("cart-btn").addEventListener("click", () => {
  const cartSection = document.getElementById("cart");
  cartSection.style.display = cartSection.style.display === "block" ? "none" : "block";
  displayCart();
});

function displayCart() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} ريال`;
    list.appendChild(li);
    total += item.price;
  });
  document.getElementById("total").innerText = `الإجمالي: ${total} ريال`;
}

function checkout() {
  alert("شكرًا لطلبك! سيتم التواصل معك قريبًا ❤️");
  cart = [];
  document.getElementById("cart-count").innerText = 0;
  displayCart();
}
<script src="script.js"></script>
// 🛒 مصفوفة السلة
let cart = [];

// دالة لإضافة منتج للسلة
function addToCart(name, price) {
  cart.push({ name, price });
  alert(`✅ تمت إضافة (${name}) إلى السلة!`);
}

// دالة عرض تفاصيل المنتج
function showDetails() {
  window.location.href = "details.html"; // يفتح صفحة التفاصيل
}
