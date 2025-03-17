import { defineField, defineType } from "sanity";

// _id, title, , mainImage, , projectCode
export const postTypes = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Name",
      type: "string",
      description:
        "Enter the name or title of the project (e.g., 'E-Commerce Website').",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "string",
      description:
        "Provide a brief summary of the project (e.g., 'A fully functional e-commerce platform built with React and Node.js.').",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "projectCode",
      title: "Link to GitHub Repository",
      type: "url",
      description:
        "Add the full URL to the project's GitHub repository (e.g., https://github.com/username/repository).",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "liveDemo",
      title: "Link to Live Project Demo",
      type: "url",
      description:
        "Add the full URL to the live, working version of the project (e.g., https://yourproject.com).",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
  ],
});
