---
name: create-blog-post
description: Create a new blog post for a Zola static site following the existing blog structure
compatibility: opencode
metadata:
  audience: developer
  workflow: content
---

## What I do

Create a new blog post directory and index.md file following the existing blog structure in `content/blog/`.

## When to use me

Use this when you need to create a new blog post. The user will provide:

- The title of the post (in English)
- The content/text for the post

## How to create a post

1. **Get the current date** from the system and format it as `YYYYMMDD` (e.g., 20260328 for March 28, 2026)

2. **Keep the title short**: Use 5-6 words maximum. The title should be concise but descriptive.

3. **Convert the title to kebab-case**: Replace spaces with hyphens, lowercase all letters

   - Example: "Remove files in Git" → "remove-files-in-git"

4. **Create the directory**: `content/blog/<YYYYMMDD>-<kebab-case-title>`

   - Example: `content/blog/20260328-remove-files-in-git`

5. **Reference the template**: Look at `content/blog/20250308-synchronize-branches/index.md` for the structure

6. **Create index.md** with this frontmatter:

   ```toml
   +++
   title = "<Title in English>"
   date = <YYYY-MM-DD>
   updated = <YYYY-MM-DD>
   description = "<A brief description of the post>"

   [taxonomies]
   tags = ["<relevant tags>"]

   [extra]
   footnote_backlinks = true
   +++

   <Content here>
   ```

7. **Choose tags**: First, look at existing blog posts in `content/blog/` to find what tags are already used. Reuse existing tags when possible, or create new ones only if needed for new topics.

8. **Add any images** if needed in the same directory (check if the template has images to include)

## Important notes

- All post titles and the content should be in English
- **Capitalize only the first word in headings**: Use sentence case (e.g., "## The problem", "## What happens to the remote repository", "## Conclusion")
- The title in the directory name should be short (5-6 words maximum)
- The directory name must be kebab-case (lowercase with hyphens)
- The date in frontmatter must match the directory date
- Check existing tags in other posts before adding new ones
- If there are images in the reference template directory, check if you need to add similar images

## Ask the user for

If the user hasn't provided the content/text for the post, ask them to provide it before creating the file.
