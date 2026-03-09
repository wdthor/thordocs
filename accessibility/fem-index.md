# Accessibility (A11y)

## Accessibility Overview

What is accessibility ?

- Web accessibility means that people with disabilities can **use** the web
- More specifically, it means that people with disabilities can **perceive**, **understand**, **navigate** and **interact** with the web, and that they can **contribute** to the web

### Types of disabilities

- Mobility and physical
- Cognitive and neurological
- Visual
- Hearing

### Assistive technologies

- Keyboard only
- Head wand and mouth stick
- Single switch
- Screen readers
- Eye tracker keyboard

### Standards and Guidelines

- WCAG (Web Content Accessibility Guidelines)
- WAI (The W3C Web Accessibility Initiative)
- WAI-ARIA (Accessible Rich Internet Applications)
- Accessibility resource : [WebAIM](https://webaim.org/)

### WCAG Conformance Levels

- A - Minimum accessibility
- AA - Minimum legally accessible in some countries
- AAA - highest and most optimal accessibility level

### WCAG POUR Principles

- Perceivable
  - Users can recognize the presented information via sight, hearing, or touch
- Operable
  - Users can navigate and operate the user interface via alternative input methods
- Understandable
  - Users can make sense of the textual, visual, and audio content and available operations
- Robust
  - A wide variety of web browsers and assistive technologies can interpret the information

## Semantic HTML & Assistive Technologies

### How screen readers work

- Screen readers convert digital text into synthesized speech.
- They empower users to hear content and navigate with the keyboard.
- The technology helps people who are blind or how have low vision to use information technology with the same level of independence and privacy as anyone else.

### Popular screen readers

- JAWS (Windows)
- NVDA (Windows)
- VoiceOver (Mac)

### Alternative text

- By default, when a screen reader encounters an image, if it can't find an alternative text, it will read aloud the file name
- This can get especially tricky for user generated images which often get hashed file names

#### Alt attribute

Adding an alt attribute to an image will override that behavior and screen readers will read the alt text instead of the file name.

```html
<img src="puppy.jpg" alt="A puppy in the park" />
```

#### Skipping over images

Sometimes, a website will have images that are strictly for decorative purposes. An empty alt attribute will tell the screen readers to skip over the image.

```html
<img src="decorative-image.jpg" alt="" />
```

#### Note on SEO

Search engines also make use of alternative text to understand the content of a page. For years, SEO shops have suggested stuffing keywords in alt attributes to improve rankings. This provides a very bad accessibility experience.

### Captions for audio and video

Screen readers can't read audio or video content, use a captioning service to add closed captioning.

```html
<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mp3" />
  <track src="captions.vtt" kind="captions" srclang="en" label="English" />
</audio>

<!-- Video -->
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track src="captions.vtt" kind="captions" srclang="en" label="English" />
</video>
```
