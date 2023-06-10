import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/img (1).jpeg";
import img2 from "../../../assets/img (2).jpeg";
import img3 from "../../../assets/img (3).jpeg";
import img4 from "../../../assets/img (4).jpeg";

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
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768, // Medium devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480, // Small devices
        settings: "unslick", // Remove the Slider functionality
      },
    ],
  };

  return (
    <div className="hidden md:block">
      <Slider {...settings}>
        <div>
          <h3>
            <img src={img1} alt="Banner 1" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={img2} alt="Banner 2" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={img3} alt="Banner 3" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={img4} alt="Banner 4" />
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
