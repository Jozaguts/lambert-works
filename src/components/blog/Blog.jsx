import NativeCarousel from "../common/NativeCarousel";
import MonoBlog from "./MonoBlog";
import { blogPosts } from "../../data/blogPosts";

const Blog = () => {
  const orderedPosts = [...blogPosts].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );

  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Home Repair Notes</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-600">
          Local repair notes for Plymouth Meeting, Blue Bell, and Skippack homeowners comparing painting, wood staining, drywall, basements, patios, carpentry, and practical handyman work.
        </p>
      </div>
      <NativeCarousel label="Home repair notes" multiple>
        {orderedPosts.map((data) => (
          <li key={data.slug}>
            <MonoBlog data={data} />
          </li>
        ))}
      </NativeCarousel>
    </div>
  );
};

export default Blog;
