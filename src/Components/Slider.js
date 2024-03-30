import SimpleImageSlider from "react-simple-image-slider";
import bannerOne from "../assets/banner/bannerImgOne.jpg";
import bannerTwo from "../assets/banner/bannerImgTwo.jpg";
import bannerThree from "../assets/banner/bannerImgThree.jpg";
import bannerFour from "../assets/banner/bannerImgFour.jpg";
import bannerFive from "../assets/banner/bannerImgFive.jpg";
import "../Css/card.css";

const images = [
  { url: bannerOne },
  { url: bannerTwo },
  { url: bannerThree },
  { url: bannerFour},
  { url: bannerFive },
];

export default function slider(){
  return (
    <div className="mb-5">

      <SimpleImageSlider
      className="slider"
        width="100%"
        height={504}
        images={images}
        showBullets={true}
        autoPlay={true}
        
        bullets={(index) => (
            <div className="rsis-bullet" data-bullet-number={index + 1}></div>
          )}
      />
    </div>
  );
}