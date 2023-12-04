import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
// import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useReviews from "../../../hooks/useReviews";

const Testimonials = () => {
  const [reviews] = useReviews();
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/reviews')
  //     .then(res => res.json())
  //     .then(data => setReviews(data))
  // }, [])

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div>
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What our client says"}
      ></SectionTitle>

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >

        {
          reviews.map(review => <SwiperSlide key={review._id}>
            <div className="m-16 flex flex-col items-center space-y-3">
              <p className="text-3xl">{review.camp_name}</p>
              <p>Date: {review.time}</p>
              <Rating
                style={{ maxWidth: 150 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonials;