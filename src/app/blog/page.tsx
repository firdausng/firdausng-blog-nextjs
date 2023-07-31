import {getSortedPostsData} from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import {oswald} from "@/app/fonts";
import Logo from "@/components/logo";

const Blog = async () =>{
    const allPostsData = await getSortedPostsData();
    return (
        <div className={'flex flex-col mx-2 gap-3'}>
            {allPostsData.map(post =>(
                <div key={post.slug} className={'p-2 hover:shadow-lg border-2 border-slate-500 dark:border-slate-50 rounded-3xl shadow-lg shadow-slate-700/20 dark:shadow-slate-50/20'}>
                    <div className={'flex gap-3 divide-x'} >
                        <div className={'w-64 mr-3 p-2 flex-none'}>
                            {post.bannerImageExtension
                                ? <Image
                                    className="object-cover h-48 w-full border-1 border-slate-500 dark:border-slate-50 rounded-3xl shadow-lg shadow-slate-700/20 dark:shadow-slate-50/20"
                                    src={ post.bannerImageExtension ? `/${post.slug}.${post.bannerImageExtension}` : '/firdausng_logo.png'}
                                    alt={post.title}
                                    width={500}
                                    height={500}
                                />
                                : <div className={""}>
                                    <Logo />
                                </div>
                            }

                        </div>
                        <div className={'flex flex-col pl-8 gap-3 justify-center'}>
                            <div>
                                <h1 className={`text-lg font-bold text-slate-600 dark:text-white`}>{post.title}</h1>
                                <p className={`text-slate-800/50 dark:text-slate-50/50 ${oswald.className}`}>{post.date}</p>
                            </div>
                            <div className={'grow'}>
                                {post.excerpt}
                            </div>
                            <div className={'flex my-3 gap-3'}>
                                <Link href={`/blog/${post.slug}`} className={'p-3 text-white-600 bg-slate-200 dark:bg-slate-700 rounded-lg border-2 border-slate-400 shadow-md shadow-slate-600/50 dark:shadow-slate-50/50'}>More..</Link>
                            </div>

                        </div>
                    </div>
                </div>

            ))}

        </div>
    )
}
export default Blog