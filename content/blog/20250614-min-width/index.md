+++
title = "Using min-width instead of max-width for a mobile-first approach"
date = 2025-06-14
updated = 2025-06-14
description = "I learned that using min-width is better than max-width for a mobile-first approach"

[taxonomies]
tags = ["Front-end", "CSS"]

[extra]
footnote_backlinks = true
+++

Last week, while working on a project on Frontend Mentor, I learned about the benefits of using `min-width` instead of `max-width` for a mobile-first approach.

<div style="position: relative; padding-bottom: 74.44%; /* 431 / 579 */ height: 0; overflow: hidden; max-width: 100%; height: auto; margin: 1.5em 0; border-radius: 6px;">
    <iframe
        src="./min-width-animation.html"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
        allowfullscreen
        allowtransparency="true"
        title="Lottie animation illustrating min-width media query">
    </iframe>
</div>

The advantages of using `min-width` over `max-width` are:

- The base CSS is applied to mobile devices and then, as the viewport grows, you can overwrite the styles for larger screens.
- Mobile devices only download the CSS they need, without unnecessary rules, which improves performance.
- It's easier to add new breakpoints for larger screens.

For example, if you have this media query:

```css
@media (max-width: 23rem) {
  :root {
    font-size: 0.6rem;
  }
}
```

You can adapt by first defining the base size for mobiles (outside of the media query in the base CSS) and then use the min-width to increase the size in bigger screens:

```css
:root {
  font-size: 0.6rem;
}

@media (min-width: 23rem) {
  :root {
    font-size: 1rem;
  }
}
```

So now mobile devices use 0.6rem and larger devices use 1rem.

Note: this is a simple example. If you only need to change the text size depending on the screen size, you can use the clamp CSS function instead of using media queries.
