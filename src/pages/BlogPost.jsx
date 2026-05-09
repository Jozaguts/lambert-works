import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBlogPostBySlug } from "../data/blogPosts";

const siteUrl = "https://lambertworks.us";

const setMetaTag = (name, content, attribute = "name") => {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const setCanonical = (href) => {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

const setJsonLd = (post, canonicalUrl) => {
  const existing = document.getElementById("blog-post-schema");

  if (existing) {
    existing.remove();
  }

  const script = document.createElement("script");
  script.id = "blog-post-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${siteUrl}${post.image}`,
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Organization",
      name: "LambertWorks",
    },
    publisher: {
      "@type": "Organization",
      name: "LambertWorks",
    },
    areaServed: [
      "Plymouth Meeting",
      "bluebell",
      "Skippack areas",
      "Whitemarsh Township",
      "Lafayette Hill",
      "Conshohocken",
      "Blue Bell",
      "Montgomery County",
    ],
    keywords: post.keywords.join(", "),
  });
  document.head.appendChild(script);
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  useEffect(() => {
    if (!post) {
      document.title = "Home Repair Article Not Found | LambertWorks";
      return;
    }

    const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

    document.title = post.seoTitle;
    setMetaTag("description", post.metaDescription);
    setMetaTag("keywords", post.keywords.join(", "));
    setMetaTag("og:title", post.seoTitle, "property");
    setMetaTag("og:description", post.metaDescription, "property");
    setMetaTag("og:type", "article", "property");
    setMetaTag("og:url", canonicalUrl, "property");
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", post.seoTitle);
    setMetaTag("twitter:description", post.metaDescription);
    setCanonical(canonicalUrl);
    setJsonLd(post, canonicalUrl);
  }, [post]);

  if (!post) {
    return (
      <main className="content px-4 py-20 text-center">
        <p className="section-title">Article not found</p>
        <p className="mx-auto mt-4 max-w-2xl text-soft-dark">
          The article you are looking for is not available. Return to the home
          page to review LambertWorks services and request an estimate.
        </p>
        <Link className="btn btn-primary mt-8" to="/">
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-soft-white">
      <article className="content px-4 py-14 md:py-20">
        <div className="mx-auto max-w-xlg">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-charcoal hover:text-primary"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to LambertWorks
          </Link>

          <header className="mx-auto mt-8 max-w-180 text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-primary-dark">
              {post.category}
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="mx-auto mt-5 max-w-150 text-[16px] leading-7 text-soft-dark md:text-lg">
              {post.excerpt}
            </p>
          </header>

          <div className="mx-auto mt-10 max-w-170 overflow-hidden rounded-lg bg-white shadow-xl shadow-gray-200">
            <img
              src={post.image}
              alt={`${post.primaryKeyword} project by LambertWorks`}
              className="h-auto max-h-[560px] w-full object-cover"
            />
          </div>

          <div className="mx-auto mt-12 max-w-180">
            <div className="space-y-9 rounded-lg bg-white p-5 shadow-sm sm:p-8">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-charcoal">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-[16px] leading-7 text-gray-700">
                    {section.body}
                  </p>
                </section>
              ))}

              <section className="rounded-md border border-warm-border bg-warm-surface p-5">
                <h2 className="text-2xl font-semibold text-charcoal">
                  Request a local estimate
                </h2>
                <p className="mt-3 text-[16px] leading-7 text-gray-700">
                  LambertWorks is based near Plymouth meeting, bluebell, Skippack areas,
                  PA 19462. Share the repair, room, or outdoor area you need
                  reviewed and get a practical next step.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a className="btn btn-primary" href="/#contact">
                    Request Estimate
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                  <a
                    className="btn btn-secondary"
                    href="https://wa.me/14845380809"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp LambertWorks
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
