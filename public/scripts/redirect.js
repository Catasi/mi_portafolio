(function () {
  let resizeTimeout;

  function redirectBasedOnScreenSize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const screenWidth = window.innerWidth;
      const currentPath = window.location.pathname;

      if (screenWidth <= 1024) {
        if (!currentPath.includes("movil")) {
          window.location.href = "/movil-view";
        }
      } else {
        if (currentPath.includes("movil-view")) {
          window.location.replace("/");
        }
      }
    }, 250);
  }

  // Ejecutar cuando esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", redirectBasedOnScreenSize);
  } else {
    redirectBasedOnScreenSize();
  }

  window.addEventListener("resize", redirectBasedOnScreenSize);
  window.addEventListener("popstate", redirectBasedOnScreenSize);
})();
