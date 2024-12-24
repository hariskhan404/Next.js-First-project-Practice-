import Link from "next/link"

export const metadata = {
    title: 'NEXT JS BLOGS',
  }

export default function Blogs(){
    const blogs = [
            {
              "id": 1,
              "title": "Mastering JavaScript Promises",
              "slug": "mastering-javascript-promises",
              "description": "Learn how to use JavaScript Promises effectively to handle asynchronous operations with ease."
            },
            {
              "id": 2,
              "title": "React Hooks: A Comprehensive Guide",
              "slug": "react-hooks-guide",
              "description": "A deep dive into React Hooks and how they simplify state and lifecycle management in functional components."
            },
            {
              "id": 3,
              "title": "Top 10 CSS Tricks for Better Web Design",
              "slug": "css-tricks-web-design",
              "description": "Discover powerful CSS techniques to create visually appealing and user-friendly web designs."
            },
            {
              "id": 4,
              "title": "Understanding Node.js Event Loop",
              "slug": "nodejs-event-loop",
              "description": "Explore how Node.js handles concurrency with its single-threaded, non-blocking I/O model."
            },
            {
              "id": 5,
              "title": "Introduction to TypeScript",
              "slug": "introduction-to-typescript",
              "description": "Get started with TypeScript and learn how it enhances JavaScript development with type safety."
            },
            {
              "id": 6,
              "title": "Building a REST API with Express",
              "slug": "rest-api-with-express",
              "description": "Step-by-step guide to building a fully functional RESTful API using Express.js and Node.js."
            },
            {
              "id": 7,
              "title": "Demystifying Git Rebase",
              "slug": "demystifying-git-rebase",
              "description": "A beginner-friendly explanation of Git rebase and how to use it effectively in your projects."
            },
            {
              "id": 8,
              "title": "Deploying Web Apps with Docker",
              "slug": "deploying-web-apps-docker",
              "description": "Learn how to containerize and deploy your web applications using Docker."
            },
            {
              "id": 9,
              "title": "Python for Data Analysis",
              "slug": "python-for-data-analysis",
              "description": "An introductory guide to using Python libraries like Pandas and NumPy for data analysis."
            },
            {
              "id": 10,
              "title": "SEO Best Practices for Developers",
              "slug": "seo-best-practices",
              "description": "Optimize your website for search engines with these essential SEO tips and techniques."
            }
          ]
    return(
        <div className="container mx-auto text-center p-20">
             <h1 className=" font-bold text-5xl ">ALL BLOGS</h1>
             {
                 blogs.map((data)=> (
                     <Link key={data.id} href={`/blogs/${data.slug}`}>
                     <h1 
                     className="border border-blue-400 p-2 px-3 text-center my-2"
                     
                     >
                        {data.title}
                     </h1>
                     </Link> 
                     ))}           
        </div>
    )
}