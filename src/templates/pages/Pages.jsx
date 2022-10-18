import React, { useEffect, useState } from "react";
import Loader from "../components/common/Loader";
import { PAGEURL } from "../../Global/GlobalVariable";
import Tags from "./Sidebar/Category";
import RecentPosts from "./Sidebar/Recentpost";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";

const Pages = () => {
  const { param } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllPosts = async () => {
    var responses = [];
    let maxPages = 50;
    let page = 1;
    let pages;

    while (true) {
      const res = await fetch(`${PAGEURL}?page=${page}`);
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
  }, []);

  const filterPage = data.filter((curElem) => curElem.slug === param);
  const getData = filterPage[0];
  return (
    <>
      {loading ? (
        <Loader />
      ) : getData !== undefined ? (
        getData.template === "wp-custom-template-side-bar" ? (
          <div className="sidebar">
            <div className="left">
              <div
                dangerouslySetInnerHTML={{
                  __html: getData.content.rendered,
                }}
              />
            </div>
            <div className="right">
              <Tags />
              <RecentPosts />
            </div>
          </div>
        ) : (
          <div className="fullwidth">
            <div
              dangerouslySetInnerHTML={{
                __html: getData.content.rendered,
              }}
            />
          </div>
        )
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default Pages;
