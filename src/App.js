import { Fragment, useEffect, useState } from "react";
import ImageContainer from "./components/ImageContainer";

function App() {
  let count = 10;
  let key = "3mkxYyaYYlqaNya6mSnm6iDXs0u18LkzKIgeFAE3caY";
  let url = `https://api.unsplash.com/photos/random/?client_id=${key}&count=${count}`;
  const [datas, changeDatas] = useState([]);
  const [imagesLoaded,changeImages]=useState(0)
  let readyState = false;
  
  useEffect(() => {
    addPhotos();
  }, []);

  const onload = () => {
    changeImages(oldImages=>oldImages+1);
    if (imagesLoaded === datas.length-1) {
      console.log("Yüklendi");
      readyState = true;
    }
  };
  const addPhotos = () => {
    fetch(url)
      .then((resolve) => resolve.json())
      .then((data) => changeDatas((oldarray) => [...oldarray, ...data]));
  };

  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000 &&
      readyState === true
    ) {
      addPhotos();
      readyState = false;
    }
  });

  return (
    <Fragment>
      <h1>Infinity Scroll</h1>
      <ImageContainer datas={datas} onload={onload} />
    </Fragment>
  );
}

export default App;
