function openAcc() {
  let buttonElemetnts = Array.from(document.getElementsByClassName("item"));

  for (let i = 0; i < buttonElemetnts.length; i++) {
    let button = buttonElemetnts[i];
    button.addEventListener("click", () => {
      if (Array.from(button.classList).includes("active")) {
        button.className = "item";
      } else {
        button.className += " active";
      }
    });
  }
}

console.log("asd");
openAcc();
