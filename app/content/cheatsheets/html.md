---
title: HTML
description: HTML tags, attributes, forms, and semantic markup
category: Markup Language
---

# HTML Cheatsheet

## Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <meta name="description" content="Page description">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Content goes here -->
  <script src="script.js"></script>
</body>
</html>
```

## Text Elements

### Headings
```html
<h1>Heading 1 (Largest)</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 (Smallest)</h6>
```

### Paragraphs & Text
```html
<p>Paragraph of text</p>
<br>              <!-- Line break -->
<hr>              <!-- Horizontal rule -->
<strong>Bold</strong>  <!-- Important text -->
<b>Bold</b>            <!-- Just bold -->
<em>Italic</em>        <!-- Emphasized text -->
<i>Italic</i>          <!-- Just italic -->
<mark>Highlighted</mark>
<small>Small text</small>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>
<code>Inline code</code>
<pre>Preformatted text</pre>
<blockquote>Quote</blockquote>
```

## Lists

### Unordered List
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Ordered List
```html
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>

<!-- With custom start/type -->
<ol start="5" type="a">
  <li>Item A</li>
  <li>Item B</li>
</ol>
```

### Description List
```html
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
  <dt>Another Term</dt>
  <dd>Another definition</dd>
</dl>
```

## Links

```html
<a href="https://example.com">Link text</a>
<a href="page.html">Relative link</a>
<a href="#section">Anchor link</a>
<a href="mailto:email@example.com">Email link</a>
<a href="tel:+1234567890">Phone link</a>
<a href="file.pdf" download>Download link</a>
<a href="#" target="_blank">Open in new tab</a>
```

## Images

```html
<img src="image.jpg" alt="Description">
<img src="image.jpg" alt="Description" width="200" height="150">
<img src="image.jpg" alt="Description" loading="lazy">

<!-- Picture with multiple sources -->
<picture>
  <source media="(max-width: 768px)" srcset="mobile.jpg">
  <source media="(min-width: 769px)" srcset="desktop.jpg">
  <img src="fallback.jpg" alt="Description">
</picture>

<!-- Image map -->
<img src="image.jpg" usemap="#mapname" alt="Description">
<map name="mapname">
  <area shape="rect" coords="0,0,100,100" href="link.html">
  <area shape="circle" coords="50,50,50" href="link.html">
</map>
```

## Tables

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
    <tr>
      <td>Data 3</td>
      <td>Data 4</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Footer 1</th>
      <th>Footer 2</th>
    </tr>
  </tfoot>
</table>

<!-- Table attributes -->
<table border="1" cellpadding="10" cellspacing="2">
  <tr>
    <td colspan="2">Spans 2 columns</td>
  </tr>
  <tr>
    <td rowspan="2">Spans 2 rows</td>
    <td>Data</td>
  </tr>
  <tr>
    <td>Data</td>
  </tr>
</table>
```

## Forms

### Basic Form
```html
<form action="/submit" method="POST">
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>
```

### Input Types
```html
<input type="text" name="name">          <!-- Text -->
<input type="email" name="email">        <!-- Email -->
<input type="password" name="password">  <!-- Password -->
<input type="number" name="age">         <!-- Number -->
<input type="date" name="date">          <!-- Date picker -->
<input type="time" name="time">          <!-- Time picker -->
<input type="color" name="color">        <!-- Color picker -->
<input type="file" name="file">          <!-- File upload -->
<input type="checkbox" name="agree">     <!-- Checkbox -->
<input type="radio" name="gender" value="male">      <!-- Radio button -->
<input type="range" name="volume" min="0" max="100"> <!-- Slider -->
<input type="search" name="q">           <!-- Search -->
<input type="tel" name="phone">          <!-- Telephone -->
<input type="url" name="website">        <!-- URL -->
<input type="hidden" name="id" value="1"><!-- Hidden -->
<input type="button" value="Click me">   <!-- Button -->
<input type="submit" value="Submit">     <!-- Submit button -->
<input type="reset" value="Reset">       <!-- Reset button -->
```

### Form Elements
```html
<label for="username">Username:</label>
<input id="username" type="text" name="username">

<select name="country">
  <option value="">Select country</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>

<textarea name="message" rows="5" cols="50"></textarea>

<fieldset>
  <legend>Personal Information</legend>
  <!-- Form elements -->
</fieldset>

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
</datalist>
<input list="browsers" name="browser">
```

