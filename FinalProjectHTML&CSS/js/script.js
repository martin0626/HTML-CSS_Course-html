function changeYear() {
  let yearElement = document.getElementById("year");
  yearElement.textContent = new Date().getFullYear();
}

changeYear();
