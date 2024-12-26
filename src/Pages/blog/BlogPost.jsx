import React, { useState } from "react";
import styles from "./Blog.module.css";
import BlogArticle from "./BlogArticle";
import Pagination from "./Pagination";
import Hero1 from "./Asset/hero1.png";
import Hero2 from "./Asset/hero2.jpg";
import Hero3 from "./Asset/hero3.jpg";

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
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4a80a4a7ededd80b96dce2085c2bf7d86b21b65a3823c0b3673240704cc5e04c?placeholderIfAbsent=true&apiKey=7dcc2528d5a241efb932a561bca24f90",
    title: "Title 1",
    date: "2024 Dec, 28",
    author: "joegoldberg@gmail.com",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum, rutrum orci sit amet, sollicitudin ex. Maecenas mauris lorem, bibendum in lorem at, euismod viverra dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum.`,
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4a80a4a7ededd80b96dce2085c2bf7d86b21b65a3823c0b3673240704cc5e04c?placeholderIfAbsent=true&apiKey=7dcc2528d5a241efb932a561bca24f90",
    title: "Title 2",
    date: "2024 Dec, 28",
    author: "joegoldberg@gmail.com",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum, rutrum orci sit amet, sollicitudin ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum.`,
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4a80a4a7ededd80b96dce2085c2bf7d86b21b65a3823c0b3673240704cc5e04c?placeholderIfAbsent=true&apiKey=7dcc2528d5a241efb932a561bca24f90",
    title: "Title 3",
    date: "2024 Dec, 28",
    author: "joegoldberg@gmail.com",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum, rutrum orci sit amet, sollicitudin ex.`,
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
          src= {Hero1}
          className={styles.headerImage}
          alt="Blog header background"
        />
        <img
          loading="lazy"
          src= {Hero2}
          className={styles.headerImage}
          alt="Blog header background 2"
        />
        <img
          loading="lazy"
          src= {Hero3}
          className={styles.headerImage}
          alt="Blog header background 3"
        />
        <h1 className={styles.headerTitle}>BLOG</h1>
        <p className={styles.headerContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. 
          Proin feugiat leo interdum.</p>
          <p className={styles.headerContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

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
