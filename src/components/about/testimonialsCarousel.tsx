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
    slidesToShow: 3,  // Réduire à 1 slide sur les petits écrans
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  // 2 slides sur les écrans moyens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,  // 1 slide sur les petits écrans
        },
      },
    ],
  };

  return (
    <div className="mt-12 slider-container font-display px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Témoignages</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial: Testimonial) => (
          <div key={testimonial.id} className="bg-gray-100 m-4 p-4 sm:m-6  sm:p-6 rounded-lg shadow-md max-w-xs  h-40">
            <div className="flex items-center mb-4">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4" />
              <h4 className="text-md sm:text-lg font-semibold">{testimonial.name}</h4>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">"{testimonial.feedback}"</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
