import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Post.css";

const Post = () => {
  const [acceptedFiles, setAcceptedFiles] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded files
    setAcceptedFiles(acceptedFiles);
    console.log("Accepted Files:", acceptedFiles);
  }, []);
  const upload=()=>{
    // backend call
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      style={{ marginTop: "10rem", width: "100%", height: "50vw" }}
      className="text-center"
    >
      <div
        {...getRootProps()}
        style={{ height: "40vh" }}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        <div>
          <p style={{ fontSize: "1.5rem", color: "gray" }}>CREATE A NEW POST</p>
          <hr style={{ color: "#fff" }} />
          <p style={{ color: "gray" }}>select from your computer</p>
          <hr style={{ color: "#fff" }} />

          <p style={{ color: "gray" }}>select from your drive</p>
        </div>
      </div>
      <button
        style={{
          color: "#fff",
          backgroundColor: "#000",
          border: "2px solid #C018CE",
          padding: "1rem 3rem",
          borderRadius: "10px",
        }}
        onClick={() => {
          alert("document sent!!!")
        }}
      >
        UPLOAD
      </button>
    </div>
  );
};

export default Post;
