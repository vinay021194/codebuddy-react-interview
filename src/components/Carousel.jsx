import React, { memo } from "react";
import { Carousel } from "primereact/carousel";
import { newsItems } from "./itemConstant";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../index.css";

const newsTemplate = (newsItem) => {
  return (
    <div className="m-2 flex items-center rounded-sm bg-gray-900 bg-opacity-60 p-2 shadow-lg">
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="h-16 w-16 rounded-l-lg object-cover"
      />
      <div className="p-2 text-white">
        <h3 className="text-sm font-bold">{newsItem.title}</h3>
        <div className="h-16 overflow-y-auto">
          <p className="text-xs">{newsItem.description}</p>
        </div>
      </div>
    </div>
  );
};

const CarouselComponent = memo(() => {
  return (
    <div className="fixed bottom-0 flex w-full justify-center p-4">
      <div className="w-full max-w-screen-lg">
        {" "}
        <Carousel
          value={newsItems}
          itemTemplate={newsTemplate}
          numVisible={5}
          numScroll={1}
          responsiveOptions={[
            {
              breakpoint: "1200px",
              numVisible: 5,
              numScroll: 1,
            },
            {
              breakpoint: "1024px",
              numVisible: 4,
              numScroll: 1,
            },
            {
              breakpoint: "768px",
              numVisible: 3,
              numScroll: 1,
            },
            {
              breakpoint: "560px",
              numVisible: 2,
              numScroll: 1,
            },
            {
              breakpoint: "375px",
              numVisible: 1,
              numScroll: 1,
            },
          ]}
          className="custom-carousel"
        />
      </div>
    </div>
  );
});

export default CarouselComponent;
