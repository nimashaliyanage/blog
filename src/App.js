import React from 'react';
import BlogArticle from './Pages/blog/BlogArticle';
import BlogPost from './Pages/blog/BlogPost';
import CategoryTag from './Pages/blog/CategoryTag'
function App() {
  return (
    <div className="App">
      <header>
        {/* <BlogArticle/> */}
        <BlogPost/>
        <CategoryTag/>
      </header>
    </div>
  );
}

export default App;