### Form Attributes
```html
<form method="POST" action="/submit" enctype="multipart/form-data">
  <input required>                  <!-- Required field -->
  <input disabled>                  <!-- Disabled field -->
  <input readonly>                  <!-- Read-only field -->
  <input pattern="[0-9]{3}">        <!-- Pattern validation -->
  <input minlength="5" maxlength="20"> <!-- Length validation -->
  <input min="0" max="100">         <!-- Min/max value -->
  <input autocomplete="email">      <!-- Autocomplete hint -->
  <input autofocus>                 <!-- Auto focus on load -->
  <input placeholder="Enter text">  <!-- Placeholder text -->
  <input value="Default value">     <!-- Default value -->
</form>
```

## Semantic HTML

```html
<header>Header content</header>
<nav>Navigation links</nav>
<main>Main content</main>
<article>Article content</article>
<section>Section of content</section>
<aside>Sidebar content</aside>
<footer>Footer content</footer>

<figure>
  <img src="image.jpg" alt="Description">
  <figcaption>Image caption</figcaption>
</figure>

<time datetime="2024-01-01">January 1, 2024</time>
<address>Contact information</address>
<details>
  <summary>Click to expand</summary>
  Hidden content
</details>
```

## Meta Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Page description">
<meta name="keywords" content="keyword1, keyword2">
<meta name="author" content="Author name">
<meta name="robots" content="index, follow">
<meta http-equiv="refresh" content="30">
<meta property="og:title" content="Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="image.jpg">
```

## Icons & Stylesheets

```html
<link rel="icon" href="favicon.ico">
<link rel="stylesheet" href="style.css">
<style>
  /* CSS here */
</style>
<script src="script.js"></script>
<script>
  // JavaScript here
</script>
```

## Media

### Audio
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support audio.
</audio>

<audio controls autoplay muted loop></audio>
```

### Video
```html
<video controls width="400" height="300">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support video.
</video>

<video controls autoplay muted loop></video>
```

### Embedded Content
```html
<iframe src="page.html" width="400" height="300"></iframe>
<embed src="document.pdf">
<object data="image.svg" type="image/svg+xml"></object>
```

## Global Attributes

```html
id="unique-id"                    <!-- Unique identifier -->
class="class-name"                <!-- CSS class -->
style="color: red;"               <!-- Inline CSS -->
title="Tooltip text"              <!-- Tooltip -->
data-value="custom"               <!-- Custom data attribute -->
hidden                            <!-- Hide element -->
contenteditable="true"            <!-- Make editable -->
spellcheck="false"                <!-- Disable spellcheck -->
lang="en"                         <!-- Language -->
dir="rtl"                         <!-- Text direction -->
tabindex="1"                      <!-- Tab order -->
aria-label="Accessibility label"  <!-- Accessibility -->
```

## Common HTML Patterns

### Navigation Bar
```html
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

### Card Component
```html
<article class="card">
  <img src="image.jpg" alt="Description">
  <h2>Title</h2>
  <p>Description</p>
  <a href="#">Learn more</a>
</article>
```

### Login Form
```html
<form method="POST" action="/login">
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
  </div>
  <button type="submit">Login</button>
</form>
```

## Common Mistakes

| ❌ Mistake | ✅ Fix |
|-----------|--------|
| Missing `alt` attributes on images | Always provide meaningful alt text for accessibility |
| Not closing tags properly | Use self-closing tags: `<img>`, `<br>`, `<hr>` |
| Using wrong semantic tags | Use `<header>`, `<nav>`, `<main>`, `<footer>`, not just `<div>` |
| Not including viewport meta tag | Always use: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| Forgetting label association | Link labels: `<label for="id">Text</label><input id="id">` |
| Missing DOCTYPE | Always start with: `<!DOCTYPE html>` |
| Using deprecated tags | Don't use: `<marquee>`, `<blink>`, `<center>` |
| Not validating form inputs | Use `required`, `type="email"`, `pattern` for client-side validation |

## Quick Reference

| Element | Purpose |
|---------|---------|
| `<header>` | Page header / site header |
| `<nav>` | Navigation links |
| `<main>` | Main content area |
| `<article>` | Independent content |
| `<section>` | Grouped content |
| `<aside>` | Sidebar / supplementary |
| `<footer>` | Page footer |
| `<form>` | User input form |
| `<input>` | Form input field |
| `<button>` | Clickable button |
| `<a>` | Hyperlink |
| `<img>` | Image element |
| `<table>` | Data table |
| `<ul>` | Unordered list |
| `<ol>` | Ordered list |

## Summary

HTML is the **foundation of all web pages**. Structure content properly using semantic tags, ensure accessibility, and validate forms for user input.

Key principles:
- **Semantic markup** - use meaningful tags
- **Accessibility** - alt text, labels, proper structure
- **Validation** - use HTML5 input validation
- **Mobile-friendly** - include viewport meta tag
- **Clean structure** - proper nesting and organization
