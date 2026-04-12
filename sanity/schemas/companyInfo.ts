import { defineField, defineType } from "sanity";

export default defineType({
  name: "companyInfo",
  title: "Company Info",
  type: "document",
  // Singleton - only one document of this type
  fields: [
    defineField({
      name: "name",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "About Description",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
      description: "Include country code, e.g. +919876543210",
    }),
    defineField({
      name: "yearsOfExperience",
      title: "Years of Experience",
      type: "number",
    }),
    defineField({
      name: "teamSize",
      title: "Team Size",
      type: "number",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
      ],
    }),
  ],
});
