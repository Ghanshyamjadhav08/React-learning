import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postList-store";
import WelcomeMsg from "./welcomeMsg";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

 const handlegetPostClick = () =>{
  fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(data =>{
    addInitialPosts(data.posts)
  });
 }
  return (
    <>
    
      {postList.length === 0 && <WelcomeMsg onGetPostClick={handlegetPostClick} />}
    
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
