import React from "react";
import { Article } from "../../interfaces/Article.interface";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { removeFromWishList, addToWishList, selectItemIsOnWishList } from "../../state/wishlist/WishListSlice";
import './ArticleCard.css';

const ArticleCard: React.FC<Article> = props => {
    const dispatch = useAppDispatch()
    const {id, Game, Dev, Year, imageURL} = props;
    const isOnWhiteList = useAppSelector(selectItemIsOnWishList(id));
  return (
    <div className="article-card">
        <img className="article-image" src={imageURL}/>
        <div className="card-container">
            <b>{Game}</b> - {Dev} ({Year})
        </div>
        <img 
            className="wish-list-icon" 
            src={`./heart${!isOnWhiteList ? '_empty':''}.png`}
            onClick={() => {
                if(!isOnWhiteList){
                    dispatch(addToWishList({id}))
                }else{
                    dispatch(removeFromWishList({id}))
                }
            }}
        />
       
    </div>
  );
};

export default ArticleCard