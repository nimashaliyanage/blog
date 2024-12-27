import React, { useState } from "react";
import styles from "./Blog.module.css";
import Hero1 from "./Asset/hero1.png";
import Hero2 from "./Asset/hero2.jpg";
import Hero3 from "./Asset/hero3.jpg";
import Article1 from "./Asset/article1.jpg";
import Article2 from "./Asset/article2.jpg";
import Article3 from "./Asset/article3.jpg";
import Article4 from "./Asset/article4.jpg";
import Article5 from "./Asset/article5.jpg";
import Pagination from "./Pagination";

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
    image: Article4,
    title: "1. How React is Revolutionizing Mobile App Development",
    date: "2024 Dec, 22",
    author: "info@rtechsl.com",
    content: `React, a powerful JavaScript library developed by Facebook, has revolutionized mobile app development by offering efficient and flexible solutions. With React Native, developers can create cross-platform apps for iOS and Android using a single codebase, significantly reducing development time and costs while delivering a native-like experience. Its reusable components promote modularity and simplify updates, while features like hot reloading enable real-time code changes, speeding up development. React’s virtual DOM ensures optimized performance, even for complex applications, and its extensive ecosystem provides tools, libraries, and community support for continuous innovation. These features make React a game-changer in modern mobile app development.

React also fosters a collaborative development environment. Since React Native is based on JavaScript, one of the most widely used programming languages, teams can easily onboard new developers and ensure seamless collaboration. The shared codebase enables front-end and back-end developers to work cohesively, improving productivity and minimizing communication gaps. Furthermore, the library’s emphasis on component-based architecture allows teams to maintain consistent styling and behavior across applications.

As mobile devices continue to dominate the tech landscape, React’s adaptability to new tools and platforms ensures its relevance for years to come. Its growing ecosystem, including libraries like Expo and state management tools such as Redux, further solidifies its position in the development world. For businesses seeking rapid, cost-effective, and high-quality mobile solutions, React and React Native stand as invaluable tools.`,
  },
  {
    id: 2,
    image: Article2,
    title: "2. The Timeless Power of HTML and CSS in Modern Web Development",
    date: "2024 Dec, 22",
    author: "info@rtechsl.com",
    content: `HTML and CSS form the foundation of web development, enabling developers to create the structure and style of websites with precision and creativity. HTML provides the backbone, organizing content into meaningful sections, while CSS adds life through design and layout. Together, they power responsive and visually appealing websites, ensuring compatibility across devices. With modern advancements like CSS Grid, Flexbox, and media queries, developers can craft dynamic, interactive, and mobile-friendly experiences. HTML and CSS continue to be indispensable tools for building user-centric, functional, and visually engaging web platforms.

These technologies are further enhanced by tools and frameworks that streamline the development process. Frameworks such as Bootstrap and Tailwind CSS simplify the creation of consistent and responsive designs, while preprocessors like Sass and Less extend CSS’s capabilities with variables, nesting, and mixins. Additionally, browser developer tools make it easier than ever to debug and refine CSS and HTML for optimal performance.

The adaptability of HTML and CSS also ensures their relevance in emerging trends, such as web accessibility and SEO optimization. By adhering to semantic HTML standards and leveraging CSS for visual hierarchy, developers can create websites that are inclusive, user-friendly, and optimized for search engines. As the web evolves, HTML and CSS remain the cornerstones of innovation and creativity in web development.`,
  },
  {
    id: 3,
    image: Article1,
    title: "3. Why PHP and Laravel Are a Winning Combination for Web Applications",
    date: "2024 Dec, 22",
    author: "info@rtechsl.com",
    content: `PHP remains one of the most versatile and widely used server-side scripting languages, powering millions of websites and applications. When combined with Laravel, a robust PHP framework, it unlocks new levels of efficiency and scalability. Laravel streamlines development with its elegant syntax, built-in tools for routing, authentication, and database management, and a vibrant ecosystem. This combination allows developers to quickly build secure, high-performance web applications tailored to business needs. From startups to enterprise solutions, PHP and Laravel offer a reliable foundation for modern, feature-rich web applications.

Laravel also excels in simplifying complex development tasks. Features like Eloquent ORM make database queries intuitive, while the Artisan CLI tool boosts productivity by automating repetitive tasks. Additionally, Laravel’s support for RESTful APIs enables seamless integration with front-end frameworks, making it ideal for developing modern single-page applications (SPAs) and mobile app backends.

With the rise of cloud-based applications and microservices, Laravel continues to evolve to meet the demands of modern development. Its integration with tools like Docker and its support for serverless architectures allow businesses to scale applications efficiently. The combination of PHP’s universality and Laravel’s innovative features makes it an enduring choice for developers worldwide.`,
  },
  {
    id: 4,
    image: Article3,
    title: "4. Java: The Reliable Workhorse of Enterprise and Mobile Development",
    date: "2024 Dec, 23",
    author: "info@rtechsl.com",
    content: `Java has been a cornerstone of software development for decades, renowned for its stability, portability, and performance. As a platform-independent language, Java powers a wide range of applications, from enterprise-level solutions to Android mobile apps. Its robust security features, extensive libraries, and large developer community make it ideal for building scalable, mission-critical systems. With innovations like Spring Boot and Jakarta EE, Java remains a preferred choice for developing backend services, APIs, and cloud-based solutions, proving its enduring relevance in an ever-evolving tech landscape.

Java’s role in enterprise environments is particularly notable. Tools like Hibernate and Spring Framework provide powerful abstractions for managing data and application logic, reducing the complexity of large-scale systems. Furthermore, Java’s scalability ensures that enterprise applications can handle increasing user demands without compromising performance or reliability.

In the mobile space, Java continues to be the backbone of Android development. The introduction of Kotlin as an alternative language for Android has only strengthened Java’s ecosystem, as both languages integrate seamlessly. This dual-language support, combined with Java’s strong compatibility with legacy systems, ensures its continued dominance in enterprise and mobile development.`,
  },
  {
    id: 5,
    image: Article5,
    title: "5. React and Tailwind CSS: A Perfect Match for Modern UI Development",
    date: "2024 Dec, 23",
    author: "info@rtechsl.com",
    content: `The combination of React and Tailwind CSS is redefining how developers build user interfaces. React’s component-based architecture enables the creation of dynamic, reusable UI elements, while Tailwind CSS offers a utility-first approach to styling, making it easy to create custom designs directly in the markup. Together, they streamline the development process, reducing boilerplate code and ensuring consistency across the application. This synergy is perfect for crafting responsive, visually stunning, and highly interactive user experiences, making React and Tailwind CSS a go-to duo for modern frontend development.

Tailwind CSS also empowers developers to quickly prototype designs. Its extensive library of utility classes allows for rapid experimentation without the need for custom CSS, enabling teams to bring their ideas to life faster. Additionally, Tailwind’s flexibility ensures that it can adapt to any project, from small-scale applications to enterprise-grade systems.

The React-Tailwind combination also excels in maintaining design consistency across applications. By integrating Tailwind classes directly within React components, developers can ensure that UI elements remain visually consistent, even as projects grow in complexity. This approach not only improves efficiency but also enhances user satisfaction by delivering polished, cohesive designs.`,
  },
];

const articlesPerPage = 2;

function BlogArticle({ id, image, title, date, author, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSeeMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.article}>
      <img src={image} alt={title} className={styles.articleImage} />
      <h2 className={styles.articleTitle}>{title}</h2>
      <div className={styles.articleMeta}>
        <span className={styles.articleDate}>{date}</span>
        <span className={styles.articleAuthor}>By {author}</span>
      </div>
      <p className={styles.articleContent}>
        {isExpanded ? content : `${content.slice(0, 400)}...`}
      </p>
      <button className={styles.seeMoreButton} onClick={handleSeeMore}>
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
}

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
        <img src={Hero1} className={styles.headerImage} alt="Blog Header" />
        <img src={Hero2} className={styles.headerImage} alt="Blog Header 2" />
        <img src={Hero3} className={styles.headerImage} alt="Blog Header 3" />
        <h1 className={styles.headerTitle}>BLOG</h1>
        <p className={styles.headerContent}>
          Welcome to the R Tech Solutions blog! Explore insights, tips, and updates about web development, CCTV installation, and more.
        </p>
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
