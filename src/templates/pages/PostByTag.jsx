import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import { PAGEURL, POSTURL } from "../../Global/GlobalVariable";
import Tags from "./Sidebar/Category";
import RecentPosts from "./Sidebar/Recentpost";
const renderItem = (data, pages) => {
  return (
    <>
      {pages.map((curElem, index) => {
        return (
          <>
            {curElem.template === "wp-custom-template-side-bar" &&
              curElem.slug === "blog" ? (
              <ul className="sidebar" key={index}>
                <div className="leftsidebar">
                  {data.map((currElem, index) => {
                    return (
                      <div key={index}>
                        <div className="blogtitle">
                          <Link to={`/blog/${currElem.slug}`}>
                            <h4>{currElem.title.rendered}</h4>
                          </Link>
                        </div>
                        <div className="image">
                          {currElem._embedded["wp:featuredmedia"] ? (
                            <Link to={`/blog/${currElem.slug}`}>
                              <img
                                height={"90%"}
                                width={"90%"}
                                src={
                                  currElem._embedded["wp:featuredmedia"][0]
                                    .media_details.sizes.full.source_url
                                }
                                alt="Featured"
                              />
                            </Link>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="bottom">
                          <Link
                            to={`/author/${currElem._embedded["author"][0].slug}`}
                          >
                            <p>{currElem._embedded["author"][0].name}</p>
                          </Link>
                          <p>{currElem.date.slice(0, 10)}</p>
                          {currElem._embedded["wp:term"][0].map(
                            (currElems, index) => {
                              return (
                                <Link to={`/category/${currElems.name}`}>
                                  <p key={index}>{currElems.name}</p>
                                </Link>
                              );
                            }
                          )}
                          <div
                            dangerouslySetInnerHTML={{
                              __html: currElem.excerpt.rendered,
                            }}
                          />
                        </div>
                        <Link to={`/blog/${currElem.slug}`} className="btn">
                          <span>Read More</span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="rightsidebar">
                  <Tags />
                  <RecentPosts />
                </div>
              </ul>
            ) : curElem.template === "wp-custom-template-full-width" &&
              curElem.slug === "blog" ? (
              <div className="fullwidth">
                <ul>
                  {data.map((currElem, index) => {
                    return (
                      <div key={index}>
                        <div className="blogtitle">
                          <Link to={`/blog/${currElem.slug}`}>
                            <h4>{currElem.title.rendered}</h4>
                          </Link>
                        </div>
                        <div className="image">
                          {currElem._embedded["wp:featuredmedia"] ? (
                            <Link to={`/blog/${currElem.slug}`}>
                              <img
                                height={"90%"}
                                width={"90%"}
                                src={
                                  currElem._embedded["wp:featuredmedia"][0]
                                    .media_details.sizes.full.source_url
                                }
                                alt="Featured"
                              />
                            </Link>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="bottom">
                          <div className="blog-stats">
                            <Link
                              to={`/author/${currElem._embedded["author"][0].slug}`}
                            >
                              <p>{currElem._embedded["author"][0].name}</p>
                            </Link>
                            <p>{currElem.date.slice(0, 10)}</p>
                            {currElem._embedded["wp:term"][0].map(
                              (currElems, index) => {
                                return (
                                  <Link to={`/category/${currElems.slug}`}>
                                    <p key={index}>{currElems.name}</p>
                                  </Link>
                                );
                              }
                            )}
                          </div>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: currElem.excerpt.rendered,
                            }}
                          />
                        </div>
                        <Link to={`/blog/${currElem.slug}`} className="btn">
                          <span>Read More</span>
                        </Link>
                      </div>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <></>
            )}
          </>
        );
      })}
    </>
  );
};
const PostByTag = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaximumPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);
  const [data, setData] = useState([]);
  const [pages, setPages] = useState([]);
  const { tagname } = useParams();

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  let posts = [];
  data.map((cur) => {
    cur._embedded["wp:term"].map((curr) => {
      curr.map((currE) =>
        currE.slug === tagname && currE.taxonomy === "post_tag" ? (
          posts.push(cur)
        ) : (
          <></>
        )
      );
    });
  });
  const page = [];
  for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
    page.push(i);
  }
  console.log(posts);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);
  const renderPageNumber = page.map((number) => {
    if (number < maxPageNumberLimit + 1 && number >= minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const getAllPosts = async () => {
    var responses = [];
    let maxPages = 100;
    let page = 1;
    let pages;

    while (true) {
      const res = await fetch(`${POSTURL}?page=${page}&_embed`);
      pages = await res.json();
      if (pages.code === "rest_post_invalid_page_number") {
        setLoading(false);
        break;
      }
      if (page > maxPages) {
        break;
      }
      responses.push(pages);
      page++;
    }
    setData(responses.flat());
  };
  useEffect(() => {
    getAllPosts();
    fetch(`${PAGEURL}`)
      .then((res) => res.json())
      .then((res) => setPages(res));
  }, [tagname]);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaximumPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaximumPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [handleNext, handlePrev]);

  let pageIncrement = null;
  if (page.length > maxPageNumberLimit) {
    pageIncrement = <li onClick={handleNext}>&hellip;</li>;
  }
  let pageDecrement = null;
  if (page.length > maxPageNumberLimit) {
    pageDecrement = <li onClick={handlePrev}>&hellip;</li>;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          {renderItem(currentItems, pages, tagname)}
          {page.length > 1 ? (
            <div className="pageNumber">
              <button
                onClick={handlePrev}
                disabled={currentPage === page[0] ? true : false}
              >
                Previous
              </button>
              {pageIncrement}
              {renderPageNumber}
              {pageDecrement}
              <button
                onClick={handleNext}
                disabled={currentPage === page[page.length - 1] ? true : false}
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default PostByTag;
