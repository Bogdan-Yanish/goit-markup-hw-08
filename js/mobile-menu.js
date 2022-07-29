// (() => {
//   const MenuBtnRef = document.querySelector("[data-menu-button]");
//   const MobileMenuRef = document.querySelector("[data-menu]");
//   const BodyRef = document.querySelector("body");
//   MenuBtnRef.addEventListener("click", () => {
//     const expanded =
//     MenuBtnRef.getAttribute("aria-expanded") === "true" || false;
//     MenuBtnRef.classList.toggle("is-open");
//     MenuBtnRef.setAttribute("aria-expanded", !expanded);
//     MobileMenuRef.classList.toggle("is-open");
//     BodyRef.classList.toggle("is-open");
//   });
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
  }
})();