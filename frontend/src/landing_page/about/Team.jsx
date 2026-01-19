import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center fs-3">People</h2>
      </div>

      <div className="row mt-5">
        <div className="col-6 text-center">
          <img
            src="\media\myPic.jpeg"
            alt="founder img"
            style={{ borderRadius: "", width: "50%", marginBottom: "1rem" }}
          />
          <h5>Vedant Arya </h5>
          <p>Developer </p>
        </div>
        <div className="col-6 text-muted fs-5">
          <p>
            Vedant is a 3rd-year B.Tech student at MIT-WPU and a software
            developer who loves building clean, scalable products that feel
            effortless to use. He enjoys turning ideas into real applications
            with strong UI, solid backend logic, and a focus on performance.
          </p>
          <p>
            He’s currently looking for opportunities where he can contribute,
            learn fast, and ship meaningful work.
          </p>

          <p>Debugging at 2 AM is his zen — hiring him might be yours.</p>

          <p>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/vedantarya22/"
              style={{ textDecoration: "none" }}
            >
              Linkedin
            </a>
            /{" "}
            <a
              href="https://github.com/vedantarya22"
              style={{ textDecoration: "none" }}
            >
              Github
            </a>
            /{" "}
            <a
              href="https://www.instagram.com/vedantarya.22/"
              style={{ textDecoration: "none" }}
            >
              Instagram
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
