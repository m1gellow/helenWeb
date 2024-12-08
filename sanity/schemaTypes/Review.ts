import { Rule } from "sanity";

export const Review = {
    name: "review",
    title: "review",
    type: "document",
    fields:[  
        {
            name: "name",
            title: "Name of the client",
            type: "string", 
            require,
            validation: (Rule: Rule) => Rule.required()  
        },
        {
            name:"photo",
            title: "Photo of the client",
            type: "image",
        },
        {
            name: "reviewContent",
            title: "Content of the review",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },

    ]
}