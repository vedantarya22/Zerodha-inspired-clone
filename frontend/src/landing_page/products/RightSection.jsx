import React from 'react';
function RightSection({
  imageUrl,
  productName,
  productDescription,
  linkName,
  learnMore,
}) {
    return ( 
        <div className="container p-5">
            <div className="row align-items-center">
                <div className="col-4 ">
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>{linkName}<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <img src={imageUrl} alt="product image"/>
                </div>
            </div>

        </div>
        
     );
}

export default RightSection;