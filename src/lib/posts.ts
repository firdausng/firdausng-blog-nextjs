import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkToc from 'remark-toc'
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsDataPromises = fileNames.map(async(fileName) => {
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName, 'index.md');
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const blogPost:BlogPost = {
            slug:matterResult.data.slug,
            title: matterResult.data.title,
            date: matterResult.data.date,
            tags: matterResult.data.tags ?? [],
            draft: matterResult.data.draft ?? true,
            bannerImageExtension:matterResult.data.bannerImageExtension ?? null,
            content: null,
            excerpt: matterResult.data.excerpt ?? ''
        };

        // Combine the data with the id
        return blogPost;
    });
    const allPostsData = await Promise.all(allPostsDataPromises);
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}


export async function getSortedPostsDataWithContent() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsDataPromises = fileNames.map(async(fileName) => {
        // Remove ".md" from file name to get id
        // const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName, 'index.md');
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const processedContent = await remark()
            .use(remarkToc)
            .use(remarkRehype)
            .use(rehypeSlug)
            .use(rehypeStringify)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();

        const blogPost:BlogPost = {
            slug:matterResult.data.slug,
            title: matterResult.data.title,
            date: matterResult.data.date,
            tags: matterResult.data.tags ?? [],
            draft: matterResult.data.draft ?? true,
            bannerImageExtension:matterResult.data.bannerImageExtension ?? null,
            excerpt: matterResult.data.excerpt ?? '',
            content: contentHtml
        };

        // Combine the data with the id
        return blogPost;
    });
    const allPostsData = await Promise.all(allPostsDataPromises);
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostsDataBySlug(slug: string) {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, slug, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(remarkToc)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeStringify)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    console.log()

    const blogPost:BlogPost = {
        slug:matterResult.data.slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        tags: matterResult.data.tags ?? [],
        draft: matterResult.data.draft ?? true,
        bannerImageExtension:matterResult.data.bannerImageExtension ?? null,
        excerpt: matterResult.data.excerpt ?? '',
        content: contentHtml
    };
    // Sort posts by date
    return blogPost;
}