import mc from "./home_slider.module.scss";
import { useState } from "react";
//sliderImages//
import homeLabo from "../../images/homeSlider/homeLabo.jpg";
import homeExp from "../../images/homeSlider/homeExp.jpg";
import homeForma from "../../images/homeSlider/homeFormations.jpg";
import home from "../../images/homeSlider/home.jpg";

const HomeSlider = ({}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(0);

  console.log(sliderPosition);

  return (
    <div className={mc.container}>
      {sliderPosition > 0 && (
        <button
          className={`${mc.arrows} icon-arrow-ios-back-outline ${mc.arrow_left}`}
          // style={{ opacity: sliderPosition > 0 ? 1 : 0 }}
          onClick={() =>
            setSliderPosition(sliderPosition > 0 ? sliderPosition - 100 : 0)
          }
        ></button>
      )}
      {sliderPosition < 300 && (
        <button
          className={`${mc.arrows} icon-arrow-ios-forward-outline ${mc.arrow_right}`}
          onClick={() =>
            setSliderPosition(sliderPosition < 300 ? sliderPosition + 100 : 300)
          }
        ></button>
      )}
      <ul style={{ transform: `translateX(-${sliderPosition}vw)` }}>
        {/* HOME SLIDER */}
        <li>
          <div className={`${mc.images} adaptive-img-cover`}>
            <span>
              <img
                src={home}
                alt={`Logo Mirage Beauty Lab`}
                draggable="false"
              />
            </span>
          </div>
          <div className={mc.content}></div>
        </li>

        {/* LABO SLIDER */}
        <li>
          <div className={`${mc.images} adaptive-img-cover`}>
            <span>
              <img
                src={homeLabo}
                alt={`Logo Mirage Beauty Lab`}
                draggable="false"
              />
            </span>
          </div>
          <div className={mc.content}></div>
        </li>

        {/* EXPERIENCES SLIDER */}
        <li>
          <div className={`${mc.images} adaptive-img-cover`}>
            <span>
              <img
                src={homeExp}
                alt={`Logo Mirage Beauty Lab`}
                draggable="false"
              />
            </span>
          </div>
          <div className={mc.content}></div>
        </li>

        {/* FORMATIONS SLIDER */}
        <li>
          <div className={`${mc.images} adaptive-img-cover`}>
            <span>
              <img
                src={homeForma}
                alt={`Logo Mirage Beauty Lab`}
                draggable="false"
              />
            </span>
          </div>
          <div className={mc.content}></div>
        </li>
      </ul>
    </div>
  );
};

export default HomeSlider;
