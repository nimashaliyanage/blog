import React, { useState } from "react";
import styles from "./Blog.module.css";
import BlogArticle from "./BlogArticle";
import Pagination from "./Pagination";
import Hero1 from "./Asset/hero1.png";
import Hero2 from "./Asset/hero2.jpg";
import Hero3 from "./Asset/hero3.jpg";
import Article1 from "./Asset/article1.jpg";
import Article2 from "./Asset/article2.jpg";
import Article3 from "./Asset/article3.jpg";


const categories = [
  "All",
  "Mobile Development",
  "CCTV Installation",
  "Networking",
  "POS Systems",
  "Web Development",
];

const articles = [
  {
    id: 1,
    image: Article1,
    title: "1. How React is Revolutionizing Mobile App Development",
    date: "2024 Dec, 22",
    author: "joegoldberg@gmail.com",
    content: `React, a powerful JavaScript library developed by Facebook, has revolutionized mobile app development by offering efficient and flexible solutions. With React Native, developers can create cross-platform apps for iOS and Android using a single codebase, significantly reducing development time and costs while delivering a native-like experience. Its reusable components promote modularity and simplify updates, while features like hot reloading enable real-time code changes, speeding up development. React’s virtual DOM ensures optimized performance, even for complex applications, and its extensive ecosystem provides tools, libraries, and community support for continuous innovation. These features make React a game-changer in modern mobile app development.`,
  },
  {
    id: 2,
    image:Article2,
    title: "2. The Timeless Power of HTML and CSS in Modern Web Development",
    date: "2024 Dec, 22",
    author: "joegoldberg@gmail.com",
    content: `HTML and CSS form the foundation of web development, enabling developers to create the structure and style of websites with precision and creativity. HTML provides the backbone, organizing content into meaningful sections, while CSS adds life through design and layout. Together, they power responsive and visually appealing websites, ensuring compatibility across devices. With modern advancements like CSS Grid, Flexbox, and media queries, developers can craft dynamic, interactive, and mobile-friendly experiences. HTML and CSS continue to be indispensable tools for building user-centric, functional, and visually engaging web platforms.`,
  },
  {
    id: 3,
    image: Article3,
    title: "3. Why PHP and Laravel Are a Winning Combination for Web Applications",
    date: "2024 Dec, 22",
    author: "joegoldberg@gmail.com",
    content: `PHP remains one of the most versatile and widely used server-side scripting languages, powering millions of websites and applications. When combined with Laravel, a robust PHP framework, it unlocks new levels of efficiency and scalability. Laravel streamlines development with its elegant syntax, built-in tools for routing, authentication, and database management, and a vibrant ecosystem. This combination allows developers to quickly build secure, high-performance web applications tailored to business needs. From startups to enterprise solutions, PHP and Laravel offer a reliable foundation for modern, feature-rich web applications.`,
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4a80a4a7ededd80b96dce2085c2bf7d86b21b65a3823c0b3673240704cc5e04c?placeholderIfAbsent=true&apiKey=7dcc2528d5a241efb932a561bca24f90",
    title: "4. Java: The Reliable Workhorse of Enterprise and Mobile Development",
    date: "2024 Dec, 23",
    author: "joegoldberg@gmail.com",
    content: `Java has been a cornerstone of software development for decades, renowned for its stability, portability, and performance. As a platform-independent language, Java powers a wide range of applications, from enterprise-level solutions to Android mobile apps. Its robust security features, extensive libraries, and large developer community make it ideal for building scalable, mission-critical systems. With innovations like Spring Boot and Jakarta EE, Java remains a preferred choice for developing backend services, APIs, and cloud-based solutions, proving its enduring relevance in an ever-evolving tech landscape.`,
  },
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4a80a4a7ededd80b96dce2085c2bf7d86b21b65a3823c0b3673240704cc5e04c?placeholderIfAbsent=true&apiKey=7dcc2528d5a241efb932a561bca24f90",
    title: "5. React and Tailwind CSS: A Perfect Match for Modern UI Development",
    date: "2024 Dec, 23",
    author: "joegoldberg@gmail.com",
    content: `The combination of React and Tailwind CSS is redefining how developers build user interfaces. React’s component-based architecture enables the creation of dynamic, reusable UI elements, while Tailwind CSS offers a utility-first approach to styling, making it easy to create custom designs directly in the markup. Together, they streamline the development process, reducing boilerplate code and ensuring consistency across the application. This synergy is perfect for crafting responsive, visually stunning, and highly interactive user experiences, making React and Tailwind CSS a go-to duo for modern frontend development.`,
  },

  
];

const articlesPerPage = 2; // Number of articles displayed per page

function BlogPost() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <div className={styles.blog}>
      <header className={styles.header}>
        <img
          loading="lazy"
          src={Hero1}
          className={styles.headerImage}
          alt="Blog header background"
        />
        <img
          loading="lazy"
          src={Hero2}
          className={styles.headerImage}
          alt="Blog header background 2"
        />
        <img
          loading="lazy"
          src={Hero3}
          className={styles.headerImage}
          alt="Blog header background 3"
        />
        <h1 className={styles.headerTitle}>BLOG</h1>
        <p className={styles.headerContent}>
        Welcome to the R Tech Solutions blog! Here, we share insights, tips, and updates on web and mobile development, CCTV installation, networking, and POS systems.</p>
        <p className={styles.headerContent}>Explore articles on cutting-edge technologies like React, PHP, Laravel, Java, and more, along with practical guides and industry trends to keep you informed and inspired. Stay connected and discover how we innovate to meet your tech needs!</p>

      </header>



      <h2 className={styles.categoriesTitle}>Categories</h2>

      <main className={styles.mainContent}>
        <div className={styles.categoryContainer}>
          {categories.map((category, index) => (
            <button key={index} className={styles.categoryButton}>
              {category}
            </button>
          ))}
        </div>

        {paginatedArticles.map((article) => (
          <BlogArticle key={article.id} {...article} />
        ))}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
}

export default BlogPost;
