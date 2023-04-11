type suggestionsType = {
    heading: string,
    descriptions: {
        href: string,
        desc: string,
    }[]
}[];

const suggestions: suggestionsType = [
    {
        heading: "Getting Started",
        descriptions: [
            {
                href: "#",
                desc: "Send me that as a daily email update",
            },
        ],
    },
    {
        heading: "Tickets",
        descriptions: [
            {
                href: "#",
                desc: "What is the common issues of my tickets?",
            },
        ],
    },
    {
        heading: "Project Management",
        descriptions: [
            {
                href: "#",
                desc: "Show me the projects that are stalled for 10 days",
            },
        ],
    },
    {
        heading: "Marketing",
        descriptions: [
            {
                href: "#",
                desc: "Write a paragraph on my new cyber security service",
            },
        ],
    },
    {
        heading: "Sales/CRM",
        descriptions: [
            {
                href: "#",
                desc: "research company openai.com",
            },
        ],
    },
    {
        heading: "Generative A.I.",
        descriptions: [
            {
                href: "#",
                desc: "draft a blog post about artificial intelligence and CRM",
            },
            {
                href: "#",
                desc: "generate image of darth vader playing guitar",
            },
        ],
    },
    {
        heading: "Research",
        descriptions: [
            {
                href: "#",
                desc: "show industry that canva.com is in",
            },
            {
                href: "#",
                desc: "where is openai.com located?",
            },
        ],
    },
    {
        heading: "Conversation/Chat",
        descriptions: [
            {
                href: "#",
                desc: "i love the movie shawshank redemption",
            },
            {
                href: "#",
                desc: "who were the main actors in it",
            },
        ],
    },
];

export default suggestions;