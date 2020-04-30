import React, { useEffect, useState } from "react";
import "./App.css";
import Image from "./Image";

const App = () => {
  const API = "16268968-e4a1fae025bf6451f220b2f21";

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("mango");

  useEffect(() => {
    getImages();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const getImages = async () => {
    const response = await fetch(
      `https://pixabay.com/api/?key=${API}&q=${query}&image_type=photo`
    );
    const data = await response.json();
    setImages(data.hits);
    console.log(data.hits);
  };

  return (
    <div>
      <form onSubmit={getSearch} className="submit-form">
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          className="submit-input"
          placeholder="search for images"
        />
        <button className="submit-btn" type="submit">
          Search
        </button>
      </form>
      <div className="image_container">
        {images.map((image) => (
          <Image key={image.id} tags={image.tags} image={image.largeImageURL} />
        ))}
      </div>
    </div>
  );
};

export default App;
