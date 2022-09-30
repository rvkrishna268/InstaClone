import React from "react";
import GetWithHeader from "../Header/GetWithHeader";
import { useNavigate } from "react-router-dom";
import "./PostCard.css";

const PostCard = () => {
  const url = "https://instaclone-app-10x.herokuapp.com";
  //const url="http://localhost:8080";
  const navigate = useNavigate();
  return (
    <>
      <div className="PostCardContainer">
        <form
          className="PostCardForm"
          encType="multipart/form-data"
          onSubmit={(e) => {
            e.preventDefault();
            const userData = new FormData();
            userData.append("description", e.target.description.value);
            userData.append("author", e.target.author.value);
            userData.append("location", e.target.location.value);
            userData.append("image", e.target.image.files[0]);
            userData.append("likes", Math.ceil(Math.random() * 100));
            fetch(`${url}/Post`, {
              method: "POST",
              body: userData,
            })
              .then((res) => res.json())
              .then((result) => {
                console.log(result);
                window.location.reload(true);
              });
            navigate("/PostView");
          }}
        >
          <input type="file" className="custom-file-input" name="image" />
          <input type="text" placeholder="Author" name="author" />
          <input type="text" placeholder="Location" name="location" />
          <input type="textarea" placeholder="Description" name="description" />
          <input type="submit" value="Upload Post" className="submit" />
        </form>
      </div>
    </>
  );
};

export default GetWithHeader(PostCard);
