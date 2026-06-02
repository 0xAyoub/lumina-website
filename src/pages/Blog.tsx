import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 md:pt-28">

        {/* Header */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "rgba(17,17,17,0.35)" }}>
            Blog
          </p>
          <h1 className="font-sans-display text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.025em]" style={{ color: "#111111" }}>
            On creative, the edit,{" "}
            <span className="font-serif-display italic">and what actually converts.</span>
          </h1>
        </div>

        {/* Featured post */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <Link to={`/blog/${blogPosts[0].slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "rgba(17,17,17,0.35)" }}>
                  {blogPosts[0].category} · {blogPosts[0].readTime}
                </p>
                <h2 className="font-sans-display text-[26px] md:text-[36px] leading-[1.08] tracking-[-0.022em] mb-4 group-hover:opacity-70 transition-opacity" style={{ color: "#111111" }}>
                  {blogPosts[0].title}
                </h2>
                <p className="text-[14px] leading-[1.75] mb-6" style={{ color: "rgba(17,17,17,0.50)" }}>
                  {blogPosts[0].excerpt}
                </p>
                <span className="text-[12px] font-medium" style={{ color: "rgba(17,17,17,0.50)" }}>
                  Read article →
                </span>
              </div>
              <div className="order-first md:order-last" style={{ backgroundColor: "rgba(0,0,0,0.04)", aspectRatio: "3/2" }}>
                <div className="w-full h-full flex items-end p-6">
                  <p className="font-sans-display text-[64px] leading-none tracking-[-0.04em]" style={{ color: "rgba(17,17,17,0.08)" }}>
                    9<br />days.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Post list */}
        <div className="w-full px-6 md:px-12 lg:px-20">
          {blogPosts.slice(1).map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-8 md:py-10 hover:opacity-75 transition-opacity"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="flex-shrink-0 md:w-[200px]">
                <p className="text-[10px] font-medium uppercase tracking-[0.10em]" style={{ color: "rgba(17,17,17,0.35)" }}>
                  {post.category}
                </p>
                <p className="text-[10px] mt-1" style={{ color: "rgba(17,17,17,0.25)" }}>
                  {post.readTime}
                </p>
              </div>
              <div className="flex-1">
                <h2 className="font-sans-display text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.018em] mb-2" style={{ color: "#111111" }}>
                  {post.title}
                </h2>
                <p className="text-[13px] leading-[1.7]" style={{ color: "rgba(17,17,17,0.50)" }}>
                  {post.excerpt}
                </p>
              </div>
              <div className="flex-shrink-0 md:self-center">
                <span className="text-[12px] font-medium" style={{ color: "rgba(17,17,17,0.40)" }}>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-sans-display text-[22px] md:text-[30px] leading-[1.1] tracking-[-0.02em] mb-2" style={{ color: "#111111" }}>
                See it in practice.
              </h2>
              <p className="text-[13px]" style={{ color: "rgba(17,17,17,0.45)" }}>
                Get one finished ad for your brand — free, delivered in 48 hours.
              </p>
            </div>
            <Link
              to="/free"
              className="inline-flex text-[12px] font-medium px-7 py-3.5 bg-black text-white transition-opacity hover:opacity-75 flex-shrink-0"
            >
              Get my free ad →
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
};

export default Blog;
