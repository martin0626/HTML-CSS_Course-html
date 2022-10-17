function changeYear() {
  let yearElement = document.getElementById("year");
  yearElement.textContent = new Date().getFullYear();
}

function stickyNavigation() {
  let sectionHeroElement = document.querySelector(".hero-section");
  let obs = new IntersectionObserver(
    function (entries) {
      let ent = entries[0];

      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      }

      if (ent.isIntersecting) {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );

  obs.observe(sectionHeroElement);
}

stickyNavigation();
changeYear();
