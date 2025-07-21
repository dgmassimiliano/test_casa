document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const navLinks = document.querySelectorAll('.nav-link');
  const currentURL = window.location.pathname.replace(/\/$/, '');

  navLinks.forEach(link => {
    const linkURL = new URL(link.href).pathname.replace(/\/$/, '');
    if (currentURL === linkURL) {
      link.classList.add('active');
    }
  });
  if (currentURL === "/") {
    let link_home = document.getElementById("link_home");
    link_home.classList.add('active');
  }

  if (!localStorage.getItem("cookies-accepted")) {
    banner.style.display = "block";
  }

  acceptBtn?.addEventListener("click", function () {
    localStorage.setItem("cookies-accepted", "true");
    banner.style.display = "none";
  });
});
