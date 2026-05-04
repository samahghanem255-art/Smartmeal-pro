let cart = [];
let total = 0;

/* إضافة للسلة */
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  document.getElementById("cartCount").innerText = cart.length;
  renderCart();
}

/* عرض السلة */
function toggleCart() {
  let box = document.getElementById("cartBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

/* تحديث السلة */
function renderCart() {
  let items = document.getElementById("cartItems");
  items.innerHTML = "";

  cart.forEach(item => {
    items.innerHTML += `<p>${item.name} - ${item.price} دج</p>`;
  });

  document.getElementById("total").innerText = "المجموع: " + total + " دج";
}

/* تأكيد الطلب */
function confirmOrder() {
  if (cart.length === 0) {
    alert("السلة فارغة");
    return;
  }

  window.open(`https://wa.me/213661234567?text=طلب جديد، المجموع ${total} دج`);
}

/* اللغات */
const translations = {
  ar: {
    title: "Smart Meal",
    subtitle: "اختيارات صحية • توصيل سريع",
    menu: "🍽️ قائمة الطعام",
    health: "🤖 توصيات صحية",
    payment: "💳 الدفع"
  },
  fr: {
    title: "Repas Intelligent",
    subtitle: "Repas sains • Livraison rapide",
    menu: "🍽️ Menu",
    health: "🤖 Conseils santé",
    payment: "💳 Paiement"
  },
  en: {
    title: "Smart Meal",
    subtitle: "Healthy meals • Fast delivery",
    menu: "🍽️ Menu",
    health: "🤖 Health Tips",
    payment: "💳 Payment"
  }
};

function setLang(lang) {
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("mainTitle").innerText = translations[lang].title;
  document.getElementById("subtitle").innerText = translations[lang].subtitle;
  document.getElementById("menuTitle").innerText = translations[lang].menu;
  document.getElementById("healthTitle").innerText = translations[lang].health;
  document.getElementById("paymentTitle").innerText = translations[lang].payment;

  document.body.dir = lang === "ar" ? "rtl" : "ltr";
}
