type BlogPost = {
    slug: string,
    title: string,
    date: string,
    tags: string[]
    bannerImageExtension: ?string
    draft: boolean
    content: ?string
    excerpt: string
}