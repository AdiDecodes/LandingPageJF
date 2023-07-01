const homeBtn = document.getElementById("home");
const contactBtn = document.getElementById("contact");
const informationBtn = document.getElementById("information");
const guideBtn = document.getElementById("guide");
const HomeView = document.getElementById("homeTab");
const InfoView = document.getElementById("InfoTab");
const ContactView = document.getElementById("contactTab");
home.addEventListener("click", (e) => {
  HomeView.style.display = "block";
  ContactView.style.display = "none";
  InfoView.style.display = "none";
});
contactBtn.addEventListener("click", (e) => {
  HomeView.style.display = "none";
  ContactView.style.display = "block";
  InfoView.style.display = "none";
});
informationBtn.addEventListener("click", (e) => {
  HomeView.style.display = "none";
  ContactView.style.display = "none";
  InfoView.style.display = "block";
});
