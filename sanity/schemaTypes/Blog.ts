export const Blog = {
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title of the blog posts"
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug of the blog",
            options: {
                source: "title"
            }
        },
        {
            name: "timeOfReading",
            type: "string",
            title: "Time of Reading blog post"
        },
        {
            name: "titleImages",
            type: "array",
            title: "Images of the blog post",
            of:[
                {
                    type: "image",
                    options:{
                        hotspot: true
                    }
                }
            ] 
        },
        {
            name: "smallDescription",
            type: "text",
            title: "Small Description of blog post"
        },
        {
            name: "content",
            type: "array",
            title: "Content",
            of: [
                {
                    type: 'block'
                }
            ]
        },
    ]
}
