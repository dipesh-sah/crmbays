import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TAGS } from "../../../Global/GlobalVariable";

const Tags = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch(`${TAGS}`)
      .then((res) => res.json())
      .then((res) => setTags(res));
  }, []);

  return (
    <div>
      <h5>Tags</h5>
      {tags.map((curElem, index) => {
        return (
          <p className="tags" key={index}>
            <Link to={`/tag/${curElem.slug}`}>
            {curElem.name}
            </Link>
          </p>
        );
      })}
    </div>
  );
};

export default Tags;
