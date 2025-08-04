+++
title = "Using CSS logical properties"
date = 2025-08-04
updated = 2025-08-04
description = "While practicing my front-end skills I learned a bit about CSS logical properties"

[taxonomies]
tags = ["Front-end", "CSS"]

[extra]
footnote_backlinks = true
+++

I recently learned about CSS logical properties, which have been a game changer for me in designing web pages that are more accessible and scalable.

<!-- Lottie animation (no iframe, local script, background transparent) -->
<script src="/lottie-player.js"></script>
<div style="display: flex; justify-content: center; margin: 1.5em 0;">
  <lottie-player
    src="css-logical-properties.json"
    background="transparent"
    speed="1"
    style="width: 400px; max-width: 100%; height: auto; border-radius: 6px;"
    loop
    autoplay
    title="Lottie animation illustrating css-logical-properties media query">
  </lottie-player>
</div>

In the past, I used CSS physical properties (e.g., margin-top, padding-left) to set margins and paddings in my web projects. This approach works well for languages that read left to right but is not ideal for languages that read right to left or use vertical writing modes. CSS logical properties, instead, reference the writing flow rather than fixed physical directions on the screen.

For example, consider this CSS class from one of my front-end projects:

```css
.blog-card__date {
  font-size: var(--size-text-date);
  margin-top: -0.5rem;
}
```

However, I can use a CSS logical property instead of margin-top. Here is the equivalent using margin-block-start:

```css
.blog-card__date {
  font-size: var(--size-text-date);
  margin-block-start: -0.5rem;
}
```

The advantage of using margin-block-start over margin-top is that layouts become more adaptable to different writing systems, including traditional Japanese vertical text, making internationalization and scalability for multiple languages easier.

Here is another example, this time for Arabic. Suppose I have this CSS class:

```css
.blog-card__description {
  font-size: var(--size-text-description);
  margin-block-start: 1rem;
}
```

In languages written left to right, the margin is applied to the left side, while in right-to-left languages like Arabic, the margin will be applied on the right side. This happens because the logical property adapts to the reading direction, rather than the fixed physical side.

Here's a concise and easy-to-remember table of CSS logical properties and their physical equivalents:

Note: LTR (Left To Right), RTL (Right To Left)

| Physical (Classic)       | Logical                                        | Context                                                                 |
| ------------------------ | ---------------------------------------------- | ----------------------------------------------------------------------- |
| top / bottom             | block-start / block-end                        | Block axis (vertical in LTR/RTL, horizontal in vertical writing modes)  |
| left / right             | inline-start / inline-end                      | Inline axis (horizontal in LTR/RTL, vertical in vertical writing modes) |
| width / height           | inline-size / block-size                       | Size along the respective axis                                          |
| margin, padding, border- | margin / padding / border-block-\* / inline-\* | Used for top/bottom (block) or left/right (inline) sides respectively   |

So, for example:

- margin-block-start corresponds to margin-top in standard horizontal text flow (LTR/RTL).
- margin-block-end corresponds to margin-bottom.
- margin-inline-start corresponds to margin-left in LTR, but margin-right in RTL.
- margin-inline-end corresponds to margin-right in LTR, but margin-left in RTL.

This logic also applies to padding and border properties.

**Quick keys to remember:**

- **block-\*** = top/bottom or start/end of block flow
- **inline-\*** = left/right or start/end of inline flow
- **-start** = start (top or left depending on flow)
- **-end** = end (bottom or right depending on flow)

This means anything related to 'top/bottom' or 'height' uses block-\* properties, while anything related to 'left/right' or 'width' uses inline-\* properties, automatically adapting to the text direction.
