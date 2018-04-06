// layout

const match = function(query) {
  return window.matchMedia(query).matches;
};

const respond = function() {
  const body = document.body;

  if (!match("(min-width: 600px)")) {
    body.classList = "";
    body.classList.add("mobile", "tall");
  } else if (window.innerWidth > window.innerHeight * 1.4) {
    if (match("(min-width: 900px)")) {
      body.classList = "";
      body.classList.add("desktop", "wide");
    } else {
      body.classList = "";
      body.classList.add("mobile", "wide");
    }
  } else {
    body.classList = "";
    body.classList.add("desktop", "tall");
  }
};

respond();
window.addEventListener("resize", respond);

// navigation
const navButtons = document.querySelectorAll("nav button");
const section = function(id) {
  return document.querySelector(`section#${id}`);
};

navButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    section(this.innerText).scrollIntoView({ behavior: "smooth" });
  });
});
