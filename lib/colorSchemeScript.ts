export const COLOR_SCHEME_STORAGE_KEY = "dossier-color-scheme";

export const colorSchemeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("${COLOR_SCHEME_STORAGE_KEY}");
    var resolved =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.setAttribute("data-color-scheme", resolved);
  } catch (e) {}
})();
`.trim();
