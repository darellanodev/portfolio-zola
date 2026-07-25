---
description: Create a blog post with an embedded YouTube video
---

Use the "create-blog-post" skill to create a new blog post for my blog. Follow these steps:

1. **Read the source material** from `tmp-post.txt` in the project root. This contains the base content for the post.

2. **Today's date** is !`date +%Y-%m-%d`. Use it for the frontmatter `date` and `updated` fields, and format the directory name as `YYYYMMDD`.

3. **Language**: Write the post in simple English (clear, easy to follow).

4. **Structure**: Follow the same structure as recent posts in `content/blog/`. Look at the most recent 2-3 posts for reference on:
   - Frontmatter format (TOML with title, date, updated, description, tags, extra)
   - Writing style and tone
   - Heading style (sentence case)
   - How the post ends with a Video section

5. **Tags**: Reuse existing tags from recent posts when possible. Check `content/blog/` for the tag list.

6. **Video section**: Every post ends with a YouTube video embed. Add this section at the bottom:

   ```
   ## Video

   In the following video you can see the complete process (Spanish audio).

   {{ youtube_embed(video_id="YOUTUBE_VIDEO_ID_HERE") }}
   ```

   If the YouTube video ID is available in `tmp-post.txt`, use it. If not, leave a placeholder comment and let me know.

7. **Image**: If the post topic has a relevant screenshot or image referenced in `tmp-post.txt`, include it as `![alt-text](./image-name.png)` near the top, after the first paragraph.

8. **Missing elements**: If `tmp-post.txt` is missing any key information (title, video ID, images, etc.), ask me before creating the post.
