import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "react-bootstrap";
import { useGetJobByCompanyIdQuery } from "@/redux/apiSlice";
import { useParams } from "react-router-dom";
import { Loading } from "@/hooks/SkeltonsData";
import { useDispatch } from "react-redux";
import { setFIlter } from "@/redux/FilterSlice";

const CarouselWithPagination = ({ currentPage, setCurrentPage, JobsByCompanyData: data, isFetching }) => {
  const dispatch = useDispatch()
  const sliderRef = useRef(null);
  useEffect(() => {
    data?.jobs?.length > 0 && currentPage === 1 && dispatch(setFIlter({ type: "jobid", value: data?.jobs?.[0]?._id }))
  }, [data]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (data?.totalPages && currentPage < data?.totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const CustomPrevArrow = () => (
    <div
      className="custom-prev-arrow"
      onClick={handlePrevPage}
      style={{
        position: "absolute",
        left: "-30px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 10,
      }}
    >
      <ChevronLeft />
    </div>
  );

  const CustomNextArrow = () => (
    <div
      className="custom-next-arrow"
      onClick={handleNextPage}
      style={{
        position: "absolute",
        right: "-30px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 10,
      }}
    >
      <ChevronRight />
    </div>
  );

  const handleSwipe = (index) => {
    const newPage = Math.ceil(index / 5) + 1; // Calculate the page based on the slide index
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  const settings = {
    dots: true,
    infinite: currentPage !== data?.totalPages,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    afterChange: handleSwipe, // Triggered after swipe or slide change
  };

  return (
    <Container>
      {
        isFetching ? <Loading /> : <Slider {...settings} ref={sliderRef}>
          {data?.jobs?.map((item) => (
            <div key={item._id} className="carousel-item" role="button" onClick={() => dispatch(setFIlter({ type: "jobid", value: item._id }))}>
              <h3>{item.title}</h3>
              <p>{item.position || "No Vacaacies"} Vacancies</p>
            </div>
          ))}
        </Slider>
      }


    </Container>
  );
};

export default CarouselWithPagination;
