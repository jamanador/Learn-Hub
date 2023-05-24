import React from "react";

const BannerBtmCard = ({singleItem}) => {
    const {image,title,des} =singleItem
  return (
    <div className="flex justify-center items-center card card-side bg-base-100 border border-gray-200 dark:border-gray-800 dark:bg-slate-900 dark:text-white p-2">
      <figure>
        <img src={image} alt="" className="dark:rounded-lg dark:w-16 w-24 rounded-full"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default BannerBtmCard;
