import { Rule } from "sanity"

export const Header = {
    name: "header",
    title: "header",
    type: "document",
    fields:[  
        {
            name: "greeting",
            title: "Greeting",
            type: "string",   
        },
        {
            name: "title",
            title: "Title",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "headerDescription",
            title: "Description of the Header",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "mainButtonText",
            title: "Text of the main  Button",
            type: "string",
            options:{
                list: ["Связаться", "Контакты", "Связаться со мной"]
            }
        },
        {
            name: "secondaryButtonText",
            title: "Text of the secondary  Button",
            type: "string",            
            options:{
                list: ["Блог", "Мой блог", "Новости", "Читать", "Читать блог"]
            }
        },
        {
            name: "headerImage",
            title: "Image of the header",
            type: "image",
            validation: (Rule: Rule) => Rule.required(),
            options:{
                hotspot: true,
            }
        }
    ]
}
