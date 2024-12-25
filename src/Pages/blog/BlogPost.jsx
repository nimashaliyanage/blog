import React from "react";
import styles from "./Blog.module.css";
import BlogArticle from "./BlogArticle";

const categories = [
  "Mobile Development",
  "CCTV Instalation",
  "Networking",
  "POS Systems",
  "Web Development",
];

const articles = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4a80a4a7ededd80b96dce2085c2bf7d86b21b65a3823c0b3673240704cc5e04c?placeholderIfAbsent=true&apiKey=7dcc2528d5a241efb932a561bca24f90",
    title: "Title",
    date: "2024 Dec, 28",
    author: "joegoldberg@gmail.com",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum, rutrum orci sit amet, sollicitudin ex. Maecenas mauris lorem, bibendum in lorem at, euismod viverra dui. Integer placerat faucibus orci. Quisque eu pellentesque nisl, et hendrerit neque. Phasellus luctus ante nisi. Phasellus lobortis, arcu sit amet rhoncus scelerisque, nisi mi pharetra ligula, a dapibus ex dui vel urna. Cras at mauris imperdiet, finibus dui eget, volutpat nulla. Etiam aliquet mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum, rutrum orci sit amet, sollicitudin ex. Maecenas mauris lorem, bibendum in lorem at, euismod viverra dui. Integer placerat faucibus orci. Quisque eu pellentesque nisl, et hendrerit neque. Phasellus luctus ante nisi. Phasellus lobortis, arcu sit amet rhoncus scelerisque, nisi mi pharetra ligula, a dapibus ex dui vel urna. Cras at mauris imperdiet, finibus dui eget, volutpat nulla. Etiam aliquet mollis euismod.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum, rutrum orci sit amet, sollicitudin ex. Maecenas mauris lorem, bibendum in lorem at, euismod viverra dui. Integer placerat faucibus orci. Quisque eu pellentesque nisl, et hendrerit neque. Phasellus luctus ante nisi. Phasellus lobortis, arcu sit amet rhoncus scelerisque, nisi mi pharetra ligula, a dapibus ex dui vel urna. Cras at mauris imperdiet, finibus dui eget, volutpat nulla. Etiam aliquet mollis euismod.`,
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4a80a4a7ededd80b96dce2085c2bf7d86b21b65a3823c0b3673240704cc5e04c?placeholderIfAbsent=true&apiKey=7dcc2528d5a241efb932a561bca24f90",
    title: "Title",
    date: "2024 Dec, 28",
    author: "joegoldberg@gmail.com",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum, rutrum orci sit amet, sollicitudin ex. Maecenas mauris lorem, bibendum in lorem at, euismod viverra dui. Integer placerat faucibus orci. Quisque eu pellentesque nisl, et hendrerit neque. Phasellus luctus ante nisi. Phasellus lobortis, arcu sit amet rhoncus scelerisque, nisi mi pharetra ligula, a dapibus ex dui vel urna. Cras at mauris imperdiet, finibus dui eget, volutpat nulla. Etiam aliquet mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum, rutrum orci sit amet, sollicitudin ex. Maecenas mauris lorem, bibendum in lorem at, euismod viverra dui. Integer placerat faucibus orci. Quisque eu pellentesque nisl, et hendrerit neque. Phasellus luctus ante nisi. Phasellus lobortis, arcu sit amet rhoncus scelerisque, nisi mi pharetra ligula, a dapibus ex dui vel urna. Cras at mauris imperdiet, finibus dui eget, volutpat nulla. Etiam aliquet mollis euismod.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum, rutrum orci sit amet, sollicitudin ex. Maecenas mauris lorem, bibendum in lorem at, euismod viverra dui. Integer placerat faucibus orci. Quisque eu pellentesque nisl, et hendrerit neque. Phasellus luctus ante nisi. Phasellus lobortis, arcu sit amet rhoncus scelerisque, nisi mi pharetra ligula, a dapibus ex dui vel urna. Cras at mauris imperdiet, finibus dui eget, volutpat nulla. Etiam aliquet mollis euismod.`,
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4a80a4a7ededd80b96dce2085c2bf7d86b21b65a3823c0b3673240704cc5e04c?placeholderIfAbsent=true&apiKey=7dcc2528d5a241efb932a561bca24f90",
    title: "Title",
    date: "2024 Dec, 28",
    author: "joegoldberg@gmail.com",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum, rutrum orci sit amet, sollicitudin ex. Maecenas mauris lorem, bibendum in lorem at, euismod viverra dui. Integer placerat faucibus orci. Quisque eu pellentesque nisl, et hendrerit neque. Phasellus luctus ante nisi. Phasellus lobortis, arcu sit amet rhoncus scelerisque, nisi mi pharetra ligula, a dapibus ex dui vel urna. Cras at mauris imperdiet, finibus dui eget, volutpat nulla. Etiam aliquet mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum, rutrum orci sit amet, sollicitudin ex. Maecenas mauris lorem, bibendum in lorem at, euismod viverra dui. Integer placerat faucibus orci. Quisque eu pellentesque nisl, et hendrerit neque. Phasellus luctus ante nisi. Phasellus lobortis, arcu sit amet rhoncus scelerisque, nisi mi pharetra ligula, a dapibus ex dui vel urna. Cras at mauris imperdiet, finibus dui eget, volutpat nulla. Etiam aliquet mollis euismod.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, dignissim sed efficitur quis, vestibulum at lectus. Proin feugiat leo interdum, rutrum orci sit amet, sollicitudin ex. Maecenas mauris lorem, bibendum in lorem at, euismod viverra dui. Integer placerat faucibus orci. Quisque eu pellentesque nisl, et hendrerit neque. Phasellus luctus ante nisi. Phasellus lobortis, arcu sit amet rhoncus scelerisque, nisi mi pharetra ligula, a dapibus ex dui vel urna. Cras at mauris imperdiet, finibus dui eget, volutpat nulla. Etiam aliquet mollis euismod.`,
  },
];

function BlogPost() {
  return (
    <div className={styles.blog}>
      <header className={styles.header}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e61cefa1137b65a012193ccf4c18f15d8763be0a3859197e84e2054403e6b674?placeholderIfAbsent=true&apiKey=7dcc2528d5a241efb932a561bca24f90"
          className={styles.headerImage}
          alt="Blog header background"
        />
        <h1 className={styles.headerTitle}>BLOG</h1>
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

        {articles.map((article) => (
          <BlogArticle key={article.id} {...article} />
        ))}
      </main>
    </div>
  );
}

export default BlogPost;
