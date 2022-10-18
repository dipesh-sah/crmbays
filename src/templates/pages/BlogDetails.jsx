import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { POSTURL } from "../../Global/GlobalVariable";
import Loader from "../components/common/Loader";

const BlogDetail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let { slug } = useParams();

  useEffect(() => {
    fetch(`${POSTURL}?_embed`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          {data.map((currElem, index) => {
            return (
              <div key={index} className="blogDetail">
                {currElem.slug === slug ? (
                  <>
                    <div className="blogtitle">
                      <h2>{currElem.title.rendered}</h2>
                    </div>
                    <div className="image">
                      {currElem._embedded["wp:featuredmedia"] ? (
                        <img
                          loading="lazy"
                          width={"90%"}
                          height={"90%"}
                          src={
                            currElem._embedded["wp:featuredmedia"][0]
                              .media_details.sizes.full.source_url
                          }
                          alt="Featured"
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="bottom">
                      <div className="blog-stats">
                        <div className="user">
                          <i className="fa-solid fa-user"></i>
                          <Link
                            to={`/author/${currElem._embedded["author"][0].slug}`}
                          >
                            <p>{currElem._embedded["author"][0].name}</p>
                          </Link>
                        </div>
                        <p>
                          <i className="fa-solid fa-calendar-day"></i>
                          {currElem.date.slice(0, 10)}
                        </p>
                        <div className="categorized">
                          <i className="fa-solid fa-tags"></i>
                          {currElem._embedded["wp:term"][0].map(
                            (currElems, index) => {
                              return (
                                <React.Fragment key={index}>
                                  <Link to={`/category/${currElems.slug}`}>
                                    <p>{currElems.name}</p>
                                  </Link>
                                </React.Fragment>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div
                        className="blogDetail"
                        dangerouslySetInnerHTML={{
                          __html: currElem.content.rendered,
                        }}
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default BlogDetail;
