import React from "react";

const HomePage = () => {
  const posts = [
    {
      id: 1,
      title: "Welcome to My Blog",
      excerpt:
        "A place where ideas, creativity, and learning come together. Let’s explore.",
      author: "Admin",
      date: "Dec 21, 2025",
    },
    {
      id: 2,
      title: "Mastering React",
      excerpt:
        "Learn how React helps you build fast, scalable, and beautiful UIs.",
      author: "Admin",
      date: "Dec 18, 2025",
    },
    {
      id: 3,
      title: "Why Writing Matters",
      excerpt:
        "Writing sharpens thinking and helps share ideas with the world.",
      author: "Admin",
      date: "Dec 15, 2025",
    },
    {
      id: 4,
      title: "Tailwind CSS Magic",
      excerpt:
        "Design stunning websites faster with utility-first CSS.",
      author: "Admin",
      date: "Dec 12, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Welcome to My Blog
          </h1>
          <p className="text-lg md:text-xl  max-w-2xl mx-auto">
            Discover stories, tutorials, and ideas crafted to inspire and educate.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="max-w-6xl mx-auto px-6 -mt-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition">
          <span className="text-sm font-semibold text-indigo-600 uppercase">
            Featured Post
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4">
            {posts[0].title}
          </h2>
          <p className="text-gray-600 mb-6">{posts[0].excerpt}</p>
          <div className="text-sm text-gray-500">
            By <span className="font-medium">{posts[0].author}</span> •{" "}
            {posts[0].date}
          </div>
        </div>
      </section>

      {/* RECENT POSTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Recent Posts
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="text-sm text-gray-500">
                By <span className="font-medium">{post.author}</span> •{" "}
                {post.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">
            © 2025 My Blog. Crafted with ❤️ using React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
