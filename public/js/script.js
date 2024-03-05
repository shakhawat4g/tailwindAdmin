// Inbox & Profile & Notification(Bell) open/close action
const userInboxButton = document.getElementById("user-menu-inbox-button");
const InboxMenu = document.getElementById("user-inbox-menu");

userInboxButton.addEventListener("click", () => {
  InboxMenu.classList.toggle("hidden");
  ProfileMenu.classList.add("hidden");
  BellMenu.classList.add("hidden");
  searchBox.classList.add("hidden");
});

const userProfileButton = document.getElementById("user-menu-profile-button");
const ProfileMenu = document.getElementById("user-profile-menu");

userProfileButton.addEventListener("click", () => {
  ProfileMenu.classList.toggle("hidden");
  InboxMenu.classList.add("hidden");
  BellMenu.classList.add("hidden");
  searchBox.classList.add("hidden");
});

const userBellButton = document.getElementById("user-menu-bell-button");
const BellMenu = document.getElementById("user-bell-menu");

userBellButton.addEventListener("click", () => {
  BellMenu.classList.toggle("hidden");
  InboxMenu.classList.add("hidden");
  ProfileMenu.classList.add("hidden");
  searchBox.classList.add("hidden");
});

const headerSearchButton = document.getElementById("header-search-button");
const searchBox = document.getElementById("search-box");

headerSearchButton.addEventListener("click", () => {
  searchBox.classList.toggle("hidden");
  BellMenu.classList.add("hidden");
  InboxMenu.classList.add("hidden");
  ProfileMenu.classList.add("hidden");
});


//Sidebar submenu open/close action
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-menu");
  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const submenu = button.nextElementSibling;
        submenu.classList.toggle("hidden");
    });
  });
});


// Mobile Menu
let menuBar = document.querySelector("#menuBar");
let mobileMenu = document.querySelector("#mobileMenu");
let closeMenu = document.querySelector("#closeMenu");

menuBar.addEventListener('click', () => {
    mobileMenu.classList.remove("hidden");
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add("hidden");
});