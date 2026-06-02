function calculateAge() {

  // Input field ki value lena
  const dob = document.getElementById("dob").value;

  // Result aur error element
  const result = document.getElementById("result");
  const error = document.getElementById("error");

  // Purana data clear karna
  result.innerHTML = "";
  error.innerHTML = "";

  // Agar date select nahi ki
  if (dob === "") {
    error.innerHTML = "Please select your birth date";
    return;
  }

  // Birth date object
  const birthDate = new Date(dob);

  // Aaj ki date
  const today = new Date();

  // Future date validation
  if (birthDate > today) {
    error.innerHTML = "Future date is not allowed";
    return;
  }

  // Year calculate
  let years = today.getFullYear() - birthDate.getFullYear();

  // Month calculate
  let months = today.getMonth() - birthDate.getMonth();

  // Day calculate
  let days = today.getDate() - birthDate.getDate();

  // Agar days negative aaye
  if (days < 0) {

    // Month ek kam
    months--;

    // Previous month ke total days
    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();

    // Days adjust
    days += previousMonth;
  }

  // Agar months negative aaye
  if (months < 0) {
    years--;
    months += 12;
  }

  // Final result show
  result.innerHTML = `
    <p><strong>${years}</strong> Years</p>
    <p><strong>${months}</strong> Months</p>
    <p><strong>${days}</strong> Days</p>
  `;
}