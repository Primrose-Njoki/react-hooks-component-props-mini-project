import React from "react";
import blogData from "../data/blog"; //imports the blog data
import Header from "./Header";
import ArticleList from "./ArticleList";
import About  from "./About";
import logo from '../assets/logo.png'
import Article from "./Article";


console.log(blogData); 


function App() {
 return (
    <div className="App">
      <Header name = {blogData.name} />
      <About  image = {blogData.image} about ={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
      <Article /> 
      <img src={logo} alt="Blog logo" />
    </div>
  );
  
}

export default App;
