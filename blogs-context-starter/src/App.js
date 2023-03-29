import React, { useContext, useEffect } from "react";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import "./App.css";

export default function App() {

  const {fetchBlogPost}=useContext(AppContext);

  useEffect(()=>
  {
    fetchBlogPost();
  },[])

  return (

    <div className="w-full h-full flex flex-col justify-center items-center gap-y-1">
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  
    );
}
