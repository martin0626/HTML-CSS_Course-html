function openCloseNav() {
  let buttonElement = document.getElementById("open-close-btn-nav");

  buttonElement.addEventListener("click", () => {
    let headerElement = Array.from(
      document.getElementsByClassName("header")
    )[0];

    headerElement.classList.toggle("nav-open");
    // if (Array.from(headerElement.classList).includes("nav-open")) {
    //   headerElement.classList.remove("nav-open");
    // } else {
    //   headerElement.classList.add("nav-open");
    // }
  });
}

function smoothScrolling() {
  let sectionLinks = document.querySelectorAll("a:link");
  sectionLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let hrefElement = link.getAttribute("href");
      let headerElement = document.querySelector(".header");

      if (hrefElement === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      if (hrefElement !== "#" && hrefElement.startsWith("#")) {
        let sectionEl = document.querySelector(hrefElement);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      if (link.classList.contains("main-nav-link")) {
        headerElement.classList.toggle("nav-open");
      }
    });
  });
}

smoothScrolling();
openCloseNav();
