import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/header";
import Footer from "./Component/Footer";
import Sidebar from "./Component/sidebar"
import CreatePost from "./Component/CreatePost";
import PostList from "./Component/postList";

import PostListProvider from "./store/postList-store";



function App() {
   const [SelectedTab, setSelectedTab]  = useState("Home");


   
  return (
  <PostListProvider>
     <div className="app-container">
     <Sidebar SelectedTab={SelectedTab} setSelectedTab= {setSelectedTab}/>
      <div className="content">
      <Header/>
      {SelectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
      <Footer/>
      </div>
     </div>
     </PostListProvider>
     
      
    
  )
}

export default App
