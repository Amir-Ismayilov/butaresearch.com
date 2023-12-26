export default {
  ssr: false,
  axios: {
    baseURL: process.env.API_URL,
  },
  head: {
    title: "Main",
    titleTemplate: "%s | Buta Research",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Buta Research" },
      { name: "format-detection", content: "telephone=no" },
      { name: "company", content: "ALFASOFT LLC" },
      { name: "developer", content: "Amir Ismayilov; Firengiz Sariyeva" },

      {
        property: "og:title",
        content: "Unveiling Insights: Buta Research",
      },

      {
        property: "og:description",
        content:
          "Uncover valuable insights and drive progress with Buta Research. Our dedicated team explores the forefront of knowledge, providing innovative solutions for a brighter future.",
      },

      {
        property: "og:url",
        content: "https://butaresearch.com",
      },

      { property: "og:image", content: "/favicon_io/apple-touch-icon.png" },
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "favicon_io/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "favicon_io/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "favicon_io/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  },

  loading: "~/components/main/Loader.vue",

  css: [
    "bootstrap/dist/css/bootstrap.css",
    "leaflet/dist/leaflet.css",
    "leaflet-fullscreen/dist/leaflet.fullscreen.css",
    "@/assets/app.css",
    "@fortawesome/fontawesome-free/css/all.css",
  ],

  plugins: [
    { src: "~/plugins/axios.js" },
    { src: "~/plugins/vue-toast.js" },
    { src: "~/plugins/vuelidate.js" },
    { src: "~/plugins/vue-awesome-swiper.js", ssr: false },
  ],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/dotenv", "@nuxtjs/axios", "@nuxtjs/toast", "nuxt-i18n"],
  i18n: {
    locales: [
      { code: "az", name: "Azerbaijani", iso: "az-AZ" },
      { code: "en", name: "English", iso: "en-US" },
      { code: "ru", name: "Russian", iso: "ru-RU" },
    ],
    defaultLocale: "az",
    // strategy: "prefix",
    vueI18n: {
      fallbackLocale: "en",
      strategy: "no_prefix",
      messages: {
        az: require("./lang/az.json"),
        en: require("./lang/en.json"),
        ru: require("./lang/ru.json"),
      },
    },
  },

  build: {},
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
  },
};
