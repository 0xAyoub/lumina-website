import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPost, blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="bg-white pt-28 px-6 md:px-12 lg:px-20 py-20 min-h-screen">
          <p className="text-[13px]" style={{ color: "rgba(17,17,17,0.45)" }}>Article not found.</p>
          <Link to="/blog" className="text-[13px] font-medium mt-2 inline-block" style={{ color: "#111111" }}>← Back to blog</Link>
        </main>
        <Footer />
      </>
    );
  }

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const renderBody = (body: string) => {
    return body.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-sans-display text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.018em] mt-10 mb-4"
            style={{ color: "#111111" }}
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("**") && block.endsWith("**")) {
        return (
          <p key={i} className="text-[15px] font-medium leading-[1.7] mb-4" style={{ color: "#111111" }}>
            {block.replace(/\*\*/g, "")}
          </p>
        );
      }
      const parts = block.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-[15px] leading-[1.85] mb-5" style={{ color: "rgba(17,17,17,0.65)" }}>
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={j} style={{ color: "#111111", fontWeight: 500 }}>{part.replace(/\*\*/g, "")}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 md:pt-28">

        {/* Header */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <Link
            to="/blog"
            className="text-[11px] font-medium uppercase tracking-[0.08em] mb-6 inline-block transition-opacity hover:opacity-60"
            style={{ color: "rgba(17,17,17,0.40)" }}
          >
            ← Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-medium uppercase tracking-[0.10em]" style={{ color: "rgba(17,17,17,0.35)" }}>
              {post.category}
            </span>
            <span style={{ color: "rgba(17,17,17,0.20)" }}>·</span>
            <span className="text-[10px]" style={{ color: "rgba(17,17,17,0.35)" }}>{post.readTime}</span>
          </div>
          <h1 className="font-sans-display text-[28px] md:text-[48px] leading-[1.07] tracking-[-0.025em] max-w-[720px]" style={{ color: "#111111" }}>
            {post.title}
          </h1>
        </div>

        {/* Body */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="max-w-[660px]">
            <p className="text-[16px] leading-[1.80] mb-8 font-medium" style={{ color: "rgba(17,17,17,0.70)" }}>
              {post.excerpt}
            </p>
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "32px" }}>
              {renderBody(post.body)}
            </div>
          </div>
        </div>

        {/* Author */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-10" style={{ borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex items-center justify-center bg-black text-white text-[12px] font-medium flex-shrink-0">
              A
            </div>
            <div>
              <p className="text-[13px] font-medium" style={{ color: "#111111" }}>Ayoub</p>
              <p className="text-[11px]" style={{ color: "rgba(17,17,17,0.40)" }}>Founder, Lumina Labs</p>
            </div>
            <a
              href="mailto:ayoub@withluminalabs.com"
              className="ml-auto text-[11px] transition-opacity hover:opacity-60"
              style={{ color: "rgba(17,17,17,0.45)" }}
            >
              ayoub@withluminalabs.com
            </a>
          </div>
        </div>

        {/* More posts */}
        {others.length > 0 && (
          <div className="w-full px-6 md:px-12 lg:px-20 py-14 md:py-16" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
            <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-8" style={{ color: "rgba(17,17,17,0.35)" }}>
              More articles
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group block p-6 hover:opacity-75 transition-opacity"
                  style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.08em] mb-3" style={{ color: "rgba(17,17,17,0.35)" }}>
                    {p.category} · {p.readTime}
                  </p>
                  <h3 className="font-sans-display text-[18px] leading-[1.15] tracking-[-0.015em] mb-2" style={{ color: "#111111" }}>
                    {p.title}
                  </h3>
                  <p className="text-[12px] leading-[1.65]" style={{ color: "rgba(17,17,17,0.45)" }}>
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-sans-display text-[22px] md:text-[30px] leading-[1.1] tracking-[-0.02em] mb-2" style={{ color: "#111111" }}>
                See it in practice.
              </h2>
              <p className="text-[13px]" style={{ color: "rgba(17,17,17,0.45)" }}>
                Get one finished ad for your brand — free, in 48 hours.
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

export default BlogPost;
