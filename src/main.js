import "./style.scss";

const menuToggle = document.getElementById("menuToggle");
const sideMenuToggle = document.querySelectorAll(".sideMenuToggle");
const mainNav = document.getElementById("mainNav");
const overlay = document.getElementById("overlay");
const submenus = document.querySelectorAll(".submenu");
const menuItemsWithChildren = document.querySelectorAll(".menu-item-with-children");
const backButtons = document.querySelectorAll(".back-button");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  overlay.classList.toggle("hidden");
});

sideMenuToggle.forEach((element) => {
  element.addEventListener("click", () => {
    const activeSubmenus = Array.from(submenus).filter((submenu) => submenu.classList.contains("active"));

    if (activeSubmenus.length > 0) {
      activeSubmenus.forEach((submenu) => submenu.classList.remove("active"));
    } else {
      mainNav.classList.remove("active");
      overlay.classList.add("hidden");
    }
  });
});

overlay.addEventListener("click", () => {
  const activeSubmenus = Array.from(submenus).filter((submenu) => submenu.classList.contains("active"));

  if (activeSubmenus.length > 0) {
    activeSubmenus.forEach((submenu) => submenu.classList.remove("active"));
  } else {
    mainNav.classList.remove("active");
    overlay.classList.add("hidden");
  }
});

menuItemsWithChildren.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const submenuId = item.getAttribute("data-submenu");
    const submenu = document.getElementById(submenuId);

    submenus.forEach((submenu) => submenu.classList.remove("active"));

    submenu.classList.add("active");
  });
});

backButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const submenu = button.closest(".submenu");
    submenu.classList.remove("active");
  });
});

document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.parentElement;
    const content = accordionItem.querySelector(".accordion-content");    

    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      content.style.maxHeight = "0px";
      setTimeout(() => {
        content.style.maxHeight = content.scrollHeight + "px";
      }, 0);      
    } else {
      content.style.maxHeight = "0px";      
      setTimeout(() => {
        content.classList.add("hidden");
      }, 300);
    }
  });
});

/* document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answerId = question.getAttribute("data-answer");
    const answer = document.querySelector(`.faq-answer[data-answer="${answerId}"]`);
    answer.classList.toggle("hidden");
    answer.style.maxHeight = answer.classList.contains("hidden") ? "0" : answer.scrollHeight + "px";
  });
}); */
