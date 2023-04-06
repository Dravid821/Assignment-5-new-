import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageSlider = ({ images }) => {
  return (
     <Carousel>

        {images.map((img) => {
          return <img className="shade1" src={img}/>
        })}
      
    </Carousel>
  );
};

export default ImageSlider;
