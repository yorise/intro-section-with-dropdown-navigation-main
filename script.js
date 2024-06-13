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
