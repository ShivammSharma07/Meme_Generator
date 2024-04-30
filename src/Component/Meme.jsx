import React from "react";
// import meme from "../ApiData";

export default function Meme() {
  const [memeSrc, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imgUrl: "",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  function getMeme(e) {
    e.preventDefault();
    const radomNumber = Math.floor(Math.random() * allMemes.length);
    let url = allMemes[radomNumber].url;
    // console.log(url);
    setMeme((prev) => ({
      ...prev,
      imgUrl: url,
    }));
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main>
      <form action="" className="form">
        <input
          type="text"
          className="form-inputs"
          placeholder="top-text"
          name="topText"
          value={memeSrc.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-inputs"
          placeholder="bottom-text"
          name="bottomText"
          value={memeSrc.bottomText}
          onChange={handleChange}
        />
        <button className="form-button" onClick={getMeme}>
          Get a new meme image
        </button>
      </form>
      <div className="meme">
        <img src={memeSrc.imgUrl} className="meme--image" />
        <h2 className="meme--text top">{memeSrc.topText}</h2>
        <h2 className="meme--text bottom">{memeSrc.bottomText}</h2>
      </div>
    </main>
  );
}
