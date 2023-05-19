import React from 'react';
import image1 from '../../../images/bnr1.png';
import image2 from '../../../images/bnr2.png';
import image3 from '../../../images/bnr3.png';
import BannerBtmCard from './BannerBtmCard';
const BannerBtm = () => {
    const cardsItem = [
        {
            _id:1,
            title:"Learn new skills ",
            des:"With flexible courses ",
            image:image1
        },
        {
            _id:2,
            title:"Expert Teacher  ",
            des:"Upskill with Speacilist",
            image:image2
        },
        {
            _id:3,
            title:"Online Degrees",
            des:"Study flexibly online",
            image:image3
        }
    ]
    return (
        <div className='py-10'>
          <div className='container mx-auto my-5 px-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-12 sm:gap-y-16 gap-y-7'>
          {
            cardsItem?.map(singleItem => <BannerBtmCard singleItem={singleItem} key={singleItem._id}></BannerBtmCard>)
           }
          </div>
        </div>
    );
};

export default BannerBtm;