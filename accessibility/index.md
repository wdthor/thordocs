# Accessibility

## Useful links

[Contrast Checker](https://webaim.org/resources/contrastchecker/)
[French norm - RGAA](https://accessibilite.numerique.gouv.fr/)
[International norm - WCAG](https://www.w3.org/TR/WCAG21/)

## WCAG 2.0 - Web Content Accessibility Guidelines

They categorise 3 levels of accessbility

- A - Minimum accessibility
- AA - Minimum legally accessible in some countries
- AAA - highest and most optimal accessibility level

## Contrast ratio

- The lowest contrast ratio is when the text and background have the same color (ratio 1:1)
- The highest contrast ratio is black and white (ratio 1:21)

## Alternative text

- They are important because without it, the screen readers will read the file instead
- Not all images need an alternative text, such as images for decorative purposes

## Links

- Should use the `<a>` element
- Should be recognizable as links (color and border bottom)
- Should be non-ambiguous text that can be understood outside of their context
  - Examples of bad practice are "Click here", "More", "Continue"

### section link

If an entire section is a link (ex: card) we should wrap the entire section in a link because the screen reader will read all the text

```html
<!-- BAD 👎 -->
<a href="#">
  <section>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
  </section>
</a>
```

The trick is to put the link inside the section and then add some `Css` to cover the entire section, we can also add a hover effect

```html
<!-- GOOD 👍 -->
<style>
  a::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
</style>
<section>
  <p>Some text</p>
  <p>Some text</p>
  <p>Some text</p>
  <a href="#" aria-label="description about the link"></a>
</section>
```

## Headings

- Heading numbers should be consecutive
- Only use one **h1** per page
- Apply them for structure, not style

## ARIA - Accessible Rich Internet Applications

- Provides a way to make web applications and dynamic content more accessible to assistive technologies such as screen readers and voice recognition software
- If there are semantic equivalent of ARIA, we should use the semantic first
- The role of ARIA is to complement semantics, not replace it

```html
<div role="switch" aria-checked="false" tabindex="0">Light Mode</div>
```

- role : Defines the intended purpose of the element (In this case, it works as a switch)
- aria-checked : Defines if the switch is activated or not
- tabindex : Keyboard accessibility

### ARIA live regions

- Part of a web page marked to be dynamically updated
- When content changes in these regions, it is announced by screen readers without the need for the user to navigate to the changed content
- Common use cases are

  - Notifications
  - Form validation errors

- `aria-live="polite"` - The **most common** one to use
  - Any region which receives updates that are important for the user to receive should receive this attribute
- `aria-live="assertive"` - Should only be used for **sensitive** or **critical** notifications that absolutely require the user's immediate attention
  - It is disruptive and interupts any announcement the screen reader is currently making

```html
<form>
  <a id="homeLink" href="#">Back to home page</a>

  <input type="text" />

  <button>Send message</button>
</form>
<!-- Hidden message, reveal with form validation -->
<p aria-live="polite">Message sent</p>

<script>
  const form = document.getElementById("form");
  const homeLink = document.getElementById("homeLink");

  form.addEventListener("submit", () => {
    homeLink.focus();
  });
</script>
```

- After the form submission `.focus` helps the screen reader know where to go after (don't overuse it though)

## Accessible JavaScript

- Mouse related events exclude uses who navigate using keyboards or touch screens
- We should consider using more inclusive event handlers
- _Click_, _focus_, and _blur_ events can effectively replace `mouse over` and `mouse out`
- For touch screen users we can use events like _touchstart_
- Integrating error message in the workflow accessibility tree is a better solution than other events

## Hiding content

- Using Css properties like `display: none` and `visibility: hidden` to hide content will also hide it from screen readers
- Most modals are inaccessible, confusing and negatively affects user experience while unnecessary

## Navigation Links

- Navigation links can be annoying (pressing tab several times to finally see the main content of the page)
- We can use CSS tricks to allow screen readers to skip directly to the main section if they want to

```html
<style>
  .skip-nav-link {
    border: 2px solid #333333;
    padding: 8px 20px;
    padding-left: 40px;
    border-radius: 40px;
    position: absolute;
    left: -240px;
    top: 80px;
    transition: 3s;
  }
  .skip-nav-link:focus {
    left: -20px;
    transition: 1s;
  }
</style>
<nav class="navbar">
  <!-- This link is not visible if not focused on -->
  <a class="skip-nav-link" href="#main">Go to main section</a>
  <div class="logo">
    <p class="logo-text">Brand name</p>
  </div>
  <ul class="nav-links">
    <li><a class="nav-link" href="index.html">Home</a></li>
    <li><a class="nav-link" href="#">About</a></li>
    <li><a class="nav-link" href="#">Contact</a></li>
    <li><a class="nav-link" href="#">Sign up</a></li>
  </ul>
</nav>
```

## Side note

### List

- It is semantically correct to put a heading (**h1-h6**) inside a list (**li**)

### Button

- aria-label : Describe the button
- aria-pressed : Tells if the button is "selected" or not

```js
const isPressed = true;

<button
  aria-label="A button that will display the menu when clicked"
  aria-pressed=`${isPressed}`
>
  Click me
</button>

```

- aria-live='polite'
  When something change, the screen reader will announce when there is a change
