import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ThorDocs2023",
  description: "My messy docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      "/vitest/": [
        {
          text: "Vitest",
          items: [
            { text: "Vitest Settings", link: "/vitest/" },
            { text: "One", link: "/guide/one" },
            { text: "Two", link: "/guide/two" },
          ],
        },
      ],
      // This sidebar gets displayed when a user
      // is on `config` directory.
      "/godot/": [
        {
          text: "Godot",
          items: [
            { text: "Shortcuts", link: "/godot/shortcuts" },
            { text: "Lexical", link: "/godot/" },
            { text: "Methods", link: "/godot/methods" },
            { text: "Speedy Saucer", link: "/godot/speedy_saucer" },
            { text: "Alien Attack", link: "/godot/alien_attack" },
            { text: "Martian Mike", link: "/godot/martian_mike" },
          ],
        },
      ],
      "/vue/": [
        {
          text: "Vue",
          items: [
            { text: "Installation", link: "/vue/" },
            { text: "Vitest", link: "/vue/vitest" },
          ],
        },
      ],
      "/csharp/": [
        {
          text: "Csharp",
          items: [{ text: "Introduction", link: "/csharp/" }],
        },
      ],
      "/enterprise-ui-dev/": [
        {
          text: "Enterprise UI Development",
          items: [{ text: "github CICD", link: "/enterprise-ui-dev/" }],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
