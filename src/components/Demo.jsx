import React, { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
const Demo = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");
  console.log(allArticles);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      setArticle(newArticle);
      const updateAll = [...allArticles, newArticle];
      setAllArticles(updateAll);
      localStorage.setItem("articles", JSON.stringify(updateAll));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  useEffect(() => {
    const articles = JSON.parse(localStorage.getItem("articles"));
    if (articles) setAllArticles(articles);
  }, []);
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

        <div className=" overflow-y-auto flex flex-col gap-1 max-h-60">
          {allArticles.map((Article, i) => (
            <div
              key={`link-${i}`}
              onClick={() => setArticle(Article)}
              className=" link_card"
            >
              <div
                className=" copy_btn"
                onClick={() => handleCopy(Article.url)}
              >
                <img
                  src={Article.url == copied ? tick : copy}
                  alt="copy_ion"
                  className=" w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className=" font-satoshi  flex-1 truncate text-sm  font-semibold text-blue-500/70">
                {Article.url}
              </p>
            </div>
          ))}
        </div>
        <div className="my-10 flex items-center justify-center  max-w-full">
          {isFetching ? (
            <img src={loader} />
          ) : error ? (
            <>
              <p className=" font-inter text-red-500 font-semibold">
                Well that is something Odd
              </p>
              <p className="font-bold text-red-800 font-inter">
                {error.message}
              </p>
            </>
          ) : (
            article.summary && (
              <div className="flex flex-col items-center justify-center gap-3">
                <h1 className=" text-gray-600 text-xl font-bold">
                  Article <span className="blue_gradient">Summary</span>
                </h1>
                <div className=" summary_box">
                  <p className="font-inter text-gray-700 font-medium  text-sm">
                    {article.summary}
                  </p>
                  `
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default Demo;
