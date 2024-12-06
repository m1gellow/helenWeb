import { Rule } from "sanity"

export const Skills = {
    name: "skills",
    title: "skills",
    type: "document",
    fields:[
        {
            name: "sectionTitle",
            title: "Section Title of the skills section",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "sectionDescription",
            title: "SectionDescription of the skills section",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "skillsImage",
            title: "Image for the skills section",
            type: "image",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "title",
            title: "MainTitle for skills section with info about you",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "description",
            title: "MainDescription for skills section with info about you",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "Button",
            title: "Button for the skills section",
            type: "string",
            options:{
                list: ["Связаться", "Контакты", "Связаться со мной"]
            }
        },
        {
          name: "skillsCards",
          title: "An Array of Cards of Skills",
          type: "array",
          of:[
            {
              type: "reference",
              to: [{type: "skillCard"}]
            }
          ]
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

