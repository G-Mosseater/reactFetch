import { useState, useEffect } from "react";
import './App.css'
type Link = {
  href: string;
};
type Item = {
  links: Link[];
};
const App = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://images-api.nasa.gov/search?q=nebula"
      );
      //const response = await fetch("https://api.spacexdata.com/v3/launches");
      const json = await response.json();
      setData(json.collection.items);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="container">
        {data.map((item, index) => {
          return <img className="images" src={item.links &&  item.links[0].href} key={index}/>;
        })}
      </div>
    </>
  );
};
export default App;

// <iframe
// width="560"
// height="315"
// src={`https://www.youtube.com/embed/${line?.links.youtube_id}`}
// title="YouTube video player"
// frameborder="0"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// referrerpolicy="strict-origin-when-cross-origin"
// allowfullscreen
// ></iframe>
