import handymanRepairs from "../assets/images/IMG_6449.jpg";

export const blogPosts = [
  {
    id: 1,
    slug: "handyman-plymouth-meeting-pa",
    image: handymanRepairs,
    category: "Handyman Plymouth Meeting",
    title: "Handyman in Plymouth Meeting, PA: Small Repairs That Keep a Home Moving",
    seoTitle: "Handyman in Plymouth Meeting, PA | LambertWorks",
    metaDescription:
      "Need a handyman in Plymouth Meeting, PA? LambertWorks handles drywall, paint, trim, repairs, patios, and practical home projects near Cherry Ln.",
    excerpt:
      "A practical repair-list guide for homeowners near Cherry Ln, Whitemarsh Township, Lafayette Hill, and Montgomery County.",
    primaryKeyword: "handyman Plymouth Meeting PA",
    keywords: [
      "handyman Plymouth Meeting PA",
      "home repair Plymouth Meeting",
      "local handyman Montgomery County",
      "handyman near Cherry Ln",
    ],
    tags: ["Handyman", "Home Repair", "Plymouth Meeting", "Montgomery County"],
    sections: [
      {
        heading: "A practical handyman for real home repair lists",
        body: "Most homeowners do not need a large remodeling company for every project. They need someone who can look at the repair list, explain what matters first, and handle the work cleanly. LambertWorks helps with drywall patches, trim, painting prep, small carpentry, exterior fixes, and other practical repairs around Plymouth Meeting.",
      },
      {
        heading: "What to group into one estimate",
        body: "If you have several small repairs, group them before requesting an estimate. Wall damage, loose trim, worn caulk, paint touch-ups, door adjustments, shelving, and minor exterior repairs can often be reviewed together. This gives you a clearer scope and helps the work get done with less back-and-forth.",
      },
      {
        heading: "Local service near Cherry Ln and nearby towns",
        body: "From 821 Cherry Ln, LambertWorks is positioned for homeowners in Plymouth Meeting, Whitemarsh Township, Lafayette Hill, Conshohocken, Blue Bell, Norristown, and nearby Montgomery County neighborhoods.",
      },
      {
        heading: "When to request help",
        body: "Reach out when a repair affects safety, daily use, water protection, or the finished look of your home. A clear walkthrough can separate quick fixes from items that need more planning.",
      },
    ],
  },
];

export const getBlogPostBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);
