const header = document.querySelector("header");
const tabbar = document.querySelector("header nav");
const logo = document.querySelector("header .logo");
const menuButton = document.querySelector("header .menu-button");

function showAndHideTabbar() {
  if (tabbar.classList.contains("show")) {
    tabbar.classList.remove("show");
  } else {
    tabbar.classList.add("show");
  }
}
function setHeaderHeight() {
  let logoHeight = logo.offsetHeight;
  let buttonHeight = menuButton.offsetHeight;
  let headerHeight = logoHeight + buttonHeight + 50;
  let navHeight = tabbar.offsetHeight;
  if (window.innerWidth <= 768) {
    header.style.height = `${headerHeight}px`;
  } else {
    header.style.height = `${headerHeight + navHeight}px`;
  }
}
export { showAndHideTabbar, setHeaderHeight };
