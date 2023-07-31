import {getPostsDataBySlug, getSortedPostsDataWithContent} from "@/lib/posts";
import BlogComment from "@/components/comment";
import MarkdownViewer from "@/components/markdown-viewer";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from 'next'

export async function generateStaticParams(){
    const data = await getSortedPostsDataWithContent();
    return data.map(d => (
        {
            postId: d.slug
        }
    ));
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const postId = params.postId

    // fetch data
    const data = await getPostsDataBySlug(postId);

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []

    return {
        title: data?.title,
        description: data?.excerpt
        // openGraph: {
        //     images: ['/some-specific-page-image.jpg', ...previousImages],
        // },
    }
}

interface Props {
    params: {
        postId: string;
    }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function BlogDetail(props: Props){
    const {postId} = props.params;
    const data = await getPostsDataBySlug(postId);
    if(data === null){
        return <NotFoundSection />
    }

    if(data.draft){
        return <NotFoundSection />
    }

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

function NotFoundSection(){
    return (
        <>
            <div className={'flex flex-col justify-center items-center gap-4 m-8 p-16 bg-slate-50 dark:bg-slate-800 shadow-lg shadow-slate-200/20 dark:shadow-slate-500/20 border border-slate-200 dark:border-slate-800'}>
                <h1 className={"text-4xl text-red-500"}>404 Not Found</h1>
                <p>Page you looking for not exists</p>
                <div className={'flex gap-3'}>
                    <Link className={'text-sky-400'} href={'/'}>Home</Link>
                    <Link className={'text-sky-400'} href={'/blog'}>Blog</Link>
                </div>

            </div>
        </>
    )
}