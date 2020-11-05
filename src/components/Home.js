import React from "react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

// const slideImages = [
//   "../static/admission-form-design-layout-fields-image-71348504.jpg",
//   "../static/depositphotos_118990438-stock-photo-simple-abstract-background.jpg",
//   "/src/static/home.jpg",
// ];

const Home = () => {
  return (
    <div>
      {/* <Slide easing="ease">
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url('../static/admission-form-design-layout-fields-image-71348504.jpg')`,
            }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide> */}
      <AwesomeSlider animation="cubeAnimation">
      <div data-src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg" />
    <div data-src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"  />
    <div data-src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg" />
  </AwesomeSlider>
    </div>
  );
};

export default Home;
