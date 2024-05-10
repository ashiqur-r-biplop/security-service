// nav bar fixed
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.add("navbar-shadow");
    const navbar = document.getElementById("navbar");
    navbar.style.position = "fixed";
    navbar.style.top = "0px";
    navbar.style.transition = "top 1s";
  } else {
    document.getElementById("navbar").classList.remove("navbar-shadow");
  }
}
// nav bar fixed
// back face js
document.querySelectorAll(".backface-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.querySelector(".card-content").style.transform = "rotateY(180deg)";
  });

  card.addEventListener("mouseleave", () => {
    card.querySelector(".card-content").style.transform = "rotateY(0deg)";
  });
});
// back face js
