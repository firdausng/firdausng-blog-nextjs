export default function MarkdownViewer({content}: {content:string}){
    return (
        <>
            <article className={"prose prose-lg prose-slate dark:prose-invert max-w-none  prose-a:text-sky-600 prose-a:no-underline dark:prose-a:text-sky-300"}>
                <section dangerouslySetInnerHTML={{ __html: content! }} />
            </article>
        </>
    )
}