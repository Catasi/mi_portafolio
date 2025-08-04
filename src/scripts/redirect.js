function redirectBasedOnScreenSize() {
  const screenWidth = window.innerWidth;
  const currentPath = window.location.pathname;

  if (screenWidth <= 1024) {
    // Móviles y tablets
    if (!currentPath.includes("movil")) {
      window.location.href = "/movil-view";
    }
  } else {
    // Escritorio
    if (currentPath.includes("movil-view")) {
      window.location.replace("/");
    }
  }
}

// Ejecutar al cargar la página
window.addEventListener("load", redirectBasedOnScreenSize);

  // Ejecutar al cambiar el tamaño de ventana
  window.addEventListener("resize", redirectBasedOnScreenSize);
