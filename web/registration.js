if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/fajny-spevnik/service-worker.js")
      .then((result) => console.log("Service worker registered."))
      .catch((error) => console.log("Service worker not registered", error));
  });
}
