function openAcc() {
  let button = document.getElementById("try");
  button.addEventListener("click", () => {
    if (Array.from(button.classList).includes("active")) {
      button.className = "item";
    } else {
      button.className += " active";
    }
  });
}

console.log("asd");
openAcc();
