import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ThorDocs2024",
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
            { text: "First Scene", link: "/threejs/" },
            { text: "Camera", link: "/threejs/2-camera" },
            {
              text: "Resizing and Antialiasing",
              link: "/threejs/3-resizing-and-antialiasing",
            },
            {
              text: "Manipulating Meshes",
              link: "/threejs/4-manipulating-meshes",
            },
            {
              text: "Animating Meshes",
              link: "/threejs/5-animating-meshes",
            },
            {
              text: "Mesh Geometries",
              link: "/threejs/6-meshes-geometries",
            },
            {
              text: "Mesh Materials",
              link: "/threejs/7-meshes-materials",
            },
            {
              text: "Textures",
              link: "/threejs/8-textures",
            },
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
      "/javascript-pro/": [
        {
          text: "JavaScript Pro",
          items: [
            { text: "Object Oriented JavaScript", link: "/js-pro/" },
            {
              text: "OOP : Newer Features in JavaScript",
              link: "/js-pro/oop-newer-features-in-js",
            },
            {
              text: "The Mysterious Keyword 'This'",
              link: "/js-pro/the-mysterious-keyword-this",
            },
            {
              text: "OOP Under The Hood : Prototypes, New & More",
              link: "/js-pro/oop-under-the-hood",
            },
            { text: "Asynchronous Code", link: "/js-pro/asynchronous-code" },
            {
              text: "The Tricky Parts : Scope & Closure",
              link: "/js-pro/scope-and-closures",
            },
          ],
        },
      ],
      "/web-app-testing-and-tools": [
        {
          text: "Web App Testing & Tools",
          items: [
            {
              text: "Introduction",
              link: "/web-app-testing",
            },
            {
              text: "Unit Testing & Mocking",
              link: "/web-app-testing/unit-testing",
            },
          ],
        },
      ],
      "automation-python": [
        {
          text: "The Automation Bootcamp",
          items: [
            {
              text: "Python Basics",
              link: "/automation-python/",
            },
            {
              text: "Working with files",
              link: "/3-working-with-files/",
            },
            {
              text: "Paths and Folders",
              link: "/4-paths-and-folders/",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/wdthor/thordocs" },
    ],
  },
});
