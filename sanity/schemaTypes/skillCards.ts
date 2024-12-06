import { Rule } from "sanity"

export const SkillCard = {
    name: "skillCard",
    title: "skillCard",
    type: "document",
    fields:[
        {
            name: "CardTitle",
            title: "CardTitle of skills card",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: "CardDescription",
            title: "CardDescription of skills card",
            type: "string",
            require,
            validation: (Rule: Rule) => Rule.required()
        },

    ]
}
