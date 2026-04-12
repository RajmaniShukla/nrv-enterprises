import { client } from "./client";

export async function getFeaturedProducts() {
  return client.fetch(
    `*[_type == "product" && featured == true] | order(_createdAt desc) {
      _id, name, slug, category, description, image, inStock, featured
    }`
  );
}

export async function getAllProducts(category?: string) {
  const filter = category
    ? `*[_type == "product" && category == $category]`
    : `*[_type == "product"]`;
  return client.fetch(
    `${filter} | order(_createdAt desc) {
      _id, name, slug, category, description, image, inStock, featured
    }`,
    category ? { category } : {}
  );
}

export async function getProductBySlug(slug: string) {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id, name, slug, category, description, image, inStock, featured
    }`,
    { slug }
  );
}

export async function getAllServices() {
  return client.fetch(
    `*[_type == "service"] | order(order asc) {
      _id, title, slug, description, icon, order
    }`
  );
}

export async function getCompanyInfo() {
  return client.fetch(
    `*[_type == "companyInfo"][0] {
      name, tagline, description, phone, email, address,
      whatsapp, yearsOfExperience, teamSize, socialLinks
    }`
  );
}
