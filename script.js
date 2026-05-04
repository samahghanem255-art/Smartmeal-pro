let cart=[];
let total=0;

function addToCart(name,price){
cart.push({name,price});
total+=price;
document.getElementById("cartCount").innerText=cart.length;
alert("تمت إضافة " + name);
}

function openCart(){
if(cart.length===0){
alert("السلة فارغة");
return;
}

let items=cart.map(i=>`${i.name} - ${i.price} دج`).join("\n");
alert("🛒 الطلب:\n" + items + "\n\nالمجموع: " + total + " دج");
}

function confirmOrder(){
if(cart.length===0){
alert("أضف عناصر أولاً");
return;
}

window.open("https://wa.me/213671070943?text=طلب جديد المجموع " + total + " دج");
}

/* MENU MOBILE */
function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}

/* AI */
function aiSuggestion(){
let meals=[
"🍗 دجاج مشوي",
"🥗 سلطة صحية",
"🍝 باستا خفيفة",
"🥩 بروتين عالي"
];

let random=meals[Math.floor(Math.random()*meals.length)];
document.getElementById("aiText").innerText="اقتراح اليوم: " + random;
}

/* LANG (بسيط) */
function changeLang(lang){
if(lang==="en"){
document.getElementById("aiText").innerText="Smart suggestion enabled";
}
if(lang==="fr"){
document.getElementById("aiText").innerText="Suggestion intelligente activée";
}
}
