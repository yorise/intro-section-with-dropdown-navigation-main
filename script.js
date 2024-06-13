// document.addEventListener("DOMContentLoaded", function () {
//   const navItems = document.querySelectorAll("nav ul li");

//   navItems.forEach((item) => {
//     const dropdownIcon = item.querySelector(".dropdown");
//     const dropdownMenu = item.querySelector("div");

//     item.addEventListener("click", (event) => {
//       event.stopPropagation();

//       if (dropdownMenu) {
//         dropdownMenu.classList.toggle("active");
//         if (dropdownMenu.classList.contains("active")) {
//           dropdownIcon.src = "./images/icon-arrow-up.svg";
//         } else {
//           dropdownIcon.src = "./images/icon-arrow-down.svg";
//         }
//       }
//     });
//   });

//   document.addEventListener("click", () => {
//     navItems.forEach((item) => {
//       const dropdownMenu = item.querySelector("div");
//       const dropdownIcon = item.querySelector(".dropdown");

//       if (dropdownMenu && dropdownMenu.classList.contains("active")) {
//         dropdownMenu.classList.remove("active");
//         dropdownIcon.src = "./images/icon-arrow-down.svg";
//       }
//     });
//   });
// });

const navItems = document.querySelectorAll("nav div.nav-links ul.nav-list li");

navItems.forEach((item) => {
  const dropdownIcon = item.querySelector(".dropdown");
  const dropdownMenu = item.querySelector("ul");

  item.addEventListener("click", (event) => {
    event.stopPropagation();

    if (dropdownMenu) {
      dropdownMenu.classList.toggle("active");
      if (dropdownMenu.classList.contains("active")) {
        dropdownIcon.src = "./images/icon-arrow-up.svg";
      } else {
        dropdownIcon.src = "./images/icon-arrow-down.svg";
      }
    }
  });
  console.log(item);
});

document.addEventListener("click", () => {
  navItems.forEach((item) => {
    const dropdownMenu = item.querySelector("ul");
    const dropdownIcon = item.querySelector(".dropdown");

    if (dropdownMenu && dropdownMenu.classList.contains("active")) {
      dropdownMenu.classList.remove("active");
      dropdownIcon.src = "./images/icon-arrow-down.svg";
    }
  });
});

const openMenu = document.querySelector("nav div.menu img");
const closeMenu = document.querySelector("nav div.nav-links img:nth-child(1)");
const navLink = document.querySelector("nav div.nav-links");
const overlay = document.querySelector("nav div.overlay");

openMenu.addEventListener("click", () => {
  navLink.classList.toggle("active");
  overlay.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  navLink.classList.remove("active");
  overlay.classList.remove("active");
});

document.addEventListener("click", (event) => {
  const isClickInsideNav =
    navLink.contains(event.target) || openMenu.contains(event.target);
  if (!isClickInsideNav) {
    navLink.classList.remove("active");
    overlay.classList.remove("active");
  }
});
