import React, { useState } from "react";
import { linkIcon } from "../assets";

const Demo = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const handleSubmit = async (e) => {
    alert("puch wa sei");
  };
  return (
    <main className="mt-16 w-full max-w-xl ">
      <div className="flex flex-col w-full gap-2">
        <form
          action=""
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="linkIcon"
            className=" absolute my-2 ml-3 w-5 left-0"
          />
          <input
            type="url"
            name=""
            id=""
            placeholder="Enter a url"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            className=" url_input peer focus:outline-none"
          />
          <button
            className=" submit_btn peer-hover:bg-slate-700 peer-focus:text-gray-700 peer-focus:bg-gray-200"
            type="submit"
          >
            &#x279D;
          </button>
        </form>
      </div>
    </main>
  );
};

export default Demo;
