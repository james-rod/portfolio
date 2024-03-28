const btnDark = document.getElementById("toggleDark");
const btnLight = document.getElementById("toggleLight");
const mainPage = document.querySelector("main");
const darkMode = localStorage.getItem("dark-mode");

btnDark.addEventListener("click", enableDarkMode);
btnLight.addEventListener("click", disableDarkMode);

if (darkMode === "enable") {
  btnDark.classList.contains("darkMode-active");
  enableDarkMode();
}

function enableDarkMode() {
  btnDark.classList.add("invisible");
  btnLight.classList.remove("invisible");
  mainPage.classList.add("darkMode-active");
  localStorage.setItem("dark-mode", "enable");

  console.log("dark mode active");
}

function disableDarkMode() {
  btnDark.classList.remove("invisible");
  btnLight.classList.add("invisible");
  mainPage.classList.remove("darkMode-active");
  localStorage.setItem("dark-mode", "disable");

  console.log("dark mode un-active");
}

function updateTextColors(isDarkMode) {
  const textElements = document.querySelectorAll(".darkMode-active");

  textElements.forEach((element) => {
    element.style.color = isDarkMode ? "#fff" : "#000";
  });
}

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const body = document.querySelector("body");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const overlay = document.querySelector(".overlay");

  sidebar.classList.toggle("sidebar-active");
  body.classList.toggle("no-scroll");
  hamburgerIcon.classList.toggle("active");

  if (sidebar.classList.contains("sidebar-active")) {
    overlay.style.opacity = 0.5;
  } else {
    overlay.style.opacity = 0;
  }
}

// Mobile Interactive

const projects = [
  {
    image: "manage-image.jpg",
    name: "Manage Landing Page",
    description:
      "This Manage landing page showcases client testimonials in a sleek horizontal slider, providing a dynamic presentation of user feedback. Additionally, the newsletter sign-up form incorporates error handling, generating messages if the input field is empty or if the entered email address is not correctly formatted, ensuring a seamless and error-free interaction.",
    gitHub_link: "https://github.com/james-rod/manage-landing-page",
    preview_link: "https://james-rod.github.io/manage-landing-page/",
  },
  {
    image: "e-commerces-img.jpg",
    name: "E-Commerces Project",
    description:
      "This E-commerce product page provides a dynamic user experience with a lightbox gallery opening on a click, allowing customers to explore detailed visuals and seamlessly switch between images through small thumbnails; the responsive design a seamless and visually engaging shopping experience on different device screen sizes.",
    gitHub_link: "https://github.com/james-rod/E-commerce-product-page",
    preview_link: "https://james-rod.github.io/E-commerce-product-page/",
  },
  {
    image: "github-search-img.png",
    name: "DevFinder",
    description:
      "DevFinder is a GitHub Profile Viewer project that adeptly leverages the GitHub Users third-party API to fetch pertinent profile information. This project focus on delivering a sleek and user-friendly interface. The responsive design ensures an optimal layout, adapting seamlessly to various device screen sizes for an enhanced user experience.",
    gitHub_link: "https://github.com/james-rod/github-user-search-app",
    preview_link: "https://james-rod.github.io/github-user-search-app/",
  },
  {
    image: "weather-img.png",
    name: "API Weather App",
    description:
      "I developed a weather application in React.js, utilizing the OpenWeatherMap API for real-time weather data, and prioritized an engaging user experience with a comprehensive interface. The application's responsive design ensures a seamless and enhanced viewing experience by adapting to various screen sizes for optimal layout accessibility.",
    gitHub_link: "https://github.com/james-rod/weather-app",
    preview_link: "https://james-rod.github.io/weather-app/",
  },
  {
    image: "interactive-card-form-img.jpg",
    name: "Card Details Form Interactive",
    description:
      "This Interactive Card Details Form offers a dynamic user experience by updating card information in real time as users fill in the form, while intelligently generating error messages for empty fields or incorrectly formatted card details upon submission. Its responsive design ensures an optimal layout for users across different devices, enhancing accessibility and usability.",
    gitHub_link: "https://github.com/james-rod/Interactive-card-details-form",
    preview_link: "https://james-rod.github.io/Interactive-card-details-form/",
  },
  {
    image: "api-quote-img.png",
    name: "API Advice Generator",
    description:
      "I designed a user-friendly advice generator app using the Advice Slip API, offering interactive elements like hover states and enabling users to generate new advice by clicking the dice icon. The app's seamless adaptation to different device screen sizes, through responsive design, ensures an optimized viewing experience, enhancing the overall usability of the advice generator.",
    gitHub_link: "https://github.com/james-rod/Advice-generator-app",
    preview_link: "https://james-rod.github.io/Advice-generator-app/",
  },
];

const projectImage = document.querySelector(".mobile-project-image img");
const projectName = document.querySelector(".mobile-overlay-description h3");
const projectDescription = document.querySelector(
  ".mobile-overlay-description p"
);
const githubButton = document.querySelector(".mobile-button:nth-child(1)");
const demoButton = document.querySelector(".mobile-button:nth-child(2)");

const previousBtn = document.querySelector(".previousBtn");
const nextBtn = document.querySelector(".nextBtn");

let currentIndex = 0;

previousBtn.addEventListener("click", showPreviousProject);
nextBtn.addEventListener("click", showNextProject);

function showPreviousProject() {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  updateProjectContent(currentIndex);
}

function showNextProject() {
  currentIndex = (currentIndex + 1) % projects.length;
  updateProjectContent(currentIndex);
}

// Modify githubButton click event listener
githubButton.addEventListener("click", () =>
  openLink(projects[currentIndex].gitHub_link)
);

// Modify demoButton click event listener
demoButton.addEventListener("click", () =>
  openLink(projects[currentIndex].preview_link)
);

// Add the openLink function
function openLink(link) {
  if (link) {
    window.open(link, "_blank");
  }
}

function updateProjectContent(index) {
  const project = projects[index];

  projectImage.src = `images/${project.image}`;
  projectName.textContent = project.name;
  projectDescription.textContent = project.description;
}

updateProjectContent(currentIndex);
