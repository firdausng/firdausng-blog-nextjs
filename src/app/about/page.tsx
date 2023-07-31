import fs from "fs";
import matter from "gray-matter";
import {remark} from "remark";
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify'
import path from 'path';
import MarkdownViewer from "@/components/markdown-viewer";

export default async function Home() {
    const {content, title} = await getAboutPageData();
    return (
        <>
            <div className={'mb-4 px-8 py-2 shadow-lg shadow-slate-500/30 flex lg:flex-col gap-16 justify-center'}>
                <div className={'flex flex-col justify-center'}>
                    <h1 className={'text-5xl p-2 font-semibold uppercase text-center shadow-lg shadow-slate-500/20 border border-slate-500'}>{title}</h1>
                </div>
                <div className={"max-w-3xl lg:max-w-max"}>
                    <MarkdownViewer content={content!} />
                </div>

            </div>
        </>
    )
}

const aboutDirectory = path.join(process.cwd(), 'src', 'app', 'about');
async function getAboutPageData() {
    // Get file names under /posts
    // Read markdown file as string
    const fullPath = path.join(aboutDirectory, 'about.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(remarkRehype)
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
    // Sort posts by date
    return blogPost;
}