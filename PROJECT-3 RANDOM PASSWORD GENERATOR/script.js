const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerChars = "abcdefghijklmnopqrstuvwxyz";

const numberChars = "0123456789";

const symbolChars = "!@#$%^&*()_+";


// Generate Password
function generatePassword(){

  let length =
    Number(document.getElementById("length").value);

  let upper =
    document.getElementById("upper").checked;

  let lower =
    document.getElementById("lower").checked;

  let number =
    document.getElementById("number").checked;

  let symbol =
    document.getElementById("symbol").checked;


  // Validation
  if(length < 4 || length > 50){

    alert("Password length must be between 4 and 50");

    return;
  }


  if(!upper && !lower && !number && !symbol){

    alert("Select at least one option");

    return;
  }


  // Character collection
  let chars = "";


  if(upper){
    chars += upperChars;
  }

  if(lower){
    chars += lowerChars;
  }

  if(number){
    chars += numberChars;
  }

  if(symbol){
    chars += symbolChars;
  }


  // Generate password
  let password = "";


  for(let i = 0; i < length; i++){

    let randomIndex =
      Math.floor(Math.random() * chars.length);

    password += chars[randomIndex];
  }


  // Show password
  document.getElementById("password").value =
    password;


  // Check strength
  checkStrength(password);
}



// Strength Checker
function checkStrength(password){

  let strength = 0;


  if(password.length >= 8){
    strength++;
  }

  if(/[A-Z]/.test(password)){
    strength++;
  }

  if(/[a-z]/.test(password)){
    strength++;
  }

  if(/[0-9]/.test(password)){
    strength++;
  }

  if(/[^A-Za-z0-9]/.test(password)){
    strength++;
  }


  let result = "";


  if(strength <= 2){

    result = "Weak";

  }
  else if(strength <= 4){

    result = "Medium";

  }
  else{

    result = "Strong";
  }


  document.getElementById("strength").innerText =
    "Strength : " + result;
}



// Copy Password
function copyPassword(){

  let password =
    document.getElementById("password").value;


  if(password === ""){

    alert("Generate password first");

    return;
  }


  navigator.clipboard.writeText(password);

  alert("Password copied");
}



// Save Password
function savePassword(){

  let password =
    document.getElementById("password").value;

  let label =
    document.getElementById("label").value;


  if(password === ""){

    alert("Generate password first");

    return;
  }


  let savedPasswords =
    JSON.parse(localStorage.getItem("passwords")) || [];


  // Duplicate check
  let exists = savedPasswords.some((item) => {

    return item.password === password;

  });


  if(exists){

    alert("Password already saved");

    return;
  }


  let passwordData = {

    password: password,

    label: label,

    date: new Date().toLocaleString()
  };


  savedPasswords.push(passwordData);


  localStorage.setItem(
    "passwords",
    JSON.stringify(savedPasswords)
  );


  displayPasswords();

  alert("Password saved");
}



// Display Passwords
function displayPasswords(){

  let savedPasswords =
    JSON.parse(localStorage.getItem("passwords")) || [];


  let search =
    document.getElementById("search").value.toLowerCase();


  let output = "";


  savedPasswords.forEach((item, index) => {

    if(
      item.password.toLowerCase().includes(search)
      ||
      item.label.toLowerCase().includes(search)
    ){

      output += `
      
      <div class="saved">

        <p>
          <b>Password:</b>
          ${item.password}
        </p>

        <p>
          <b>Label:</b>
          ${item.label}
        </p>

        <p>
          <b>Date:</b>
          ${item.date}
        </p>

        <button onclick="deletePassword(${index})">
          Delete
        </button>

      </div>
      
      `;
    }

  });


  document.getElementById("savedPasswords").innerHTML =
    output;
}



// Delete Password
function deletePassword(index){

  let savedPasswords =
    JSON.parse(localStorage.getItem("passwords")) || [];


  savedPasswords.splice(index, 1);


  localStorage.setItem(
    "passwords",
    JSON.stringify(savedPasswords)
  );


  displayPasswords();
}



// Button Events
document
.getElementById("generateBtn")
.addEventListener("click", generatePassword);


document
.getElementById("copyBtn")
.addEventListener("click", copyPassword);


document
.getElementById("saveBtn")
.addEventListener("click", savePassword);


document
.getElementById("search")
.addEventListener("keyup", displayPasswords);


// Initial display
displayPasswords();