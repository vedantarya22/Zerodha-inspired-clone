import React from "react";
function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-5 ">
      <div className="row">
        <div className="col-5 p-5">
          <img src={imageUrl} alt="product Image" />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5 mt-5">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div className="mb-3">
            <a href={tryDemo} style={{ textDecoration: "none",marginRight:"2em"}}>
              Try demo<i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div>
            <a href={googlePlay}>
              <img src="\public\media\googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="\public\media\appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
