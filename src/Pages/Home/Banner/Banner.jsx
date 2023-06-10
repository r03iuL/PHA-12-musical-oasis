import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/img (1).jpeg"
import img2 from "../../../assets/img (2).jpeg"
import img3 from "../../../assets/img (3).jpeg"
import img4 from "../../../assets/img (4).jpeg"
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true ,
    centerMode: true ,
    
  };

  return (
    <Slider {...settings} >
      <div>
        <h3><img src={img1} /></h3>
      </div>
      <div>
        <h3><img src={img2} /></h3>
      </div>
      <div>
        <h3><img src={img3} /></h3>
      </div>
      <div>
        <h3><img src={img4} /></h3>
      </div>
      
    </Slider>
  );
};

export default Banner;
