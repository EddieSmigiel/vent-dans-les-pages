const MOIS_FR = [
  "janv.", "févr.", "mars", "avr.", "mai", "juin",
  "juil.", "août", "sept.", "oct.", "nov.", "déc."
];

const MOIS_FR_LONG = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre"
];

module.exports = function (eleventyConfig) {

  // ── Passthrough copy ──────────────────────────────────
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");

  // ── Filters ───────────────────────────────────────────

  // Slug compatible filesystem (pas de :, ', etc.)
  eleventyConfig.addFilter("slug", (str) => {
    if (!str) return "";
    return str
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/['']/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  });

  // Jour du mois (ex: "15")
  eleventyConfig.addFilter("dateJour", (dateObj) => {
    const d = new Date(dateObj);
    return d.getDate();
  });

  // Mois abrégé en français (ex: "mars")
  eleventyConfig.addFilter("dateMois", (dateObj) => {
    const d = new Date(dateObj);
    return MOIS_FR[d.getMonth()];
  });

  // Date formatée en français (ex: "15 mars 2026")
  eleventyConfig.addFilter("dateFr", (dateObj) => {
    const d = new Date(dateObj);
    return `${d.getDate()} ${MOIS_FR_LONG[d.getMonth()]} ${d.getFullYear()}`;
  });

  // Date ISO pour sitemap (ex: "2026-03-15")
  eleventyConfig.addFilter("dateIso", (dateObj) => {
    const d = new Date(dateObj);
    return d.toISOString().split("T")[0];
  });

  // Formatage de prix (ex: 14 → "14,00 €")
  eleventyConfig.addFilter("prix", (value) => {
    const num = parseFloat(value);
    return num.toFixed(2).replace(".", ",") + "\u00a0€";
  });

  // Filtrer les événements futurs
  eleventyConfig.addFilter("futureEvents", (events) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return (events || []).filter((event) => {
      const eventDate = new Date(event.data.eventDate);
      return eventDate >= now;
    });
  });

  // Limiter un tableau à N éléments
  eleventyConfig.addFilter("limit", (arr, n) => {
    return (arr || []).slice(0, n);
  });

  // Extraire un extrait de contenu HTML
  eleventyConfig.addFilter("excerpt", (content) => {
    if (!content) return "";
    const text = content.replace(/<[^>]+>/g, "");
    const words = text.trim().split(/\s+/).slice(0, 30);
    return words.join(" ") + (words.length >= 30 ? "…" : "");
  });

  // Année courante (pour le copyright)
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // ── Collections ───────────────────────────────────────

  // Livres : triés par date décroissante
  eleventyConfig.addCollection("livres", (collectionApi) => {
    return collectionApi.getFilteredByTag("livres").sort((a, b) => {
      return (b.date || 0) - (a.date || 0);
    });
  });

  // Livres vedette (mis en avant)
  eleventyConfig.addCollection("livresVedette", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("livres")
      .filter((item) => item.data.vedette === true)
      .sort((a, b) => (b.date || 0) - (a.date || 0));
  });

  // Événements : triés par date d'événement croissante
  eleventyConfig.addCollection("evenements", (collectionApi) => {
    return collectionApi.getFilteredByTag("evenements").sort((a, b) => {
      const dateA = new Date(a.data.eventDate || a.date);
      const dateB = new Date(b.data.eventDate || b.date);
      return dateA - dateB;
    });
  });

  // ── Config ────────────────────────────────────────────
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md"]
  };
};
