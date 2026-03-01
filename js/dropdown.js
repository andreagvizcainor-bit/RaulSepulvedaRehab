// Dropdown Servicios - Maneja interacción en móvil (tap) y desktop (hover)
document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.querySelector(".nav-links .dropdown");
  const dropbtn = dropdown?.querySelector(".dropbtn");

  // Abrir/cerrar dropdown principal en móvil
  dropbtn?.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      e.preventDefault();
      dropdown.classList.toggle("open");
    }
  });

  // Abrir/cerrar submenús en móvil
  dropdown?.querySelectorAll(".submenu").forEach((submenu) => {
    const trigger = submenu.querySelector(".submenu-trigger");
    trigger?.addEventListener("click", (e) => {
      if (window.matchMedia("(max-width: 900px)").matches) {
        e.preventDefault();
        submenu.classList.toggle("open");
      }
    });
  });

  // Cerrar si haces click afuera (móvil)
  document.addEventListener("click", (e) => {
    if (!dropdown) return;
    if (window.matchMedia("(max-width: 900px)").matches && !dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
      dropdown.querySelectorAll(".submenu").forEach(s => s.classList.remove("open"));
    }
  });
});
