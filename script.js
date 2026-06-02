// ============================
// TO-DO APP WITH LOCAL STORAGE
// ============================

let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}

function renderTasks(){

const taskList =
document.getElementById(
"taskList"
);

taskList.innerHTML = "";

tasks.forEach((task,index)=>{

const li =
document.createElement("li");

li.innerHTML = `

<span style="
text-decoration:
${task.completed
? "line-through"
: "none"};
font-weight:bold;
">

${task.text}

</span>

<div>

<button
onclick="toggleTask(${index})">

✔

</button>

<button
onclick="deleteTask(${index})">

🗑

</button>

</div>

`;

taskList.appendChild(li);

});

}

function addTask(){

const input =
document.getElementById(
"taskInput"
);

const text =
input.value.trim();

if(text===""){

alert(
"Please enter a task"
);

return;

}

tasks.push({

text:text,
completed:false

});

saveTasks();

renderTasks();

input.value="";

}

function toggleTask(index){

tasks[index].completed =
!tasks[index].completed;

saveTasks();

renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

renderTasks();

}

renderTasks();


// ============================
// PRODUCT LISTING DATA
// ============================

const products = [

{
name:"Dell Laptop",
category:"Laptop",
price:65000,
rating:4.8
},

{
name:"HP Laptop",
category:"Laptop",
price:55000,
rating:4.6
},

{
name:"Lenovo Laptop",
category:"Laptop",
price:70000,
rating:4.9
},

{
name:"Wireless Mouse",
category:"Accessories",
price:1200,
rating:4.5
},

{
name:"Mechanical Keyboard",
category:"Accessories",
price:3500,
rating:4.7
},

{
name:"Monitor",
category:"Accessories",
price:15000,
rating:4.6
},

{
name:"Webcam",
category:"Accessories",
price:2500,
rating:4.4
}

];


// ============================
// DISPLAY PRODUCTS
// ============================

function displayProducts(list){

const container =
document.getElementById(
"productContainer"
);

container.innerHTML = "";

list.forEach(product=>{

const card =
document.createElement("div");

card.classList.add(
"product-card"
);

card.innerHTML = `

<h3>
${product.name}
</h3>

<p>
Category:
${product.category}
</p>

<p class="price">
₹${product.price}
</p>

<p class="rating">
⭐ ${product.rating}
</p>

`;

container.appendChild(card);

});

}

displayProducts(products);


// ============================
// FILTER + SORT PRODUCTS
// ============================

function filterProducts(){

const category =
document.getElementById(
"filterCategory"
).value;

const sort =
document.getElementById(
"sortPrice"
).value;

let filtered =
[...products];

if(category !== "all"){

filtered =
filtered.filter(product =>

product.category === category

);

}

if(sort === "low"){

filtered.sort(
(a,b)=>

a.price-b.price
);

}

if(sort === "high"){

filtered.sort(
(a,b)=>

b.price-a.price
);

}

displayProducts(filtered);

}


// ============================
// PORTFOLIO LOADED MESSAGE
// ============================

window.addEventListener(
"load",
()=>{

console.log(
"Portfolio Loaded Successfully"
);

});