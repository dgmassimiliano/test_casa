document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const revokeBtn = document.getElementById("revoke-cookies");
  const navLinks = document.querySelectorAll('.nav-link');

  // Funzione per normalizzare i path rimuovendo lo slash finale, tranne se è solo "/"
  const normalizePath = (path) => {
    return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  };

  const currentURL = normalizePath(window.location.pathname);

  navLinks.forEach(link => {
    const linkURL = normalizePath(new URL(link.href).pathname);
    if (currentURL === linkURL) {
      link.classList.add('active');
    }
  });

  if (currentURL === "") {
    const link_home = document.getElementById("link_home");
    link_home?.classList.add('active');
  }

  // Gestione banner cookies
  if (!localStorage.getItem("cookies-accepted-casa")) {
    banner.style.display = "block";
    revokeBtn.style.display = "none";
  }
  else{
    banner.style.display = "none";
    revokeBtn.style.display = "block";   
  }

  acceptBtn?.addEventListener("click", function () {
    localStorage.setItem("cookies-accepted-casa", "true");
    banner.style.display = "none";
    revokeBtn.style.display = "block";

  });

  revokeBtn?.addEventListener("click", function () {
    localStorage.removeItem("cookies-accepted-casa");
    banner.style.display = "block";
    revokeBtn.style.display = "none";
  });
});