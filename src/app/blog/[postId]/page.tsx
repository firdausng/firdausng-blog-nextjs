import {getPostsDataBySlug, getSortedPostsData, getSortedPostsDataWithContent} from "@/lib/posts";
import BlogComment from "@/components/comment";
import MarkdownViewer from "@/components/markdown-viewer";

export async function generateStaticParams(){
    const data = await getSortedPostsDataWithContent();
    return data.map(d => (
        {
            postId: d.slug
        }
    ));
}

interface ProjectPageProps {
    params: {
        postId: string;
    };
}

export default async function BlogDetail(props: ProjectPageProps){
    const {postId} = props.params;
    const data = await getPostsDataBySlug(postId);
    return (
        <>
            <div className={'mb-4 px-8 bg-slate-50 dark:bg-slate-800 py-2 shadow-lg shadow-slate-200/20 dark:shadow-slate-500/20 border border-slate-200 dark:border-slate-800 relative'}>
                <div className={'flex justify-center sticky top-0 left-0 right-0 bg-white dark:bg-slate-800'}>
                    <a href={'#'}>
                        <h1 className={'text-3xl p-2'}>{data.title}</h1>
                    </a>

                </div>
                <MarkdownViewer content={data.content!} />
                <BlogComment term={data.title} />
            </div>
        </>
    )
}

