import React from "react";

const BannerBtmCard = ({singleItem}) => {
    const {image,title,des} =singleItem
  return (
    <div className="card card-side bg-base-100 border border-gray-200">
      <figure>
        <img src={image} alt="" className="rounded-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default BannerBtmCard;
