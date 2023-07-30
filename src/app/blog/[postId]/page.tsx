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
            <div className={'mb-4 px-8 py-2 shadow-lg shadow-slate-500/30'}>
                <div className={'flex justify-center'}>
                    <h1 className={'text-3xl p-2 '}>{data.title}</h1>
                </div>
                <MarkdownViewer content={data.content!} />
                <BlogComment term={data.title} />
            </div>
        </>
    )
}

