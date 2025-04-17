import React from "react";
import blogData from "../data/blog"; //imports the blog data
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import About  from "./components/About"

console.log(blogData); 

function App() {
const blogData ={
  name: "Underreacted",
  image: logo,
  about: "A blog about learning React",
  posts: [

  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
    minutes: 5,
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
    minutes: 15,
  },
  {
    id: 3,
    title: "Function vs Class Components",
    preview: "React, meet OOJS.",
    minutes: 47,
  }
]
};

  return (
    <div className="App">
      <Header name = {blogData.name} />
      <About image = {blogData.image} about ={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
