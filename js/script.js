// HERO SECTION FOR IMG
const images = [
  "assets/img/depan1.png",
  "assets/img/depan2.png",
  "assets/img/depan3.png",
  "assets/img/depan4.png",
  "assets/img/depan5.png",
];
const imgElement = document.getElementById("hero-img");
let currentImageIndex = 0;

function changeImage() {
  imgElement.classList.remove("fade-animation");
  imgElement.style.opacity = 0;
  setTimeout(function () {
    imgElement.src = images[currentImageIndex];
    imgElement.classList.add("fade-animation");
    imgElement.style.opacity = 1;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }, 500);
}

imgElement.src = images[currentImageIndex];
currentImageIndex = (currentImageIndex + 1) % images.length;

setTimeout(function () {
  changeImage();
  setInterval(changeImage, 3000); // Change the interval to 3.5 seconds (3500 milliseconds)
}, 3000);
// END OF HERO SECTION FOR IMG

// ANIMATION FOR ABOUT SECTION
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar-nav a");
  const aboutSection = document.getElementById("about");
  const animatedImg = document.querySelector("#about img");
  let isAboutSectionVisible = false;
  let isAboutSectionScrolled = false;

  function animateImageIn() {
    animatedImg.style.visibility = "visible";
    animatedImg.classList.remove("animate__slideOutLeft");
    animatedImg.classList.add("animate__slideInLeft", "animate__delay-2.5s");
  }

  function animateImageOut() {
    animatedImg.classList.remove("animate__slideInLeft", "animate__delay-2.5s");
    animatedImg.classList.add("animate__slideOutLeft");
    animatedImg.addEventListener(
      "animationend",
      function () {
        animatedImg.style.visibility = "hidden";
      },
      { once: true }
    );
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    const isAboutSectionPartiallyVisible =
      aboutSection.getBoundingClientRect().bottom > 0;
    const isAboutSectionFullyVisible = isInViewport(aboutSection);

    if (isAboutSectionPartiallyVisible && !isAboutSectionVisible) {
      isAboutSectionVisible = true;
      animateImageIn();
    } else if (!isAboutSectionPartiallyVisible && isAboutSectionVisible) {
      isAboutSectionVisible = false;
      animateImageOut();
    }
  }

  function scrollToSection(event) {
    event.preventDefault();
    const targetSectionId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetSectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
      isAboutSectionScrolled = true;
      handleScroll(); // Panggil handleScroll setelah pengguliran selesai
    }
  }

  navbarLinks.forEach(function (navLink) {
    navLink.addEventListener("click", scrollToSection);
  });

  window.addEventListener("scroll", handleScroll);

  // Initial check on page load
  handleScroll();
});
// END ANIMATION ABOUT SECTION
