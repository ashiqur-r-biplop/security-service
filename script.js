// // nav bar fixed
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").classList.add("navbar-shadow");
//     const navbar = document.getElementById("navbar");
//     navbar.style.position = "fixed";
//     navbar.style.top = "0px";
//     navbar.style.transition = "top 1s";
//   } else {
//     document.getElementById("navbar").classList.remove("navbar-shadow");
//   }
// }
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
// marquee partner 
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// Clone the original marquee content
const originalContent = Array.from(marqueeContent.children);

// Reverse the order of elements
const reversedContent = originalContent.slice().reverse();

// Append clones to the reverse marquee content
for (let i = 0; i < marqueeElementsDisplayed - 1; i++) { // Adjusted loop to exclude the last item
  marqueeContent.appendChild(originalContent[i].cloneNode(true));
}
