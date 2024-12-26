import React from 'react';
import BlogPost from './Pages/blog/BlogPost';
import CategoryTag from './Pages/blog/CategoryTag'
function App() {
  return (
    <div className="App">
      <header>
        <BlogPost/>
        <CategoryTag/>
      </header>
    </div>
  );
}

export default App;
