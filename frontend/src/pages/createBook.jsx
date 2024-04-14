import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";

const createBook = () => {
  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);
  const [publishYear, setPublishYear] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();

  const HandleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(false);
    axios
      .post("http://localhost:3000/books", data)
      .then((res) => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occured.");
        setLoading(false);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 max-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => {
              setPublishYear(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={HandleSaveBook}>
          Create
        </button>
      </div>
    </div>
  );
};

export default createBook;
