import ResponsiveImage from "../components/common/ResponsiveImage";
import { updatePageSeo } from "../utils/seo";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { blogPosts, getBlogPostBySlug } from "../data/blogPosts";
import { trackContactClick } from "../utils/analytics";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const relatedPosts = post?.relatedSlugs
    ?.map((relatedSlug) => blogPosts.find((item) => item.slug === relatedSlug))
    .filter(Boolean) ?? [];

  useEffect(() => {
    updatePageSeo(post);
  }, [post]);

  if (!post) {
    return (
      <main id="main-content" className="content px-4 py-20 text-center">
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
    <main id="main-content" className="bg-soft-white">
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
            <ResponsiveImage
              src={post.image}
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 768px) calc(100vw - 32px), 680px"
              alt={`${post.primaryKeyword} project by LambertWorks`}
              className="h-[360px] sm:h-[480px] w-full object-cover"
            />
          </div>

          {post.gallery?.length ? (
            <div className="mx-auto mt-4 grid max-w-170 gap-4 sm:grid-cols-2">
              {post.gallery.map((image) => (
                <figure
                  className="overflow-hidden rounded-lg bg-white shadow-sm"
                  key={image.src}
                >
                  <ResponsiveImage
                    src={image.src}
                    alt={image.alt}
                    className="h-56 w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          ) : null}

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

              {post.faqs?.length ? (
                <section className="rounded-md border border-warm-border bg-soft-white p-5">
                  <h2 className="text-2xl font-semibold text-charcoal">
                    Common questions
                  </h2>
                  <div className="mt-4 space-y-3">
                    {post.faqs.map((faq) => (
                      <details
                        className="rounded-md border border-warm-border bg-white p-4"
                        key={faq.question}
                      >
                        <summary className="cursor-pointer text-[16px] font-semibold text-charcoal">
                          {faq.question}
                        </summary>
                        <p className="mt-3 text-[15px] leading-7 text-gray-700">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}

              {relatedPosts.length ? (
                <section>
                  <h2 className="text-2xl font-semibold text-charcoal">
                    Related repair guides
                  </h2>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        className="rounded-md border border-warm-border bg-soft-white p-4 hover:border-primary"
                        key={relatedPost.slug}
                        to={`/blog/${relatedPost.slug}/`}
                      >
                        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-primary-dark">
                          {relatedPost.category}
                        </p>
                        <p className="mt-2 text-[17px] font-semibold text-charcoal">
                          {relatedPost.title}
                        </p>
                        <p className="mt-2 text-[14px] leading-6 text-gray-600">
                          {relatedPost.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="rounded-md border border-warm-border bg-warm-surface p-5">
                <h2 className="text-2xl font-semibold text-charcoal">
                  Request a local estimate
                </h2>
                <p className="mt-3 text-[16px] leading-7 text-gray-700">
                  LambertWorks is based near Plymouth Meeting, PA 19462, serving
                  Blue Bell, Skippack, and Montgomery County. Share the repair,
                  room, or outdoor area you need reviewed and get a practical next step.
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
                    onClick={() =>
                      trackContactClick("whatsapp", {
                        placement: "blog_cta",
                        article_slug: post.slug,
                      })
                    }
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
