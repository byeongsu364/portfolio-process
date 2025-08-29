import React from "react";
import { works } from "../../utils/works.js";
import "./styles/Works.scss";
import p1 from "../home/img/p-1.png";
import p2 from "../home/img/p-2.png";
import p3 from "../home/img/p-3.png";

const imageMap = {
  "p-1.png": p1,
  "p-2.png": p2,
  "p-3.png": p3,
};

const Work = () => {
  return (
    <div className="inner works-inner">
      <h1 className="tit">Works.</h1>

      <div className="works-container">
        {works.map((item) => (
          <div key={item.id} className="in-wrap work-card">
            <a
              href={item.links.demo}
              className="t-wrap"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="list-lst">{item.title}</h4>
              <p className="txt">{item.subtitle}</p>
              <div className="hash-wrap">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="hash">
                    #{tag}
                  </span>
                ))}
              </div>
            </a>
            <a
              href={item.links.demo}
              className="img-wrap"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imageMap[item.thumbnail.split("/").pop()]}
                alt={item.title}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
