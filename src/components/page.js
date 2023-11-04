import { React, useRef } from "react";
import "./page.css";
import bg1 from "../media/bg1.jpg";
import bg2 from "../media/bg2.jpg";
import bg3 from "../media/bg3.jpg";
import bg4 from "../media/bg4.jpg";

const Page = () => {
  let imageContentRef = useRef(null);

  const images = [bg1, bg2, bg3, bg4];

  const prev = () => (imageContentRef.current.scrollLeft -= 250);

  const next = () => (imageContentRef.current.scrollLeft += 250);
  return (
    <div className="page-container">
      <div className="content">
        <div className="prev" onClick={prev}></div>
        <div className="slide-panel" ref={imageContentRef}>
          {images.map((image) => {
            return <img src={image} alt="season" />;
          })}
        </div>
        <div className="next" onClick={next}></div>
      </div>
    </div>
  );
};
export default Page;
