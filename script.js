// Declare variables
let userName = "Mary";
let userAge = 20;

// Conditional logic
if (userAge >= 18) {
  document.getElementById("greeting").textContent = 
    "Hello " + userName + "! You are an adult.";
} else {
  document.getElementById("greeting").textContent = 
    "Hi " + userName + "! You are still young.";
}

// Function to calculate total of two numbers
function calculateTotal(a, b) {
  return a + b;
}

// Function to get values from input fields and display result
function showTotal() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let total = calculateTotal(num1, num2);
  document.getElementById("totalResult").textContent = 
    "The total is: " + total;
}

// Example Countdown using for loop
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous results

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example  Using forEach loop
let colors = ["Red", "Green", "Blue"];
colors.forEach(color => console.log("Color:", color));

// Toggle class on button click
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggleText").classList.toggle("highlight");
});

//  Create element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was created with JavaScript!";
document.body.appendChild(newPara);

// 3. Respond to mouseover event
document.getElementById("toggleText").addEventListener("mouseover", function() {
  this.textContent = "You hovered over me!";
});
