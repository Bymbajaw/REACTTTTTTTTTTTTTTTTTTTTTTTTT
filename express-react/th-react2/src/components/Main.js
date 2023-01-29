import React, { useEffect, useState } from "react";

export default function Main() {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTxt, setSearchTxt] = useState();

  ////////
  useEffect(() => {
    getData();
  }, []);
  ////////
  const getData = () => {
    fetch("https://medium-api-psi.vercel.app/api/news")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        getCategories(data.result);
        setNews(data.result);
        setFilteredNews(data.result);
      })
      .catch((err) => console.log(err));
  };
  ////////
  const getCategories = (incomingData) => {
    const newCategory = [];

    incomingData.map(({ category }) => {
      if (!newCategory.includes(category)) {
        newCategory.push(category);
      }
    });
    ////////
    setCategories(newCategory);
  };

  const onChangeText = (e) => {
    setSearchTxt(e.target.value);

    console.log(e.target.value);

    filterNews(e.target.value);
  };
  ////////
  const filterNews = (searchParams) => {
    const filterNews = news.filter((newsItem) => {
      if (newsItem.title && newsItem.title.length > 0) {
        return newsItem?.title
          .toLowerCase()
          .includes(searchParams.toLowerCase());
      }
    });
    getCategories(filteredNews);
    setFilteredNews(filterNews);
  };
  ////////
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <input
            className="form-control"
            type="text"
            value={searchTxt}
            onChange={onChangeText}
          />
        </div>
      </div>
      <div className="row">
        <h1>New List</h1>
        <div className="col-md-12">
          {categories.map((cateItem) => {
            return (
              <>
                <h2>{cateItem}</h2>
                <div className="col-md-12 d-flex justify-content-between align-items-center">
                  {filteredNews.map(({ title, body, img }, i) => {
                    if (i < 4) {
                      return (
                        <div className="col-md-3">
                          <h4>{title}</h4>
                          <p>{body}</p>
                        </div>
                      );
                    }
                  })}
                </div>
              </>
            );
          })}
          <h2>Category Name</h2>
          {/* <div className="col-md-12 d-flex justify-content-between align-items-center">
            <div className="col-md-3">
              <h4>Title</h4>
              <p>qweqweqwe</p>
            </div>
            <div className="col-md-3">
              <h4>Title</h4>
              <p>qweqweqwe</p>
            </div>
            <div className="col-md-3">
              <h4>Title</h4>
              <p>qweqweqwe</p>
            </div>
            <div className="col-md-3">
              <h4>Title</h4>
              <p>qweqweqwe</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
