import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { POSTURL } from "../../../Global/GlobalVariable";
import NoImage from "../../../assests/img/no-image.png";

function RecentPosts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${POSTURL}?_embed`)
      .then((res) => res.json())
      .then((res) => res.sort((a, b) => a.date - b.date)) // Sorting
      .then((res) => res.slice(0, 6)) // Slices
      .then((res) => setData(res));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="recent-blogs">
      <div className=" container">
        <h3 className="ribbon txt_center">Our Recent Blogs</h3>
        <Slider {...settings}>
          {data.map((currElem, index) => {
            return (
              <div className="recentblog" key={index}>
                <div className="image">
                  {currElem._embedded["wp:featuredmedia"] ? (
                    <Link to={`/blog/${currElem.slug}`}>
                      <img
                        loading="lazy"
                        width={"90%"}
                        height={"200px"}
                        style={{ borderRadius: 5 }}
                        src={
                          currElem._embedded["wp:featuredmedia"][0]
                            .media_details.sizes.full.source_url
                        }
                        alt="Featured"
                      />
                    </Link>
                  ) : (
                    <>
                      <img src={NoImage} alt="no-image" />
                    </>
                  )}
                  <div className="bottom">
                    <Link to={`/blog/${currElem.slug}`}>
                      <strong>{currElem.title.rendered}</strong>
                    </Link>
                    <div className="flex">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: currElem.excerpt.rendered.slice(0, 250),
                        }}
                      />
                    </div>
                  </div>
                </div>
                <Link
                  className="author"
                  to={`/author/${currElem._embedded.author[0].slug}`}
                >
                  By {currElem._embedded.author[0].name}
                </Link>
                <div className="post-date flex">
                  <i className="fa-solid fa-clock"></i>
                  <p>{currElem.date.slice(0, 10)}</p>
                </div>
                <Link to={`/blog/${currElem.slug}`} className="btn">
                  <span>Learn More</span>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
export default RecentPosts;
