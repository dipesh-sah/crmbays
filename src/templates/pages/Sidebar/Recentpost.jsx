import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { POSTURL } from "../../../Global/GlobalVariable";
import NoImage from "../../../assests/img/no-image.png";

function RecentPosts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${POSTURL}?_embed`)
      .then((res) => res.json())
      .then((res) => res.sort((a, b) => a.date - b.date)) // Sorting
      .then((res) => res.slice(0, 9)) // Slices
      .then((res) => setData(res));
  }, []);

  return (
    <div className="sidebar-recent-blogs ">
      <div className=" container">
        <h5 className="ribbon txt_center">Our Recent Blogs</h5>
        {data.map((currElem, index) => {
          return (
            <div className="recent-post " key={index}>
              <Link to={`/blog/${currElem.slug}`}>
                <div className="image">
                  {currElem._embedded["wp:featuredmedia"] ? (
                    <img
                      loading="lazy"
                      style={{ borderRadius: 5 }}
                      src={
                        currElem._embedded["wp:featuredmedia"][0].media_details
                          .sizes.full.source_url
                      }
                      alt="Featured"
                    />
                  ) : (
                    <>
                      <img src={NoImage} alt="no-image" />
                    </>
                  )}
                  <div className="excerpt">
                    <strong>{currElem.title.rendered}</strong>
                  </div>
                  <div className="date">{currElem.date}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RecentPosts;
