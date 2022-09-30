import React, { useEffect, useState } from "react";
import GetWithHeader from "../Header/GetWithHeader";
import "./PostView.css";
const url="https://instaclone-app-10x.herokuapp.com";
// const url = "http://localhost:8080";
const PostView = () => {
  const [posts, setPosts] = useState([]);
  const getUserData = async () => {
    fetch(`${url}/getPosts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
      });
  };
  console.log(posts);
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {posts.length > 0 ? (
        <div className="post-container">
          {posts.reverse().map((post, i) => {
            return (
              <section className="card" key={i}>
                <section className="card-header">
                  <div>
                    <div className="card-header-name">{post.author}</div>
                    <div className="card-header-place   ">{post.location}</div>
                  </div>
                  <span>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                  </span>
                </section>
                <section className="card-image">
                  <img
                    src={`${url}/Images/${post.image}`}
                    alt={`${post.image}`}
                  />
                </section>
                <section className="card-action">
                  <span>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </span>
                  <span>
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </span>
                  <span>
                    <i className="fa fa-comment" aria-hidden="true"></i>{" "}
                  </span>
                  <span>
                    <i className="fa fa-bookmark" aria-hidden="true"></i>{" "}
                  </span>
                  <span>{post.date}</span>
                </section>
                <section className="card-likes">{post.likes} likes</section>
                <section className="card-description">
                  {post.description}
                </section>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="zeroPosts">
          <h3>Wanna see MAGIC ? Click on Camera icon!!!</h3>
        </div>
      )}
    </>
  );
};
export default GetWithHeader(PostView);
