const homeBtn = document.getElementById("home");
const contactBtn = document.getElementById("contact");
const informationBtn = document.getElementById("information");
const guideBtn = document.getElementById("guide");
const HomeView = document.getElementById("homeTab");
const InfoView = document.getElementById("InfoTab");
const GuideView = document.getElementById("guideTab");
const ContactView = document.getElementById("contactTab");
const btns = document.getElementById("btns");
const Nav = document.getElementById("nav");
const menuIcon = document.getElementById("icon");
const buttons = document.querySelectorAll(".btn");

const HomeClicked = () => {
  HomeView.style.display = "flex";
  ContactView.style.display = "none";
  InfoView.style.display = "none";
  GuideView.style.display = "none";
  closeNav();
};

const contactClicked = () => {
  HomeView.style.display = "none";
  ContactView.style.display = "block";
  InfoView.style.display = "none";
  GuideView.style.display = "none";
  closeNav();
};

const InfoClicked = () => {
  HomeView.style.display = "none";
  ContactView.style.display = "none";
  InfoView.style.display = "block";
  GuideView.style.display = "none";
  closeNav();
};

const GuideClicked = () => {
  HomeView.style.display = "none";
  ContactView.style.display = "none";
  InfoView.style.display = "none";
  GuideView.style.display = "block";
  closeNav();
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const closeNav = () => {
  Nav.style.height = "5rem";
  Nav.style.paddingTop = "0rem";
  switched = 0;
  btns.style.display = "none";
};

let switched = 0;
const NavClicked = () => {
  if (switched == 0) {
    Nav.style.height = "50vh";
    Nav.style.paddingTop = "1.5rem";
    switched = 1;
    btns.style.display = "flex";
  } else {
    Nav.style.height = "5rem";
    Nav.style.paddingTop = "0rem";
    switched = 0;
    btns.style.display = "none";
  }
};
