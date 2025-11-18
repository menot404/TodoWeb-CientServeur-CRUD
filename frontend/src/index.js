// Gérer les changements du switch
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Récupérer le thème sauvegardé ou système
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const systemTheme = prefersDark ? "dark" : "light";
  const currentTheme = localStorage.getItem("theme") || systemTheme;
  console.log("🔄 DOMContentLoaded - Thème actuel:", currentTheme);

  // Mettre à jour l'état du switch
  if (themeToggle) {
    themeToggle.checked = currentTheme === "dark";
    console.log("✅ Switch mis à jour - checked:", themeToggle.checked);
  } else {
    console.warn("⚠️ Élément theme-toggle non trouvé!");
  }

  // Écouter les changements du switch
  if (themeToggle) {
    themeToggle.addEventListener("change", (e) => {
      const newTheme = themeToggle.checked ? "dark" : "light";
      console.log("🔀 Thème changé en:", newTheme);
      htmlElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      console.log("💾 Thème sauvegardé dans localStorage:", newTheme);
    });
  }

  // Écouter les changements du thème système
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        // Seulement si l'utilisateur n'a pas choisi un thème manuel
        const newTheme = e.matches ? "dark" : "light";
        console.log("🔄 Thème système changé en:", newTheme);
        htmlElement.setAttribute("data-theme", newTheme);
        if (themeToggle) {
          themeToggle.checked = newTheme === "dark";
        }
      }
    });
});
