import Slider from 'react-slick';
import { testimonials } from '../../data/aboutData';
import { Testimonial } from '../../type';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialsCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: true
  };

  return (
    <div className="mt-12 slider-container font-display ">
      <h2 className="text-3xl font-bold text-center mb-6">Témoignages</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial: Testimonial) => (
          <div key={testimonial.id} className="bg-gray-100 m-6 p-6 rounded-lg shadow-md max-w-md h-40">
            <div className="flex items-center mb-4">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <h4 className="text-lg font-semibold">{testimonial.name}</h4>
            </div>
            <p className="text-gray-600">"{testimonial.feedback}"</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
