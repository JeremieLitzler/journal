const titleFr = "Un journal en ligne par Jeremiel";

module.exports = {
  lang: "fr-FR",
  title: titleFr,
  description:
    "Je partage ici mes notes et experiences qui peuvent être importantes et utiles pour vous",
  head: [
    ["meta", { property: "og:title", content: titleFr }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://iamjeremie.me/" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Notes, thoughts and experiences of Jérémie.",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:image", content: "image.png" }],
    ["meta", { name: "msapplication-TileColor", content: "#36377a" }],
    ["meta", { name: "theme-color", content: "#36377a" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon-16x16.png",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#36377a",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icons/apple-touch-icon.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
  ],
};
