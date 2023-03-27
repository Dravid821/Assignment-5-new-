import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageSlider = ({ images }) => {
  return (
    <Carousel>
        {images.map((img) => {
          return <div><img className="shade" src={img} /></div>;
        })}
    </Carousel>
  );
};

export default ImageSlider;
