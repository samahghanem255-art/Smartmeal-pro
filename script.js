let cart=[];
let total=0;

function addToCart(name,price){
cart.push({name,price});
total+=price;
document.getElementById("cartCount").innerText=cart.length;
alert(`تمت إضافة ${name}`);
}

function openCart(){
if(cart.length===0){
alert("السلة فارغة");
return;
}

let items=cart.map(i=>`${i.name} - ${i.price} دج`).join("\n");
alert(`🛒 طلبك:\n${items}\n\nالمجموع: ${total} دج`);
}

function confirmOrder(){
if(cart.length===0){
alert("أضف عناصر أولا");
return;
}
window.open(`https://wa.me/213671070943?text=أريد تأكيد طلبي، المجموع ${total} دج`);
}

/* 🌐 اللغات */
const translations={
ar:{ai:"🤖 اقتراح ذكي",text:"💡 جرب: دجاج مشوي صحي"},
en:{ai:"🤖 Smart Suggestion",text:"💡 Try: Healthy Grilled Chicken"},
fr:{ai:"🤖 Suggestion IA",text:"💡 Essayez: Poulet grillé"}
};

function changeLang(lang){
document.querySelector(".ai-btn").innerText=translations[lang].ai;
}

/* 🤖 AI */
function aiSuggestion(){
let meals=[
"🍗 دجاج مشوي صحي",
"🥗 سلطة خفيفة",
"🍝 باستا",
"🥩 بروتين عالي"
];

let random=meals[Math.floor(Math.random()*meals.length)];
document.getElementById("aiText").innerText=random;
}
