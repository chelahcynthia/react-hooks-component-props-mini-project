import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList"
import Article from "./Article";




console.log(blogData);

function App() {
  return (
  
    

    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <div>
        <Header name={blogData.name} />
        <About image={blogData.image} about={blogData.about} />
        <ArticleList posts={blogData.posts} />
        <Article />
      </div>
    </div>
    

    
  );
}

export default App;
