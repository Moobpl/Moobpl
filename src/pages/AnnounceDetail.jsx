import React from "react";
import { useSelector } from "react-redux";

function AnnounceDetail() {
  const { post } = useSelector((state) => state.info)
  console.log(post)
  const { id } = useParams()
  const findPost = post.find((item)=>{
    return item._id == id
  })

  return (
    <div>
      <h5>{findPost.title}</h5>
    </div>
  );
}

export default AnnounceDetail;
