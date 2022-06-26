import React, { useEffect, useState } from "react";
import { fetchData, selectArticles } from "../../state/articles/ArticlesSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import ArticleCard from "./ArticleCard";
import './ArticleOverview.css';

const ArticleOverview: React.FC<{}> = props => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const articles = useAppSelector(selectArticles);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      await dispatch(fetchData());
      setIsLoading(false);
    }

    fetchArticles().catch(console.error);
  }, []);

  return (
    <div className="overview-container">
        <ul className="overview-list">
          {articles.map(article => (<ArticleCard {...article}/>))}
        </ul>
    </div>
  );
};

export default ArticleOverview