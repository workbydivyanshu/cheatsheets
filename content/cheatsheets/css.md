---
title: CSS
description: CSS selectors, properties, flexbox, grid, and animations
category: Markup Language
---

# CSS Cheatsheet

## Selectors

### Basic Selectors
```css
* {}                    /* Universal selector */
element {}              /* Element selector */
#id {}                  /* ID selector */
.class {}               /* Class selector */
element.class {}        /* Element with class */
```

### Combinators
```css
ancestor descendant {}  /* Descendant combinator */
parent > child {}       /* Child combinator */
element + element {}    /* Adjacent sibling */
element ~ element {}    /* General sibling */
```

### Attribute Selectors
```css
[attribute] {}
[attribute="value"] {}
[attribute~="value"] {} /* Contains word */
[attribute|="value"] {} /* Starts with */
[attribute^="value"] {} /* Starts with */
[attribute$="value"] {} /* Ends with */
[attribute*="value"] {} /* Contains */
```

### Pseudo-classes
```css
:hover {}               /* Mouse hover */
:active {}              /* Active/clicked */
:focus {}               /* Has focus */
:visited {}             /* Visited link */
:link {}                /* Unvisited link */
:first-child {}         /* First child */
:last-child {}          /* Last child */
:nth-child(n) {}        /* nth child */
:nth-of-type(n) {}      /* nth of type */
:only-child {}          /* Only child */
:empty {}               /* Empty element */
:not(selector) {}       /* Not selector */
:disabled {}            /* Disabled element */
:enabled {}             /* Enabled element */
:checked {}             /* Checked input */
```

### Pseudo-elements
```css
::before {}             /* Before content */
::after {}              /* After content */
::first-line {}         /* First line */
::first-letter {}       /* First letter */
::selection {}          /* Selected text */
::placeholder {}        /* Placeholder text */
::backdrop {}           /* Backdrop */
```

## Box Model

```css
margin: 10px;           /* All sides */
margin: 10px 20px;      /* Top/bottom, left/right */
margin: 10px 20px 30px; /* Top, left/right, bottom */
margin: 10px 20px 30px 40px; /* Top, right, bottom, left */
margin-top: 10px;
margin-right: 10px;
margin-bottom: 10px;
margin-left: 10px;

padding: 10px;          /* Same syntax as margin */
border: 1px solid black;
border-width: 1px;
border-style: solid;
border-color: black;
border-radius: 5px;
```

## Display & Layout

```css
display: block;         /* Block element */
display: inline;        /* Inline element */
display: inline-block;  /* Inline block */
display: none;          /* Hide element */
display: flex;          /* Flexbox layout */
display: grid;          /* Grid layout */
display: table;
display: list-item;
visibility: hidden;     /* Hide but take space */
opacity: 0.5;           /* Transparency */
```

## Positioning

```css
position: static;       /* Default */
position: relative;     /* Relative to normal flow */
position: absolute;     /* Absolute positioning */
position: fixed;        /* Fixed to viewport */
position: sticky;       /* Sticky positioning */

top: 10px;
right: 10px;
bottom: 10px;
left: 10px;
z-index: 10;            /* Stacking order */
```

## Flexbox

```css
display: flex;

/* Container properties */
flex-direction: row;                /* row, column, row-reverse, column-reverse */
flex-wrap: wrap;                    /* nowrap, wrap, wrap-reverse */
justify-content: center;            /* flex-start, flex-end, center, space-between, space-around, space-evenly */
align-items: center;                /* flex-start, flex-end, center, stretch, baseline */
align-content: center;              /* flex-start, flex-end, center, stretch, space-between, space-around */
gap: 10px;                          /* Gap between items */
row-gap: 10px;
column-gap: 10px;

/* Item properties */
flex: 1;                            /* Shorthand */
flex-grow: 1;                       /* Growth factor */
flex-shrink: 1;                     /* Shrink factor */
flex-basis: 200px;                  /* Base size */
align-self: center;                 /* Override align-items */
order: 1;                           /* Change order */
```

## Grid

```css
display: grid;

/* Container properties */
grid-template-columns: 1fr 2fr 1fr;
grid-template-columns: repeat(3, 1fr);
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-template-rows: 100px auto 100px;
gap: 10px;
row-gap: 10px;
column-gap: 10px;
justify-items: center;              /* Align items horizontally */
align-items: center;                /* Align items vertically */
justify-content: center;            /* Align grid horizontally */
align-content: center;              /* Align grid vertically */

/* Item properties */
grid-column: 1 / 3;                 /* Column span */
grid-column-start: 1;
grid-column-end: 3;
grid-row: 1 / 2;                    /* Row span */
grid-row-start: 1;
grid-row-end: 2;
grid-area: 1 / 1 / 2 / 3;           /* row-start / col-start / row-end / col-end */
justify-self: center;
align-self: center;
```

