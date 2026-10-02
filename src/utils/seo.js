import images from "../data/images.json" with { type: "json" };

export const homeTitle = "Handyman in Plymouth Meeting, PA | LambertWorks";
export const homeDescription = "Local handyman for drywall repair, painting, carpentry and home repairs in Plymouth Meeting, Blue Bell and Skippack, PA. Free estimate — call today.";
const siteUrl = "https://lambertworks.us";

export function getPageSeo(post) {
  const title = post?.seoTitle ?? homeTitle;
  const description = post?.metaDescription ?? homeDescription;
  const canonical = post ? `${siteUrl}/blog/${post.slug}/` : `${siteUrl}/`;
  const postImage = typeof post?.image === "string" ? images[post.image] : post?.image;
  const image = post ? `${siteUrl}${postImage?.src ?? post.image}` : `${siteUrl}/og-social.jpg`;
  const schema = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    image,
    url: canonical,
    mainEntityOfPage: canonical,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { "@type": "Organization", name: "LambertWorks" },
    publisher: { "@type": "Organization", name: "LambertWorks" },
    keywords: post.keywords.join(", "),
  } : null;
  const pageSchema = schema && post.faqs?.length ? {
    "@context": "https://schema.org",
    "@graph": [schema, {
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    }],
  } : schema;
  return { title, canonical, schema: pageSchema, meta: {
    description,
    keywords: post?.keywords.join(", ") ?? "handyman Plymouth Meeting PA, drywall repair, carpentry, painting, Blue Bell, Skippack",
    "og:type": post ? "article" : "website",
    "og:title": title,
    "og:description": description,
    "og:url": canonical,
    "og:image": image,
    "og:image:width": String(postImage ? postImage.width : 1200),
    "og:image:height": String(postImage ? postImage.height : 630),
    "og:image:alt": post?.title ?? "LambertWorks handyman projects",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:alt": post?.title ?? "LambertWorks handyman projects",
  } };
}

export function updatePageSeo(post) {
  const seo = getPageSeo(post);
  document.title = seo.title;
  document.querySelector("link[rel=canonical]")?.setAttribute("href", seo.canonical);
  for (const [name, value] of Object.entries(seo.meta)) {
    const attribute = name.startsWith("og:") ? "property" : "name";
    document.querySelector(`meta[${attribute}="${name}"]`)?.setAttribute("content", value);
  }
  document.getElementById("blog-post-schema")?.remove();
  if (seo.schema) {
    const script = document.createElement("script");
    script.id = "blog-post-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(seo.schema);
    document.head.appendChild(script);
  }
}
