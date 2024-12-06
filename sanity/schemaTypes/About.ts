import { Rule} from "sanity"

export const About = {
    name: "about",
    title: "about",
    type: "document",
    fields:[
        {
            name: "sectionTitle",
            title: "SctionTitle of the about section",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "sectionDescription",
            title: "SectionDescription of the about section",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "aboutImage",
            title: "Image for the about section",
            type: "image",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "title",
            title: "MainTitle for about section with info about you",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "description",
            title: "MainDescription for about section with info about you",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "aboutButton",
            title: "Button for the about section",
            type: "string",
            options:{
                list: ["Связаться", "Контакты", "Связаться со мной"]
            }
        },
        {
            name: "ButtonLink",
            title: "Link for Button",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },

    ]
}

