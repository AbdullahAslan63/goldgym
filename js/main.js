import * as headerJS from "./header.js";

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("header .menu-button");
  window.addEventListener("resize", () => headerJS.setHeaderHeight());
  window.addEventListener("load", () => headerJS.setHeaderHeight());
  menuButton.addEventListener("click", () => headerJS.showAndHideTabbar());
});
