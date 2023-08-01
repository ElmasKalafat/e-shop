import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import nike1 from "../../assets/top4.jpg";
import nike2 from "../../assets/top.jpg";
import nike3 from "../../assets/top3.jpg";
import "./Slider.css";

const handleDragStart = (e) => e.preventDefault();
const items = [
  {
    image: nike1,
    text: "En Şık",
  },
  {
    image: nike2,
    text: "En Yeni",
  },
  {
    image: nike3,
    text: "En Rahat",
  },
];

const SliderComp = () => {
  const renderSlide = (item, index) => (
    <div className="flex items-center bg-[#f1e2e9] px-6 py-6" key={index}>
      <img
        src={item.image}
        className="h-[380px]"
        onDragStart={handleDragStart}
        role="presentation"
      />

      <div className="space-x-7">
        <div className="text-5xl font-semibold ml-7">{item.text}</div>
        <p className="text-md my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quos, et
          dolorem nemo similique neque dolor amet animi nihil corrupti
          repudiandae ipsa sed natus sit magni sunt molestiae atque eum.
        </p>
        <div className="text-xl w-[180px] border-pink-400  shadow-md bg-gray-100 rounded-full cursor-pointer flex justify-center items-center border">
          İncele
        </div>
      </div>
    </div>
  );

  const carouselOptions = {
    disableButtonsControls: true,
    disableDotsControls: true,
  };

  return (
    <>
      <AliceCarousel
        mouseTracking
        autoPlay
        items={items.map((item, index) => renderSlide(item, index))}
        {...carouselOptions}
      />
    </>
  );
};

export default SliderComp;
