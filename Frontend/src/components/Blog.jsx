import React, { useEffect, useState } from "react";
import { API_Base_URL } from "../../config/config";

const Blog = () => {
//   const blogs = [
//     {
//       id: 1,
//       title: "Understanding React Components",
//       body:
//         "React components let you split the UI into independent, reusable pieces. They help keep your code clean and manageable.",
//       author: "Admin",
//       date: "Dec 21, 2025",
//     },
//     {
//       id: 2,
//       title: "Why Tailwind CSS is Awesome",
//       body:
//         "Tailwind CSS provides utility-first classes that make designing fast, consistent, and responsive UIs a breeze.",
//       author: "John Doe",
//       date: "Dec 18, 2025",
//     },
//     {
//       id: 3,
//       title: "Writing Clean Code",
//       body:
//         "Clean code improves readability, maintainability, and reduces bugs. Simple practices can make a big difference.",
//       author: "Jane Smith",
//       date: "Dec 15, 2025",
//     },
//   ];

const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch(`${API_Base_URL}/blog/get`, {
        method:'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.data)
        setBlogs(data.data)
    })
  }, [])
  


  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-14">
          Blogs
        </h1>

        {/* Blog Grid */}
        {/* <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"> */}
        <div className="flex gap-10 flex-col">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md p-7 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Title */}
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {blog.title}
              </h2>

              {/* Body */}
              <p className="text-gray-600 flex-grow leading-relaxed">
                {blog.body}
              </p>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t flex items-center justify-between text-sm text-gray-500">
                <span className="font-medium text-indigo-600">
                  {blog.user?.name}
                  {/* John Doe */}
                </span>
                <span>{blog.post_date}</span>
                {/* Dec 21, 2025 */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
