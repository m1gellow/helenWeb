import { Rule } from "sanity"

const header = {
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
      
    ]
}

export default header