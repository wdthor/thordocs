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
            {
              text: "Rendering data to view",
              link: "/vue/1-rendering-data-to-view",
            },
            { text: "Directives", link: "/vue/2-directives" },
            { text: "Creating Subnav", link: "/vue/4-creating-subnav" },
            {
              text: "Create Headline Component",
              link: "/vue/5-create-headline-component",
            },
            {
              text: "Creating Job Search Form",
              link: "/vue/6-creating-job-search-form",
            },
            { text: "Emitting Events", link: "/vue/7-emitting-events" },
            { text: "Vue Router I", link: "/vue/8-vue-router-1" },
            { text: "Vue Router II", link: "/vue/9-vue-router-2" },
            {
              text: "Building Job Result Page",
              link: "/vue/10-building-job-result-page",
            },
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
      "/typescript/": [
        {
          text: "TypeScript",
          items: [{ text: "Intermediate TS", link: "/typescript/" }],
        },
      ],
      "/threejs/": [
        {
          text: "ThreeJS",
          items: [
            { text: "hello world", link: "/threejs/" },
            { text: "Camera", link: "/threejs/camera" },
          ],
        },
      ],
      "/mysql/": [
        {
          text: "MySQL",
          items: [
            { text: "Introdution", link: "/mysql/" },
            {
              text: "Creating databases and tables",
              link: "/mysql/3-creating-databases-and-tables",
            },
            { text: "Inserting data", link: "/mysql/4-inserting-data" },
            { text: "CRUD Basics", link: "/mysql/5-crud-basics" },
            { text: "CRUD Challenge", link: "/mysql/6-crud-challenge" },
            { text: "String Functions", link: "/mysql/7-string-functions" },
            {
              text: "Refining Selections",
              link: "/mysql/8-refining-sections",
            },
            {
              text: "Aggregate Functions",
              link: "/mysql/9-aggregate-functions",
            },
            {
              text: "Revisiting Data Types",
              link: "/mysql/10-revisiting-data-types",
            },
          ],
        },
      ],
      "/motion-design/": [
        {
          text: "Motion Design",
          items: [
            { text: "Why is Motion important ?", link: "/motion-design/" },
            { text: "Figma Basics", link: "/motion-design/figma-basics" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