## Text & Font

```css
color: #333;
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: normal;                /* 100-900, bold, lighter, normal */
font-style: italic;                 /* normal, italic, oblique */
line-height: 1.5;
letter-spacing: 2px;
word-spacing: 5px;
text-align: left;                   /* left, right, center, justify */
text-decoration: underline;         /* none, underline, overline, line-through */
text-transform: uppercase;          /* uppercase, lowercase, capitalize */
text-indent: 20px;
text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
word-wrap: break-word;
word-break: break-all;
white-space: nowrap;                /* normal, nowrap, pre */
```

## Colors & Backgrounds

```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.5);

background-color: red;
background-image: url('image.jpg');
background-size: cover;             /* cover, contain, 100% */
background-position: center;        /* top, bottom, left, right, center */
background-repeat: no-repeat;       /* repeat, repeat-x, repeat-y, no-repeat */
background-attachment: fixed;      /* scroll, fixed */
background: url('img.jpg') center/cover no-repeat;

background-gradient: linear-gradient(to right, red, blue);
background: linear-gradient(45deg, red, blue);
background: radial-gradient(circle, red, blue);
```

## Borders & Shadows

```css
border: 1px solid black;
border-width: 1px;
border-style: solid;                /* solid, dashed, dotted, double, groove, ridge, inset, outset */
border-color: black;
border-radius: 5px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;

box-shadow: 2px 2px 4px rgba(0,0,0,0.3);  /* offset-x, offset-y, blur-radius, spread-radius, color */
text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
```

## Sizing

```css
width: 100px;
height: 100px;
max-width: 100%;
min-width: 100px;
max-height: 100%;
min-height: 100px;
```

## Overflow

```css
overflow: visible;      /* visible, hidden, scroll, auto */
overflow-x: auto;
overflow-y: auto;
text-overflow: ellipsis;
white-space: nowrap;
```

## Transforms

```css
transform: translate(10px, 20px);   /* Move */
transform: rotate(45deg);           /* Rotate */
transform: scale(1.5);              /* Scale */
transform: scaleX(1.5);
transform: scaleY(1.5);
transform: skew(10deg, 20deg);      /* Skew */
transform: perspective(500px);
transform: matrix(1, 0, 0, 1, 0, 0);

transform-origin: center;
transform-style: preserve-3d;
```

## Transitions

```css
transition: all 0.3s ease;
transition-property: background-color;
transition-duration: 0.3s;
transition-timing-function: ease;  /* ease, linear, ease-in, ease-out, ease-in-out */
transition-delay: 0.1s;
```

## Animations

```css
animation: slidein 0.5s ease-in;
animation-name: slidein;
animation-duration: 0.5s;
animation-timing-function: ease;
animation-delay: 0.1s;
animation-iteration-count: infinite;  /* number or infinite */
animation-direction: normal;        /* normal, reverse, alternate, alternate-reverse */
animation-fill-mode: forwards;      /* none, forwards, backwards, both */

@keyframes slidein {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

@keyframes slidein {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
```

## Filters

```css
filter: blur(5px);
filter: brightness(150%);
filter: contrast(150%);
filter: grayscale(100%);
filter: hue-rotate(90deg);
filter: invert(100%);
filter: opacity(50%);
filter: saturate(150%);
filter: sepia(100%);
filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));
```

## Responsive Design

```css
/* Media queries */
@media (max-width: 768px) {
  /* Mobile styles */
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (min-width: 1025px) {
  /* Desktop styles */
}

@media (orientation: landscape) {
  /* Landscape */
}

@media (prefers-color-scheme: dark) {
  /* Dark mode */
}
```

## Units

```css
px          /* Pixels */
em          /* Relative to font-size */
rem         /* Relative to root font-size */
%           /* Percentage */
vw          /* Viewport width */
vh          /* Viewport height */
vmin        /* Viewport min dimension */
vmax        /* Viewport max dimension */
pt          /* Points */
cm          /* Centimeters */
mm          /* Millimeters */
in          /* Inches */
```

## Useful Properties

```css
cursor: pointer;        /* pointer, default, text, wait, help */
user-select: none;      /* Control text selection */
pointer-events: none;   /* Disable mouse events */
will-change: transform; /* Performance hint */
backface-visibility: hidden;

@supports (display: flex) {
  /* Fallback */
}

@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
}
```
