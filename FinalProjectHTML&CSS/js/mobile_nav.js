function openCloseNav() {
  let buttonElement = document.getElementById("open-close-btn-nav");

  buttonElement.addEventListener("click", () => {
    let headerElement = Array.from(
      document.getElementsByClassName("header")
    )[0];

    if (Array.from(headerElement.classList).includes("nav-open")) {
      headerElement.classList.remove("nav-open");
    } else {
      headerElement.classList.add("nav-open");
    }
  });
}

openCloseNav();
