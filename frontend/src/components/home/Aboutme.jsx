import React from "react";
import aboutMe from "../../data/aboutMe"
import "./styles/AboutMe.scss";

const Aboutme = () => {
  return (
    <section className="aboutme">
      <div className="inner">
        {/* 왼쪽 프로필 */}
        <div className="profile">
          <h2>profile</h2>
          <p>
            {aboutMe.basic.name} | {aboutMe.basic.age}세 <br />
            {aboutMe.basic.location} <br />
            MBTI: {aboutMe.basic.mbti}
          </p>

          <ul>
            {aboutMe.experiences.map((exp, idx) => (
              <li key={idx}>{exp}</li>
            ))}
          </ul>
        </div>

        {/* 오른쪽 제목 */}
        <div className="title">
          <i className="star">✱</i>
          <h1>ABOUTME</h1>
        </div>
      </div>

      {/* 아래쪽 3개의 메뉴 */}
      <div className="menus">
        <div className="menu">
          <h3>menu 1</h3>
          <ul>
            {aboutMe.skills.slice(0, 3).map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="menu">
          <h3>menu 2</h3>
          <ul>
            {aboutMe.skills.slice(3, 5).map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="menu">
          <h3>menu 3</h3>
          <ul>
            {aboutMe.skills.slice(5).map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
